import * as React from "react";
import { useState, ReactElement } from "react";

import {
	CheckboxList,
	P
} from "@root/index";
import { checkboxOptions } from '@root/forms/FormFieldCheckbox/FormFieldCheckboxUtils';

export default {
	title: "Components|CheckboxList"
}

export const example = (): ReactElement => {
	const [checked, setChecked] = useState<string[]>([]);

	const onChange = (c) => {
		setChecked(c);
	};

	return (
		<div>
			<P>checked: {JSON.stringify(checked)}</P>
			<CheckboxList
				checked={checked}
				options={checkboxOptions}
				onChange={onChange}
			/>
		</div>
	)
}