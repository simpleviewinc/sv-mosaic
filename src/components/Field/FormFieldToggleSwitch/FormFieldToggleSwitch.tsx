import * as React from "react";
import { ReactElement, memo } from "react";

// Components
import ToggleSwitch from "@root/components/ToggleSwitch";

// Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import { ToggleSwitchInputSettings, FieldDefToggleSwitchData } from "./FormFieldToggleSwitchTypes";
import { FormFieldSwitchSkeleton } from "./FormFieldSwitchSkeleton";

const FormFieldToggleSwitch = (
	props: MosaicFieldProps<"toggleSwitch", ToggleSwitchInputSettings, FieldDefToggleSwitchData>,
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
		<ToggleSwitch
			disabled={disabled}
			checked={value}
			label={fieldDef?.inputSettings?.toggleLabel}
			onChange={onChange}
			onBlur={onBlur}
			required={fieldDef?.required}
		/>
	);
};

export default memo(FormFieldToggleSwitch);
