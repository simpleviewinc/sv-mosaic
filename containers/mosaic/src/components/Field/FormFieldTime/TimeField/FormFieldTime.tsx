import type { ReactElement } from "react";
import get from "lodash/get";
import set from "lodash/fp/set";

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
	const { name, inputSettings = {} } = fieldDef;
	const { defaultTime } = inputSettings;

	const value = useMemo(() => providedValue || {
		time: null,
		keyboardInputValue: undefined,
	}, [providedValue]);

	const { methods: { addHook } } = useContext(FormContext);

	useEffect(() => {
		if (!defaultTime) {
			return;
		}

		if (!path || !path.length) {
			throw new Error("The `defaultTime` property can only be provided for a time field that works as a part of a group alongside a date field.");
		}

		return addHook("setFieldValueData", ({ data, internalData, ...rest }) => {
			if (
				rest.name !== "date" ||
				rest.path.join(".") !== (path || []).join(".")
			) {
				return;
			}

			const date = get(internalData, [...(path || []), "date"]);
			const time = get(internalData, [...(path || []), name]);
			const usingDefaultTime = !time || time.usingDefaultTime;

			if (!usingDefaultTime) {
				return;
			}

			if (!date?.date || !isValidDate(date.date)) {
				return {
					data,
					internalData: set([...(path || []), "time"], {
						time: null,
						keyboardInputValue: undefined,
						usingDefaultTime: true,
					}, internalData),
				};
			}

			return {
				data: set(path || [], matchTime(date.date, defaultTime), data),
				internalData: set([...(path || []), "time"], {
					time: matchTime(new Date(), defaultTime),
					keyboardInputValue: undefined,
					usingDefaultTime: true,
				}, internalData),
			};
		});
	}, [addHook, defaultTime, path, name]);

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
				label: fieldDef.label,
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
