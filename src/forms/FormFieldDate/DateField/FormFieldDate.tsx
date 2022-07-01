import * as React from "react";
import { ReactElement, memo, useState, useEffect } from "react";

// Components
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";

// Styles
import { DateTimePickerWrapper, DateTimeInputRow } from "./DateField.styled";
import { DisabledDateTimeValue } from "../DatePicker/DatePicker.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { DateFieldDef } from "./DateFieldTypes";

const FormFieldDate = (props: MosaicFieldProps<DateFieldDef, Date>): ReactElement => {
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

		position === 0 ? setDateInput(date) : setTimeInput(date);

		if (!isNaN(date?.valueOf())) {

			if (position === 0) {
				year = date.getFullYear();
				month = date.getMonth();
				day = date.getDate();
				hours = timeInput?.getHours() || 0;
				minutes = timeInput?.getMinutes() || 0;
				seconds = timeInput?.getSeconds() || 0;
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
									type: "",
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
					<DisabledDateTimeValue>
						{
							value ? new Date(value).toLocaleDateString("en", { timeZone: "UTC" })
							: "MM / DD / YYYY"
						}
					</DisabledDateTimeValue>
					{fieldDef?.inputSettings?.showTime &&
						<DisabledDateTimeValue>
							{
								value ? new Date(value).toLocaleTimeString("en", { timeStyle: "short", hour12: true, timeZone: "UTC" })
								: "00:00 AM/PM"
							}
						</DisabledDateTimeValue>
					}
				</>
			)}
		</DateTimeInputRow>
	);
};

export default memo(FormFieldDate);
