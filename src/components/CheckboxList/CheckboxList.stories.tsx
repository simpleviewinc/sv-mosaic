import * as React from "react";

import {
	CheckboxList,
	P
} from "@root/index";
import { checkboxOptions } from "@root/forms/FormFieldCheckbox/FormFieldCheckboxUtils";

export default {
	title: "Components/CheckboxList",
	component: CheckboxList
}

let checked = [];

const Template = (args) => (
	<div>
		<P>checked: {JSON.stringify(args.checked)}</P>
		<CheckboxList
			checked={args.checked}
			options={args.checkboxOptions}
			onChange={args.onChange}
		/>
	</div>
);

//TODO: ONCHANGE NOT WORKING AS EXPECTED.
export const Playground = Template.bind({});
Playground.args = {
	checkboxOptions,
	checked,
	onChange: (c) => checked = [...c]
}

// export const example = (): ReactElement => {
// 	const [checked, setChecked] = useState<string[]>([]);

// 	const onChange = (c) => {
// 		setChecked(c);
// 	};

// 	return (
// 		<div>
// 			<P>checked: {JSON.stringify(checked)}</P>
// 			<CheckboxList
// 				checked={checked}
// 				options={checkboxOptions}
// 				onChange={onChange}
// 			/>
// 		</div>
// 	)
// }