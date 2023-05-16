import * as React from "react";
import { ReactElement, memo, useState, useEffect } from "react";

// Components
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";

// Styles
import { DateTimePickerWrapper, DateTimeInputRow } from "./DateField.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { DateFieldInputSettings, DateData } from "./DateFieldTypes";
import { StyledDisabledText } from "@root/forms/shared/styledComponents";
import { transform_dateFormat } from "@root/transforms";

const FormFieldDate = (props: MosaicFieldProps<"date", DateFieldInputSettings, DateData>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value,
		onBlur,
		error,
	} = props;

	const { required, disabled } = fieldDef || {};
	const [dateInput, setDateInput] = useState(null);
	const [timeInput, setTimeInput] = useState(null);

	useEffect(() => {
		if (value && !dateInput && !timeInput) {
			setDateInput(formatDate(value));
			setTimeInput(formatDate(value));
		}
	}, [value, dateInput, timeInput]);


	const formatDate = (dateValue: Date) => {
		const stringDate = dateValue.toISOString();
		const [date, time] = stringDate.split("T");
		const [year, month, day] = date.split("-");
		const [hours, minutes] = time.split(":");

		return new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
	}

	const handleValue = (position: number, date: Date) => {
		let newValue = value || undefined;
		let year = 0;
		let month = 0;
		let day = 0;
		let hours = 0;
		let minutes = 0;
		let seconds = 0;

		//THIS LOGIC SHOULD ALSO BE UPDATED, I'M GUESSING IT COULD GO AFTER NEWVALUE
		//ALSO IT DOESN'T MAKE MUCH SENSE TO UPDATE THE STATE HERE AND THEN WANTING TO USE IT BELOW,
		//THIS MIGHT LEAD TO RACE CONDITIONS.
		position === 0 ? setDateInput(date) : setTimeInput(date);

		if (!isNaN(date?.valueOf())) {

			if (position === 0) {
				year = date.getFullYear();
				month = date.getMonth();
				day = date.getDate();
				hours = fieldDef?.inputSettings?.showTime ? timeInput?.getHours() : 0; //THIS ONLY SOLVES THE ONCHANGE, BUT THE VALUE STILL APPEARS ON THE FIELD
				minutes = fieldDef?.inputSettings?.showTime ? timeInput?.getMinutes() : 0;
				seconds = fieldDef?.inputSettings?.showTime ? timeInput?.getSeconds() : 0;
			} else {
				year = dateInput?.getFullYear() || new Date().getFullYear();
				month = dateInput?.getMonth() || new Date().getMonth();
				day = dateInput?.getDate() || new Date().getDate();
				hours = date.getHours();
				minutes = date.getMinutes();
				seconds = date.getSeconds();
			}

			if (required && fieldDef?.inputSettings?.showTime) {
				if ((position === 0 && timeInput) || (position === 1 && dateInput)) {
					newValue = new Date(Date.UTC(year, month, day, hours, minutes, seconds));
				}
			} else {
				newValue = new Date(Date.UTC(year, month, day, hours, minutes, seconds));
			}

		} else {
			if (!required && fieldDef?.inputSettings?.showTime) {
				if ((position === 0 && !timeInput) || (position === 1 && !dateInput)) {
					newValue = undefined;
				}
			} else
				newValue = undefined;
		}
		return newValue;
	}

	const handleOnChange = async (position: number, date: Date) => {
		const newValue = handleValue(position, date);
		await onChange(newValue)
	};

	return (
		<DateTimeInputRow>
			{!disabled ? (
				<>
					<DateTimePickerWrapper>
						<DatePicker
							error={error}
							onChange={(date) => handleOnChange(0, date)}
							fieldDef={{
								name: fieldDef?.name,
								label: "",
								type: "",
								inputSettings: {
									placeholder: "MM / DD / YYYY"
								},
								required: fieldDef?.required,
							}}
							value={dateInput}
							onBlur={onBlur}
						/>
					</DateTimePickerWrapper>
					{fieldDef?.inputSettings?.showTime &&
						<DateTimePickerWrapper>
							<TimePicker
								error={error}
								onChange={(date) => handleOnChange(1, date)}
								fieldDef={{
									name: fieldDef?.name,
									label: "",
									type: "timePicker",
									inputSettings: {
										placeholder: "00:00 AM/PM"
									}
								}}
								value={timeInput}
								onBlur={onBlur}
							/>
						</DateTimePickerWrapper>
					}
				</>
			) : (
				<>
					<StyledDisabledText>
						{
							value ? transform_dateFormat()({data: value})
							: "MM / DD / YYYY"
						}
					</StyledDisabledText>
					{fieldDef?.inputSettings?.showTime &&
						<StyledDisabledText>
							{
								value ? new Date(value).toLocaleTimeString("en", { timeStyle: "short", hour12: true, timeZone: "UTC" })
								: "00:00 AM/PM"
							}
						</StyledDisabledText>
					}
				</>
			)}
		</DateTimeInputRow>
	);
};

export default memo(FormFieldDate);
