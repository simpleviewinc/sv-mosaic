import * as React from "react";
import type { ReactElement } from "react";

import Checkbox from "@root/components/Checkbox";

export default {
	title : "Components/Checkbox",
};

export const Playground = ({ label, checked, disabled, indeterminate }: typeof Playground.args): ReactElement => {
	return (
		<Checkbox
			label={label}
			checked={checked}
			onClick={() => null}
			disabled={disabled}
			indeterminate={indeterminate}
		/>
	);
};

Playground.args = {
	label: "Example",
	checked: false,
	disabled: false,
	indeterminate: false,
};

Playground.argTypes = {
	label: {
		name: "Label",
	},
	checked: {
		name: "Checked",
	},
	disabled: {
		name: "Disabled",
	},
	indeterminate: {
		name: "Indeterminate",
	},
};

