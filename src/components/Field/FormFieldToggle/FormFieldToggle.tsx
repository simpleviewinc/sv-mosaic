import * as React from "react";
import { ReactElement, memo } from "react";

// Components
import Toggle from "@root/components/Toggle";

// Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import { ToggleInputSettings, FieldDefToggleData } from "./FormFieldToggleTypes";
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
			required={fieldDef?.required}
		/>
	);
};

export default memo(FormFieldToggle);
