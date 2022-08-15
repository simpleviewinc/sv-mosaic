import * as React from "react";
import { ReactElement, ChangeEvent, useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";

// Components
import RadioButton from "./RadioButton";

export default {
	title: "Components/RadioButton",
	component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const Playground = Template.bind({});
Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
}

export const Group = (): ReactElement => {
	const [value, setValue] = useState("female");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<RadioGroup
			aria-label='gender'
			name='gender1'
			value={value}
			onChange={handleChange}
		>
			<RadioButton
				label='Male'
				disabled={false}
				required={false}
				value='male'
			/>
			<RadioButton
				label='Female'
				disabled={false}
				required={false}
				value='female'
			/>
			<RadioButton
				label='(Disabled option)'
				disabled={true}
				required={false}
				value='disabled'
			/>
		</RadioGroup>
	);
};
