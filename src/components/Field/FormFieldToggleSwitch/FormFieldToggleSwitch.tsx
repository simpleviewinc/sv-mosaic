import * as React from "react";
import { ReactElement, memo } from "react";

// Components
import ToggleSwitch from "@root/components/ToggleSwitch";

// Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import { ToggleSwitchInputSettings, FieldDefToggleSwitchData } from "./FormFieldToggleSwitchTypes";

const FormFieldToggleSwitch = (
	props: MosaicFieldProps<"toggleSwitch", ToggleSwitchInputSettings, FieldDefToggleSwitchData>
): ReactElement => {
	const {
		fieldDef,
		onBlur,
		onChange,
		value,
		disabled
	} = props;

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
