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
import { INVALID_DATE, INVALID_TIME, TIME_REQUIRED } from "@root/components/Form/fieldErrors";
import { useFieldErrors } from "@root/utils/hooks";

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
	const fixedTime = fieldDef?.inputSettings?.fixedTime || [0, 0, 0, 0];

	// State splitting is necessary because the form value is a
	// single date object, which provides no way of differentiating
	// between a valid date / invalid time combo or any variation thereof
	const [dateChosen, setDateChosen] = useState<null | Date>(value);
	const [timeChosen, setTimeChosen] = useState<null | Date>(value);

	const { addError, removeError } = useFieldErrors({
		dispatch,
		name: fieldDef.name
	});

	useEffect(() => {
		if (!value) {
			return;
		}

		setDateChosen((date) => isEqual(date, value) ? date : value);
		setTimeChosen((time) => isEqual(time, value) ? time : value);
	}, [value]);

	const handleDateChange = async (date: Date, keyboardInputValue?: string) => {
		const isKeyboardEvent = keyboardInputValue !== undefined;
		const validKeyboardInput = textIsValidDate(keyboardInputValue, DATE_FORMAT_FULL);

		if (isKeyboardEvent && !validKeyboardInput) {
			// This handler was caused by keyboard input, but it's not a valid date
			addError(INVALID_DATE);
			return onChange(undefined);
		} else {
			removeError(INVALID_DATE);
		}

		setDateChosen(date);

		if (showTime) {
			if (fieldDef.required && !timeChosen) {
				addError(TIME_REQUIRED);
				return onChange(undefined);
			}

			matchTime(date, timeChosen ? timeChosen : fixedTime);
		} else {
			matchTime(date, fixedTime);
		}

		onChange(date);

	}

	const handleTimeChange = async (time: Date, keyboardInputValue?: string) => {
		const isKeyboardEvent = keyboardInputValue !== undefined;
		const validKeyboardInput = textIsValidDate(keyboardInputValue, TIME_FORMAT_FULL);

		if (!time || (isKeyboardEvent && !validKeyboardInput)) {
			// This handler was caused by keyboard input, but it's not a valid date
			addError(INVALID_TIME);
			return onChange(undefined);
		} else {
			removeError([TIME_REQUIRED, INVALID_TIME]);
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
							minDate: fieldDef?.inputSettings?.minDate,
							maxDate: fieldDef?.inputSettings?.maxDate
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
