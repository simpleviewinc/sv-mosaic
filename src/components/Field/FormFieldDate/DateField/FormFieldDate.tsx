import * as React from "react";
import { ReactElement, useEffect, useState, memo } from "react";

// Components
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";

// Styles
import { DateTimePickerWrapper, DateTimeInputRow } from "./DateField.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { DateFieldInputSettings, DateData } from "./DateFieldTypes";
import { isEqual } from "date-fns";
import { matchTime, textIsValidDate } from "@root/utils/date";
import { DATE_FORMAT_FULL, DATE_FORMAT_FULL_PLACEHOLDER, TIME_FORMAT_FULL, TIME_FORMAT_FULL_PLACEHOLDER } from "@root/constants";

const ENTER_VALID_DATE = `Please enter a valid ${DATE_FORMAT_FULL_PLACEHOLDER} date`;
const ENTER_VALID_TIME = `Please enter a valid ${TIME_FORMAT_FULL_PLACEHOLDER} time`;
const PROVIDE_TIME = "Please also provide a time";

const FormFieldDate = (props: MosaicFieldProps<"date", DateFieldInputSettings, DateData>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value = null,
		onBlur,
		error,
		dispatch
	} = props;

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

	const setError = (msg: string) => dispatch && dispatch((d) => {
		d({
			type: "FIELD_VALIDATE",
			name: fieldDef.name,
			value: msg,
		})
	});

	const clearError = () => dispatch && dispatch((d) => {
		d({
			type: "FIELD_UNVALIDATE",
			name: fieldDef.name
		})
	});

	const handleDateChange = async (date: Date, keyboardInputValue?: string) => {
		const isKeyboardEvent = keyboardInputValue !== undefined;
		const validKeyboardInput = textIsValidDate(keyboardInputValue, DATE_FORMAT_FULL);

		clearError();

		if (isKeyboardEvent && !validKeyboardInput) {
			// This handler was caused by keyboard input, but it's not a valid date
			setError(ENTER_VALID_DATE);
			return onChange(undefined);
		}

		setDateChosen(date);

		/**
		 * -- START --
		 * To force the user to pick a time if a date is chosen (regardless
		 * of whether or not it's required), do this:
		 */

		// if (showTime && !timeChosen) {
		// 	setError(PROVIDE_TIME);
		// }

		// if (!showTime || timeChosen) {
		// 	matchTime(date, showTime && timeChosen ? timeChosen : [0, 0, 0, 0]);
		// 	onChange(date);
		// } else {
		// 	onChange(undefined);
		// }

		/**
		 * Otherwise do this
		 */

		if (showTime) {
			if (fieldDef.required && !timeChosen) {
				setError(PROVIDE_TIME);
				return onChange(undefined);
			}

			matchTime(date, timeChosen ? timeChosen : [0, 0, 0, 0]);
		}

		onChange(date);

	}

	const handleTimeChange = async (time: Date, keyboardInputValue?: string) => {
		const isKeyboardEvent = keyboardInputValue !== undefined;
		const validKeyboardInput = textIsValidDate(keyboardInputValue, TIME_FORMAT_FULL);

		clearError();

		if (!time || (isKeyboardEvent && !validKeyboardInput)) {
			// This handler was caused by keyboard input, but it's not a valid date
			setError(ENTER_VALID_TIME);
			return onChange(undefined);
		}

		setTimeChosen(time);

		if (dateChosen) {
			const newDate = new Date(dateChosen.getTime());
			matchTime(newDate, time);
			onChange(newDate);
		}
	}

	return (
		<DateTimeInputRow $hasTimeField={showTime}>
			<DateTimePickerWrapper>
				<DatePicker
					error={error}
					onChange={handleDateChange}
					fieldDef={{
						name: fieldDef?.name,
						label: "",
						type: "",
						inputSettings: {
							placeholder: DATE_FORMAT_FULL_PLACEHOLDER,
							minDate: fieldDef?.inputSettings?.minDate
						},
						required: fieldDef?.required,
						disabled: fieldDef?.disabled
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
							},
							disabled: fieldDef?.disabled
						}}
						value={timeChosen}
						onBlur={onBlur}
					/>
				</DateTimePickerWrapper>
			}
		</DateTimeInputRow>
	);
};

export default memo(FormFieldDate);
