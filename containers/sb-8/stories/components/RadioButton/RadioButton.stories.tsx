import * as React from "react";
import type { ReactElement, ChangeEvent } from "react";
import { useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";

// Components
import RadioButton from "#mosaic/components/RadioButton";

export default {
	title: "Components/RadioButton",
	parameters: {
		layout: "centered",
	},
};

export const Playground = ({ label, checked, disabled, required }: typeof Playground.args): ReactElement => (
	<RadioButton
		label={label}
		checked={checked}
		disabled={disabled}
		required={required}
	/>
);

Playground.args = {
	label: "Label",
	checked: false,
	disabled: false,
	required: false,
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
	required: {
		name: "Required",
	},
};

export const Group = (): ReactElement => {
	const [value, setValue] = useState("female");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<RadioGroup
			aria-label="gender"
			name="gender1"
			value={value}
			onChange={handleChange}
		>
			<RadioButton
				label="Male"
				disabled={false}
				required={false}
				value="male"
			/>
			<RadioButton
				label="Female"
				disabled={false}
				required={false}
				value="female"
			/>
			<RadioButton
				label="(Disabled option)"
				disabled={true}
				required={false}
				value="disabled"
			/>
		</RadioGroup>
	);
};
