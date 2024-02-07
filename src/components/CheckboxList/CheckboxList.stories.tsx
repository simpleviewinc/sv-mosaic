import * as React from "react";
import { useState, ReactElement } from "react";

import {
	CheckboxList,
	MosaicLabelValue,
} from "@root/index";
import { checkboxOptions } from "@root/components/Field/FormFieldCheckbox/FormFieldCheckboxUtils";

export default {
	title: "Components/CheckboxList",
};

export const example = (): ReactElement => {
	const [checked, setChecked] = useState<MosaicLabelValue[]>([]);

	const onChange = (c) => {
		setChecked(c);
	};

	return (
		<div>
			<div>checked: {JSON.stringify(checked)}</div>
			<CheckboxList
				checked={checked}
				options={checkboxOptions}
				onChange={onChange}
			/>
		</div>
	);
};
