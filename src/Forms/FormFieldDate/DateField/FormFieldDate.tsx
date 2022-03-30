import * as React from "react";
import { ReactElement, memo, useState, useEffect } from "react";

// Components
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";
import HelperText from "@root/components/Field/HelperText";

// Styles
import { DateTimePickerWrapper, DateTimeInputRow } from "./DateField.styled";
import { DisabledDateTimeValue } from "../DatePicker/DatePicker.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { DateFieldDef } from "./DateFieldTypes";

const FormFieldDate = (props: MosaicFieldProps<DateFieldDef, string>): ReactElement => {

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
		setDateInput(value || null);
		setTimeInput(value || null);
	}, []);

	const handleOnChange = async (position, date) => {

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
				if ((position === 0 && timeInput) || (position === 1 && dateInput))
					newValue = new Date(Date.UTC(year, month, day, hours, minutes, seconds)).toISOString();
			} else {
				newValue = new Date(Date.UTC(year, month, day, hours, minutes, seconds)).toISOString();
			}

		} else {
			if (!required && fieldDef?.inputSettings?.showTime) {
				if ((position === 0 && !timeInput) || (position === 1 && !dateInput))
					newValue = undefined;
			} else
				newValue = undefined;
		}

		await onChange(newValue);

		/* 
		//Old Approach

		let newValue = value;
		position === 0 ? setDateInput(date) : setTimeInput(date);

		if (!isNaN(date?.valueOf())) {

			const dateString = date.toISOString();
			const splitDate = dateString.split('T') || [];

			if (!fieldDef?.inputSettings?.showTime) {
				newValue = dateString;
				setDateInput(newValue);
			} else {

				if (!newValue) {
					position === 0 ? setDateInput(dateString) : setTimeInput(dateString);
					if (required) {
						if (position === 0 && timeInput) {
							const splitTimeInput = timeInput.split("T") || [];
							newValue = `${splitDate[0]}T${splitTimeInput[1]}`;
						} else if (position === 1 && dateInput) {
							const splitDateInput = dateInput.split("T") || [];
							newValue = `${splitDateInput[0]}T${splitDate[1]}`;
						} else {
							newValue = undefined;
						}
					} else {
						newValue = dateString;
					}
				} else {
					const splitNewValue = newValue.split("T") || [];

					if (position === 0) {
						newValue = `${splitDate[0]}T${splitNewValue[1]}`;
						setDateInput(newValue);
					} else {
						newValue = `${splitNewValue[0]}T${splitDate[1]}`;
						setTimeInput(newValue);
					}
				}
			}
		} else {

			if (fieldDef?.inputSettings?.showTime && dateInput && position === 1) {
				newValue = !required ? dateInput : undefined;
				setDateInput(dateInput);
			} else if (fieldDef?.inputSettings?.showTime && timeInput && position === 0) {
				newValue = !required ? timeInput : undefined;
				setTimeInput(timeInput);
			} else {
				newValue = undefined;
			}
		} 

		await onChange(newValue);
		//await onBlur();

		*/
	};

	return (
		<DateTimeInputRow>
			{!disabled ? (
				<>
					<DateTimePickerWrapper>
						<DatePicker
							error={error}
							onChange={(d) => handleOnChange(0, d)}
							fieldDef={{
								name: fieldDef?.name,
								label: "",
								inputSettings: {
									placeholder: "MM / DD / YYYY"
								},
								required: fieldDef?.required,
							}}
							value={dateInput}
							onBlur={onBlur}
						/>
						<HelperText>Month, Day, Year</HelperText>
					</DateTimePickerWrapper>
					{fieldDef?.inputSettings?.showTime &&
						<DateTimePickerWrapper>
							<TimePicker
								error={error}
								onChange={(d) => handleOnChange(1, d)}
								fieldDef={{
									name: fieldDef?.name,
									label: "",
									inputSettings: {
										placeholder: "00:00 AM/PM"
									}
								}}
								value={timeInput}
								onBlur={onBlur}
							/>
							<HelperText>Hour, Minute, AM or PM</HelperText>
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
