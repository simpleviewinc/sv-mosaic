import type { ReactElement } from "react";
import get from "lodash/get";

import React, { memo, useContext, useEffect, useMemo } from "react";

// Components
import TimePicker from "../TimePicker";

// Styles
import type { MosaicFieldProps } from "@root/components/Field";
import type { TimeFieldInputSettings, TimeData } from "./TimeFieldTypes";
import { isValidDate, matchTime } from "@root/utils/date";
import { TIME_FORMAT_FULL_PLACEHOLDER } from "@root/constants";
import Skeleton from "@mui/material/Skeleton";
import { FormContext } from "@root/components/Form/FormContext";

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

	useEffect(() => {
		onChange((value) => {
			const usingDefaultTime = !value || value.usingDefaultTime;

			if (!usingDefaultTime) {
				return value;
			}

			if (!defaultTime) {
				return value;
			}

			if (!date?.date) {
				return undefined;
			}

			return {
				time: matchTime(new Date(), defaultTime),
				validTime: true,
				usingDefaultTime: true,
			};
		});
	}, [date, defaultTime, onChange]);

	const handleTimeChange = (time: Date | null, keyboardInputValue?: string) => {
		return onChange({
			time,
			keyboardInputValue,
			usingDefaultTime: !time || !isValidDate(time),
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
