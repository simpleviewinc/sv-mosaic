import * as React from "react";
import { useState, ReactElement } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks"

import Checkbox, { CheckboxProps } from "../Checkbox";

export default {
	title : "Components|Checkbox",
	decorators: [withKnobs],
} as Meta;

export const example = (): ReactElement => {
	const [checked, setChecked] = useState(false);

	const onClick: CheckboxProps["onClick"] = function() {
		setChecked(!checked);
	}

	return (
		<Checkbox
			label={text('Label', 'Example')}
			checked={boolean('Checked', false)}
			onClick={onClick}
			disabled={boolean('Disabled', false)}
			helperText={text('Helper Text', 'Helper text example')}
			indeterminate={boolean('Indeterminate', false)}
		/>
	)
}

