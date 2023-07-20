import * as React from "react";
import { ReactElement, useEffect, useState, memo } from "react";

// Components
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";

// Styles
import { DateTimePickerWrapper, DateTimeInputRow } from "./DateField.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { DateFieldInputSettings, DateData } from "./DateFieldTypes";
import { StyledDisabledText } from "@root/forms/shared/styledComponents";
import { transform_dateFormat } from "@root/transforms";
import { isEqual } from "date-fns";
import { matchTime, textIsValidDate } from "@root/utils/date";
import { DATE_FORMAT_FULL, DATE_FORMAT_FULL_PLACEHOLDER, TIME_FORMAT_FULL, TIME_FORMAT_FULL_PLACEHOLDER } from "@root/constants";

const FormFieldDate = (props: MosaicFieldProps<"date", DateFieldInputSettings, DateData>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value = null,
		onBlur,
		error,
	} = props;

	const { disabled } = fieldDef || {};
	const showTime = fieldDef?.inputSettings?.showTime;

	// State splitting is necessary because the form value is a
	// single date object, which provides no way of differentiating
	// between a valid date / invalid time combo or any variation thereof
	const [dateChosen, setDateChosen] = useState<null | Date>(value);
	const [timeChosen, setTimeChosen] = useState<null | Date>(value);

	useEffect(() => {
		if (!value) {
			return;
		}

		setDateChosen((date) => isEqual(date, value) ? date : value);
		setTimeChosen((time) => isEqual(time, value) ? time : value);
	}, [value]);

	const handleDateChange = async (date: Date, keyboardInputValue?: string) => {
		if (keyboardInputValue === undefined || textIsValidDate(keyboardInputValue, DATE_FORMAT_FULL)) {
			setDateChosen(date);

			if (!showTime || timeChosen) {
				matchTime(date, showTime && timeChosen ? timeChosen : [0, 0, 0, 0]);
				onChange(date);
			} else {
				onChange(undefined);
			}
		} else {
			onChange(undefined);
		}
	}

	const handleTimeChange = async (time: Date, keyboardInputValue?: string) => {
		if (keyboardInputValue === undefined || textIsValidDate(keyboardInputValue, TIME_FORMAT_FULL)) {
			setTimeChosen(time);

			if (dateChosen) {
				const newDate = new Date(dateChosen.getTime());
				matchTime(newDate, time);
				onChange(newDate);
			}
		} else {
			onChange(undefined);
		}
	}

	return (
		<DateTimeInputRow>
			{!disabled ? (
				<>
					<DateTimePickerWrapper>
						<DatePicker
							error={error}
							onChange={handleDateChange}
							fieldDef={{
								name: fieldDef?.name,
								label: "",
								type: "",
								inputSettings: {
									placeholder: DATE_FORMAT_FULL_PLACEHOLDER
								},
								required: fieldDef?.required,
							}}
							value={dateChosen}
							onBlur={onBlur}
						/>
					</DateTimePickerWrapper>
					{showTime &&
						<DateTimePickerWrapper>
							<TimePicker
								error={error}
								onChange={handleTimeChange}
								fieldDef={{
									name: fieldDef?.name,
									label: "",
									type: "timePicker",
									inputSettings: {
										placeholder: TIME_FORMAT_FULL_PLACEHOLDER
									}
								}}
								value={timeChosen}
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
					{showTime &&
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
