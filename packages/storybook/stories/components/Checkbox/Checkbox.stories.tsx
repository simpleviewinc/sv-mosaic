import React, { useState } from "react";
import type { ReactElement } from "react";

import Checkbox from "#mosaic/components/Checkbox";

export default {
	title : "Components/Checkbox",
	parameters: {
		layout: "centered",
	},
};

export const Playground = ({
	label,
	controlled,
	checked: controlledChecked,
	disabled,
	indeterminate,
}: typeof Playground.args): ReactElement => {
	const [internalChecked, setInternalChecked] = useState(false);
	const checked = controlled ? controlledChecked : internalChecked;

	return (
		<Checkbox
			label={label}
			checked={checked}
			onChange={(e) => setInternalChecked((e.target as HTMLInputElement).checked)}
			disabled={disabled}
			indeterminate={indeterminate}
		/>
	);
};

Playground.args = {
	label: "Example",
	controlled: true,
	checked: false,
	disabled: false,
	indeterminate: false,
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
	indeterminate: {
		name: "Indeterminate",
	},
};

