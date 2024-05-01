import * as React from "react";
import { ReactElement, memo, useCallback, useRef } from "react";

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
import { FormFieldDateSkeleton } from "./FormFieldDateSkeleton";
import useValidator from "@root/utils/hooks/useValidator";

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
		skeleton,
		id,
	} = props;

	const { addValidator } = methods;

	const showTime = fieldDef?.inputSettings?.showTime;
	const blurred = useRef<{ date: boolean; time: boolean }>({ date: false, time: false });

	const dateTextValue = useRef<string | undefined>();
	const timeTextValue = useRef<string | undefined>();

	useValidator({
		addValidator,
		name: fieldDef.name,
		validator: useCallback(async (_, __, ___, internalValue) => {
			if (!internalValue || internalValue.validDate || !dateTextValue.current) {
				return;
			}

			if (textIsValidDate(dateTextValue.current, DATE_FORMAT_FULL)) {
				return;
			}

			return INVALID_DATE.message;
		}, []),
	});

	useValidator({
		addValidator,
		name: fieldDef.name,
		validator: useCallback(async (_, __, ___, internalValue) => {
			if (!internalValue) {
				return;
			}

			if (timeTextValue.current && !textIsValidDate(timeTextValue.current, TIME_FORMAT_FULL)) {
				return INVALID_TIME.message;
			}

			if (!internalValue.validDate || internalValue.validTime || !showTime) {
				return;
			}

			return TIME_REQUIRED.message;
		}, [showTime]),
		autoRevalidate: true,
	});

	const handleDateChange = async (date: Date, keyboardInputValue?: string) => {
		dateTextValue.current = keyboardInputValue;

		onChange({
			...value,
			date,
			validDate: !keyboardInputValue || textIsValidDate(keyboardInputValue, DATE_FORMAT_FULL),
		});
	};

	const handleTimeChange = async (time: Date, keyboardInputValue?: string) => {
		timeTextValue.current = keyboardInputValue;

		onChange({
			...value,
			time,
			validTime: !keyboardInputValue || textIsValidDate(keyboardInputValue, TIME_FORMAT_FULL),
		});
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
