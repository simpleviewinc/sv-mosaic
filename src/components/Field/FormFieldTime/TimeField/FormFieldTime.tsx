import * as React from "react";
import { ReactElement, useRef, useCallback, memo } from "react";

// Components
import TimePicker from "../TimePicker";

// Styles
import { MosaicFieldProps } from "@root/components/Field";
import { TimeFieldInputSettings, TimeData } from "./TimeFieldTypes";
import { textIsValidDate } from "@root/utils/date";
import { TIME_FORMAT_FULL, TIME_FORMAT_FULL_PLACEHOLDER } from "@root/constants";
import { INVALID_TIME } from "@root/components/Form/fieldErrors";
import { Skeleton } from "@mui/material";
import useValidator from "@root/utils/hooks/useValidator";

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

	const { addValidator } = methods;

	const timeTextValue = useRef<string | undefined>();

	useValidator({
		addValidator,
		name: fieldDef.name,
		validator: useCallback(async (_, __, ___, internalValue) => {
			if (!internalValue) {
				return;
			}

			if (!timeTextValue.current || textIsValidDate(timeTextValue.current, TIME_FORMAT_FULL)) {
				return;
			}

			return INVALID_TIME.message;
		}, []),
		autoRevalidate: true,
	});

	const handleTimeChange = async (time: Date, keyboardInputValue?: string) => {
		timeTextValue.current = keyboardInputValue;

		onChange({
			...value,
			time,
			validTime: !keyboardInputValue || textIsValidDate(keyboardInputValue, TIME_FORMAT_FULL),
		});
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
