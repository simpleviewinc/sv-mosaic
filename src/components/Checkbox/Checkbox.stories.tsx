import * as React from "react";
import { useState } from "react";

import Checkbox, { CheckboxProps } from "../Checkbox";

export default {
	title : "Components/Checkbox",
	component: Checkbox
};

const Template = (args) => {
	const [checked, setChecked] = useState(false);

	const onClick: CheckboxProps["onClick"] = function() {
		setChecked(!checked);
	}
	return ( <Checkbox {...args} checked={checked} onClick={onClick} /> )
};

export const Playground = Template.bind({});
Playground.args = {
	label: "Example",
	disabled: false,
	helperText: "Helper text",
	indeterminate: false,
}