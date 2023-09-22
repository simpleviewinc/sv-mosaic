import * as React from "react";
import { ReactElement } from "react";

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
	} = props;

	return (
		<ToggleSwitch
			disabled={fieldDef?.disabled}
			checked={value}
			label={fieldDef?.inputSettings?.toggleLabel}
			onChange={onChange}
			onBlur={onBlur}
			required={fieldDef?.required}
		/>
	);
};

export default FormFieldToggleSwitch;
