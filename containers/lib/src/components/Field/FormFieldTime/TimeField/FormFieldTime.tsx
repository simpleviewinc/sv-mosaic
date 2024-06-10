import * as React from "react";
import { ReactElement, memo } from "react";

// Components
import TimePicker from "../TimePicker";

// Styles
import { MosaicFieldProps } from "@root/components/Field";
import { TimeFieldInputSettings, TimeData } from "./TimeFieldTypes";
import { textIsValidDate } from "@root/utils/date";
import { TIME_FORMAT_FULL, TIME_FORMAT_FULL_PLACEHOLDER } from "@root/constants";
import { INVALID_TIME } from "@root/components/Form/fieldErrors";
import { useFieldErrors } from "@root/utils/hooks";
import Skeleton from "@mui/material/Skeleton";

const FormFieldTime = (props: MosaicFieldProps<"time", TimeFieldInputSettings, TimeData>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value = {
			validTime: false,
		},
		onBlur,
		disabled,
		error,
		methods,
		inputRef,
		id,
		skeleton,
	} = props;

	const { addError, removeError } = useFieldErrors({
		methods,
		name: fieldDef.name,
	});

	const handleTimeChange = async (time: Date, keyboardInputValue?: string) => {
		const isKeyboardEvent = keyboardInputValue !== undefined;
		const validKeyboardInput = textIsValidDate(keyboardInputValue, TIME_FORMAT_FULL);

		if ((isKeyboardEvent && !validKeyboardInput) || !time) {
			// This handler was caused by keyboard input, but it's not a valid date
			// or the time is invalid (the input field is blank)

			if (time) {
				addError(INVALID_TIME);
			}

			onChange({
				...value,
				time,
				validTime: false,
			});

			return;
		} else {
			removeError([INVALID_TIME]);

			onChange({
				...value,
				time,
				validTime: true,
			});
		}
	};

	if (skeleton) {
		return (
			<Skeleton
				variant="rectangular"
				width="100%"
				height={43}
			/>
		);
	}

	return (
		<TimePicker
			id={id}
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
			onBlur={onBlur}
			disabled={disabled}
			inputRef={inputRef}
		/>
	);
};

export default memo(FormFieldTime);
