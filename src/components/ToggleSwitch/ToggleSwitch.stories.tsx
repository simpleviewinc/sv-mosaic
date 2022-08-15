import * as React from "react";
import { useState } from "react";

// Components
import ToggleSwitch from "./ToggleSwitch";

export default {
	title: "Components/ToggleSwitch",
	component: ToggleSwitch,
};

const Template = (args) => {
	const {
		label,
		disabled,
		required,
	} = args;

	const [isChecked, setIsChecked] = useState(false);

	const handleChange = async (checked: boolean) => {
		setIsChecked(checked);
	};
	return (
		<>
			<p>Is toggle checked? {`${isChecked}`}</p>
			<ToggleSwitch
				label={label}
				disabled={disabled}
				required={required}
				onChange={handleChange}
				checked={isChecked}
			/>
		</>
	);
};

export const Example = Template.bind({});
Example.args = {
	label: "Label",
	disabled: false,
	required: false,
}
