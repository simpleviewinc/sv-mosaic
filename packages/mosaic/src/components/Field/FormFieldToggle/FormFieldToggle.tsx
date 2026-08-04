import type { ReactElement } from "react";

import * as React from "react";
import { memo } from "react";

import type { MosaicFieldProps } from "@root/components/Field";
import type { ToggleInputSettings, FieldDefToggleData } from "./FormFieldToggleTypes";

import Toggle from "@root/components/Toggle";
import { FormFieldSwitchSkeleton } from "./FormFieldToggleSkeleton";

const FormFieldToggle = (
	props: MosaicFieldProps<"toggle", ToggleInputSettings, FieldDefToggleData>,
): ReactElement => {
	const {
		fieldDef,
		onBlur,
		onChange,
		value,
		disabled,
		skeleton,
	} = props;

	if (skeleton) {
		return <FormFieldSwitchSkeleton />;
	}

	return (
		<Toggle
			disabled={disabled}
			checked={value}
			label={fieldDef?.inputSettings?.toggleLabel}
			onChange={onChange}
			onBlur={onBlur}
		/>
	);
};

export default memo(FormFieldToggle);
