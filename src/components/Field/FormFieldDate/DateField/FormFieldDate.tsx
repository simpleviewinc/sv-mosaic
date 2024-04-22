import * as React from "react";
import { ReactElement, memo, useRef } from "react";

// Components
import DatePicker from "../DatePicker";
import TimePicker from "../../FormFieldTime/TimePicker";

// Styles
import { DateTimePickerWrapper, DateTimeInputRow } from "./DateField.styled";
import { MosaicFieldProps } from "@root/components/Field";
import { DateFieldInputSettings, DateData } from "./DateFieldTypes";
import { textIsValidDate } from "@root/utils/date";
import { DATE_FORMAT_FULL, DATE_FORMAT_FULL_PLACEHOLDER, TIME_FORMAT_FULL, TIME_FORMAT_FULL_PLACEHOLDER } from "@root/constants";
import { INVALID_DATE, INVALID_TIME, TIME_REQUIRED } from "@root/components/Form/fieldErrors";
import { useFieldErrors } from "@root/utils/hooks";

const FormFieldDate = (props: MosaicFieldProps<"date", DateFieldInputSettings, DateData>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value = {
			validDate: false,
			validTime: false,
		},
		onBlur,
		disabled,
		error,
		methods,
		inputRef,
		id,
	} = props;

	const showTime = fieldDef?.inputSettings?.showTime;
	const blurred = useRef<{ date: boolean; time: boolean }>({ date: false, time: false });

	const { addError, removeError } = useFieldErrors({
		methods,
		name: fieldDef.name,
	});

	const handleDateChange = async (date: Date, keyboardInputValue?: string) => {
		const validKeyboardInput = textIsValidDate(keyboardInputValue, DATE_FORMAT_FULL);

		if (fieldDef?.inputSettings?.showTime && date && !value.validTime) {
			addError(TIME_REQUIRED);
		} else {
			removeError(TIME_REQUIRED);
		}

		if (
			// The datepicker was used
			(date && !keyboardInputValue) ||
			// A valid date was entered using the keyboard
			(keyboardInputValue && validKeyboardInput)
		) {
			removeError(INVALID_DATE);

			onChange({
				...value,
				date,
				validDate: true,
			});
		} else {
			if (keyboardInputValue && !validKeyboardInput) {
				addError(INVALID_DATE);
			} else {
				removeError(INVALID_DATE);
			}

			onChange({
				...value,
				date,
				validDate: false,
			});
		}
	};

	const handleTimeChange = async (time: Date, keyboardInputValue?: string) => {
		const isKeyboardEvent = keyboardInputValue !== undefined;
		const validKeyboardInput = textIsValidDate(keyboardInputValue, TIME_FORMAT_FULL);

		if (value.date && !time) {
			removeError(INVALID_TIME);
			addError(TIME_REQUIRED);

			onChange({
				...value,
				time,
				validTime: false,
			});
		} else if (isKeyboardEvent && !validKeyboardInput) {
			// This handler was caused by keyboard input, but it's not a valid date
			removeError(TIME_REQUIRED);
			addError(INVALID_TIME);

			onChange({
				...value,
				time,
				validTime: false,
			});

			return;
		} else {
			removeError([TIME_REQUIRED, INVALID_TIME]);

			onChange({
				...value,
				time,
				validTime: true,
			});
		}
	};

	const onBlurProxy = (type: "date" | "time") => async () => {
		blurred.current[type] = true;

		if (
			blurred.current.date &&
			(!fieldDef?.inputSettings?.showTime || blurred.current.time)
		) {
			onBlur();
		}
	};

	return (
		<DateTimeInputRow $hasTimeField={showTime}>
			<DateTimePickerWrapper>
				<DatePicker
					id={id}
					error={error}
					onChange={handleDateChange}
					fieldDef={{
						name: fieldDef?.name,
						label: "",
						type: "",
						inputSettings: {
							placeholder: DATE_FORMAT_FULL_PLACEHOLDER,
							minDate: fieldDef?.inputSettings?.minDate,
							maxDate: fieldDef?.inputSettings?.maxDate,
						},
						required: fieldDef?.required,
					}}
					value={value?.date}
					onBlur={onBlurProxy("date")}
					disabled={disabled}
					inputRef={inputRef}

				/>
			</DateTimePickerWrapper>
			{showTime && (
				<DateTimePickerWrapper>
					<TimePicker
						id={`${fieldDef?.name}-time`}
						error={error}
						onChange={handleTimeChange}
						fieldDef={{
							name: fieldDef?.name,
							label: "",
							type: "timePicker",
							inputSettings: {
								placeholder: TIME_FORMAT_FULL_PLACEHOLDER,
							},
						}}
						value={value?.time}
						onBlur={onBlurProxy("time")}
						disabled={disabled}
					/>
				</DateTimePickerWrapper>
			)}
		</DateTimeInputRow>
	);
};

export default memo(FormFieldDate);
