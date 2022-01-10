import * as React from "react";
import { useState, useMemo, useCallback, ReactElement } from "react";

import {
	CheckboxList,
	P
} from "@root/index";
import { Option } from "../../forms/FormFieldCheckbox";

export default {
	title: "Components|CheckboxList"
}

export const example = (): ReactElement => {
	const [checked, setChecked] = useState<string[]>([]);

	const onChange = (c) => {
		console.log(c);
		setChecked(c);
	};

	const options = useMemo(() => [
		{
			label: "Label 1",
			value: "label_1"
		},
		{
			label: "Label 2",
			value: "label_2"
		},
		{
			label: "Label 3",
			value: "label_3"
		}
	], []);

	return (
		<div>
			<P>checked: {JSON.stringify(checked)}</P>
			<CheckboxList
				checked={checked}
				options={options}
				onChange={onChange}
			/>
		</div>
	)
}