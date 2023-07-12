import * as React from "react";
import { ReactElement, memo, useState } from "react";

// Components
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";

// Styles
import { DateTimePickerWrapper, DateTimeInputRow } from "./DateField.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { DateFieldInputSettings, DateData } from "./DateFieldTypes";
import { StyledDisabledText } from "@root/forms/shared/styledComponents";
import { transform_dateFormat } from "@root/transforms";
import { matchTime, sanitizeInputDate } from "@root/utils/date";

const FormFieldDate = (props: MosaicFieldProps<"date", DateFieldInputSettings, DateData>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value,
		onBlur,
		error,
	} = props;

	const { disabled } = fieldDef || {};
	const [dateInput, setDateInput] = useState<null | Date>(null);
	const [timeInput, setTimeInput] = useState<null | Date>(null);
	const showTime = fieldDef?.inputSettings?.showTime;

	const handleDateChange = async (date: Date) => {
		const sanitizedDate = sanitizeInputDate(date);

		if (!sanitizedDate) {
			onChange(undefined);
			return;
		}

		// If the chosen date is the same as the current value,
		// don't update any state
		if (value && value.getTime() === date.getTime()) {
			return;
		}

		if (showTime && value) {
			matchTime(sanitizedDate, value);
		} else {
			sanitizedDate.setHours(0, 0, 0, 0)
		}

		setDateInput(sanitizedDate);
		onChange(sanitizedDate);
	}

	const handleTimeChange = async (time: Date) => {
		const sanitizedDate = sanitizeInputDate(time);

		if (!sanitizedDate) {
			onChange(undefined);
			return;
		}

		// If the chosen date is the same as the current value,
		// don't update any state
		if (value && value.getTime() === time.getTime()) {
			return;
		}

		matchTime(sanitizedDate, time);

		setTimeInput(sanitizedDate);
		onChange(sanitizedDate);
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
									placeholder: "MM / DD / YYYY"
								},
								required: fieldDef?.required,
							}}
							value={dateInput}
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
