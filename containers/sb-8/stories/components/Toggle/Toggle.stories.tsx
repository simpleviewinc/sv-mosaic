import React, { useState } from "react";
import type { ReactElement } from "react";

// Components
import Toggle from "#mosaic/components/Toggle";

export default {
	title: "Components/Toggle",
	parameters: {
		layout: "centered",
	},
};

export const Playground = ({
	label,
	controlled,
	checked: controlledChecked,
	disabled,
	required,
}: typeof Playground.args): ReactElement => {
	const [internalChecked, setInternalChecked] = useState(false);
	const checked = controlled ? controlledChecked : internalChecked;

	return (
		<Toggle
			label={label}
			disabled={disabled}
			required={required}
			checked={checked}
			onChange={async (checked) => setInternalChecked(checked)}
		/>
	);
};

Playground.args = {
	label: "Label",
	controlled: true,
	checked: false,
	disabled: false,
	required: false,
};

Playground.argTypes = {
	label: {
		name: "Label",
	},
	controlled: {
		name: "Controlled",
	},
	checked: {
		name: "Checked",
		if: { arg: "controlled" },
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
};
