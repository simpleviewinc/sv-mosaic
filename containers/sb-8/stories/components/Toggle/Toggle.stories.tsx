import * as React from "react";
import type { ReactElement } from "react";
import { useState } from "react";

// Components
import Toggle from "@root/components/Toggle";

export default {
	title: "Components/Toggle",
};

export const Playground = ({ label, disabled, required }: typeof Playground.args): ReactElement => {
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
				label={label}
				disabled={disabled}
				required={required}
				onChange={handleChange}
				checked={isChecked}
			/>
		</>
	);
};

Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
};

Playground.argTypes = {
	label: {
		name: "Label",
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
};
