import type { ReactElement } from "react";

import React, { memo, useEffect, useMemo, useRef } from "react";

import type { MosaicFieldProps } from "@root/components/Field";
import type { DateFieldInputSettings, DateData } from "./DateFieldTypes";

import { matchTime, parseTime, textIsValidDate } from "@root/utils/date";
import { DATE_FORMAT_FULL, DATE_FORMAT_FULL_PLACEHOLDER, TIME_FORMAT_FULL, TIME_FORMAT_FULL_PLACEHOLDER } from "@root/constants";
import { INVALID_DATE, INVALID_TIME, TIME_REQUIRED } from "@root/components/Form/fieldErrors";
import { useFieldErrors } from "@root/utils/hooks";
import DatePicker from "../DatePicker";
import TimePicker from "../../FormFieldTime/TimePicker";
import { DateTimePickerWrapper, DateTimeInputRow } from "./DateField.styled";
import { FormFieldDateSkeleton } from "./FormFieldDateSkeleton";

const FormFieldDate = (props: MosaicFieldProps<"date", DateFieldInputSettings, DateData>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value: providedValue,
		onBlur,
		disabled,
		error,
		methods,
		inputRef,
		skeleton,
		id,
	} = props;
	const {
		inputSettings: {
			showTime,
			minDate,
			maxDate,
			defaultTime,
		} = {},
	} = fieldDef;

	const blurred = useRef<{ date: boolean; time: boolean }>({ date: false, time: false });
	const value = useMemo(() => providedValue || {
		validDate: false,
		validTime: false,
	}, [providedValue]);

	const { addError, removeError } = useFieldErrors({
		methods,
		name: fieldDef.name,
	});

	useEffect(() => {
		console.log("setter effect..");
		if (providedValue || !defaultTime) {
			return;
		}

		try {
			const time = matchTime(new Date(), parseTime(defaultTime));
			onChange({
				date: undefined,
				validDate: false,
				time,
				validTime: true,
			});
		} catch (err) {
			console.error(err);
		}
	}, [defaultTime, providedValue, onChange]);

	const handleDateChange = async (date: Date, keyboardInputValue?: string) => {
		const validKeyboardInput = textIsValidDate(keyboardInputValue, DATE_FORMAT_FULL);

		if (showTime && date && !value.validTime) {
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
				// An empty field is still an acceptable input as far as
				// the time field goes, but it doesn't mean it's a valid time.
				validTime: Boolean(time),
			});
		}
	};

	const onBlurProxy = (type: "date" | "time") => async () => {
		blurred.current[type] = true;

		if (
			blurred.current.date &&
			(!showTime || blurred.current.time)
		) {
			onBlur();
		}
	};

	if (skeleton) {
		return <FormFieldDateSkeleton showTime={showTime} />;
	}

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
							minDate,
							maxDate,
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
