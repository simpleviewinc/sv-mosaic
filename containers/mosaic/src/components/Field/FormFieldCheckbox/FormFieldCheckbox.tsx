import type { ReactElement } from "react";

import React from "react";
import { memo } from "react";

import type { MosaicFieldProps } from "@root/components/Field";
import type { FormFieldCheckboxInputSettings, CheckboxData } from "./FormFieldCheckboxTypes";

import { StyledCheckboxList } from "./FormFieldCheckbox.styled";
import { FormFieldCheckboxSkeleton } from "./FormFieldCheckboxSkeleton";
import useOptions from "@root/utils/hooks/useOptions/useOptions";

const FormFieldCheckbox = (
	props: MosaicFieldProps<"checkbox", FormFieldCheckboxInputSettings, CheckboxData>,
): ReactElement => {
	const {
		fieldDef,
		onChange,
		onBlur,
		value,
		disabled,
		skeleton,
		id,
	} = props;

	const {
		inputSettings: {
			options: providedOptions,
			itemsPerColumn,
		} = {},
	} = fieldDef;

	const { options, loading } = useOptions({
		from: providedOptions,
		add: value,
	});

	if (skeleton || loading) {
		return <FormFieldCheckboxSkeleton />;
	}

	return (
		<StyledCheckboxList
			disabled={disabled}
			checked={value}
			options={options}
			onChange={onChange}
			onBlur={onBlur}
			style={fieldDef.style}
			className={fieldDef.className}
			id={id}
			itemsPerColumn={itemsPerColumn}
		/>
	);
};

export default memo(FormFieldCheckbox);
