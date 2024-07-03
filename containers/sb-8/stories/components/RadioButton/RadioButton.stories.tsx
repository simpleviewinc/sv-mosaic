import * as React from "react";
import { ReactElement, ChangeEvent, useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";

// Components
import RadioButton from "@root/components/RadioButton";

export default {
	title: "Components/RadioButton",
};

export const Playground = ({ label, disabled, required }: typeof Playground.args): ReactElement => (
	<RadioButton
		label={label}
		disabled={disabled}
		required={required}
	/>
);

Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
};

Playground.argTypes = {
	label: {
		name: "Label",
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
