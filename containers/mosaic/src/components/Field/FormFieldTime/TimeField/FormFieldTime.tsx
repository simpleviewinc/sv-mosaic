import type { ReactElement } from "react";
import get from "lodash/get";

import React, { memo, useContext, useEffect, useMemo, useRef } from "react";

// Components
import TimePicker from "../TimePicker";

// Styles
import type { MosaicFieldProps } from "@root/components/Field";
import type { TimeFieldInputSettings, TimeData } from "./TimeFieldTypes";
import { matchTime } from "@root/utils/date";
import { TIME_FORMAT_FULL_PLACEHOLDER } from "@root/constants";
import Skeleton from "@mui/material/Skeleton";
import { FormContext } from "@root/components/Form/FormContext";
import isSameTime from "@root/utils/date/isSameTime";

const FormFieldTime = (props: MosaicFieldProps<"time", TimeFieldInputSettings, TimeData>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value: providedValue,
		onBlur,
		disabled,
		error,
		inputRef,
		id,
		skeleton,
		path,
	} = props;
	const { inputSettings = {} } = fieldDef;
	const { defaultTime } = inputSettings;

	const value = useMemo(() => providedValue || {
		time: null,
		keyboardInputValue: undefined,
	}, [providedValue]);

	const { state } = useContext(FormContext);
	const date = useMemo(() => get(state.internalData, [...(path || []), "date"]), [state, path]);
	const isManualEntry = useRef(false);

	useEffect(() => {
		if (isManualEntry.current || !defaultTime) {
			return;
		}

		const newValue = date?.date ? {
			time: matchTime(new Date(), defaultTime),
			validTime: true,
		} : undefined;

		onChange((value) => {
			// Prevent a new value being dispatched if it is the same
			// as the current value (either both undefined or both the
			// same time)
			if (
				(value?.time === newValue?.time) ||
				(value?.time && newValue?.time && isSameTime(value.time, newValue.time))
			) {
				return value;
			}

			return newValue;
		});
	}, [date, defaultTime, onChange]);

	const handleTimeChange = (time: Date | null, keyboardInputValue?: string) => onChange({ time, keyboardInputValue });

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
