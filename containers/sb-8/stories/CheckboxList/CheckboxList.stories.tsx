import * as React from "react";
import { useState, ReactElement } from "react";

import CheckboxList from "@root/components/CheckboxList";
import { MosaicLabelValue } from "@root/types";
import { checkboxOptions } from "@root/components/Field/FormFieldCheckbox/FormFieldCheckboxUtils";

export default {
	title: "Components/CheckboxList",
};

export const Playground = (): ReactElement => {
	const [checked, setChecked] = useState<MosaicLabelValue[]>([]);

	const onChange = (c) => {
		setChecked(c);
	};

	return (
		<div>
			<div>
				checked:
				{JSON.stringify(checked)}
			</div>
			<CheckboxList
				checked={checked}
				options={checkboxOptions}
				onChange={onChange}
			/>
		</div>
	);
};
