import type { ReactElement } from "react";

import React, { memo, useMemo } from "react";
import Skeleton from "@mui/material/Skeleton";

import type { MosaicFieldProps } from "@root/components/Field";
import type { DateFieldInputSettings, DateData } from "./DateFieldTypes";

import { DATE_FORMAT_FULL_PLACEHOLDER } from "@root/constants";
import DatePicker from "./DatePicker";
import { DateTimePickerWrapper } from "./DateField.styled";
import testIds from "@root/utils/testIds";

const FormFieldDate = (props: MosaicFieldProps<"date", DateFieldInputSettings, DateData>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value: providedValue,
		onBlur,
		disabled,
		error,
		inputRef,
		skeleton,
		id,
	} = props;
	const {
		inputSettings: {
			minDate = new Date(1100, 1, 1),
			maxDate = new Date(2999, 11, 31),
		} = {},
	} = fieldDef;

	const value = useMemo(() => providedValue || {
		date: null,
		keyboardInputValue: undefined,
	}, [providedValue]);

	const handleDateChange = (date: Date | null, keyboardInputValue?: string) => onChange({ date, keyboardInputValue });

	if (skeleton) {
		return (
			<Skeleton
				data-testid={testIds.FORM_FIELD_SKELETON}
				variant="rectangular"
				width="100%"
				height={43}
			/>
		);
	}

	return (
		<DateTimePickerWrapper>
			<DatePicker
				id={id}
				error={error}
				onChange={handleDateChange}
				fieldDef={{
					name: fieldDef?.name,
					label: fieldDef.label,
					type: "",
					inputSettings: {
						placeholder: DATE_FORMAT_FULL_PLACEHOLDER,
						minDate,
						maxDate,
					},
					required: fieldDef?.required,
				}}
				value={value?.date}
				onBlur={onBlur}
				disabled={disabled}
				inputRef={inputRef}

			/>
		</DateTimePickerWrapper>
	);
};

export default memo(FormFieldDate);
