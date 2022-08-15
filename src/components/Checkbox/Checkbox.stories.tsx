import * as React from "react";

import Checkbox from "../Checkbox";

export default {
	title : "Components/Checkbox",
	component: Checkbox
};

//TODO: ONCLICK FUNCTION NOT WORKING AS EXPECTED.
let checked = false;

const Template = (args) => <Checkbox {...args} />

export const Playground = Template.bind({});
Playground.args = {
	label: "Example",
	checked,
	onClick: () => checked = !checked,
	disabled: false,
	helperText: "Helper text",
	indeterminate: false,
}

// export const example = (): ReactElement => {
// 	const [checked, setChecked] = useState(false);

// 	const onClick: CheckboxProps["onClick"] = function() {
// 		setChecked(!checked);
// 	}

// 	return (
// 		<Checkbox
// 			label={text("Label", "Example")}
// 			checked={boolean("Checked", false)}
// 			onClick={onClick}
// 			disabled={boolean("Disabled", false)}
// 			helperText={text("Helper Text", "Helper text example")}
// 			indeterminate={boolean("Indeterminate", false)}
// 		/>
// 	)
// }

