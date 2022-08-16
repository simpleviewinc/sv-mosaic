import * as React from "react";

import {
	CheckboxList,
	P
} from "@root/index";
import { checkboxOptions } from "@root/forms/FormFieldCheckbox/FormFieldCheckboxUtils";
import { useState } from "react";

export default {
	title: "Components/CheckboxList",
	component: CheckboxList
}

const Template = (args) => {
	const [checked, setChecked] = useState<string[]>([]);

	const onChange = (c) => {
		setChecked(c);
	};
	return (
		<div>
			<P>checked: {JSON.stringify(checked)}</P>
			<CheckboxList
				checked={checked}
				options={args.checkboxOptions}
				onChange={onChange}
			/>
		</div>
	)
};

export const Playground = Template.bind({});
Playground.args = {
	checkboxOptions,
}