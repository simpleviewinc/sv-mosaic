import * as React from "react";
import { ReactElement, useState } from "react";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import Toggle from "./Toggle";

export default {
	title: "Components/Toggle",
	decorators: [withKnobs],
} as Meta;

export const Example = (): ReactElement => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = async (checked: boolean) => {
		setIsChecked(checked);
	};
	return (
		<>
			<p>
				Is toggle checked?
				{`${isChecked}`}
			</p>
			<Toggle
				label={text("Label", "Label")}
				disabled={boolean("Disabled", false)}
				required={boolean("Required", false)}
				onChange={handleChange}
				checked={isChecked}
			/>
		</>
	);
};
