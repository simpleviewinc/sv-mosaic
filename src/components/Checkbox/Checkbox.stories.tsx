import * as React from "react";
import { useState } from "react";

import { Checkbox, CheckboxProps } from "@root/index";

export default {
	title : "Components|Checkbox"
}

export const example = () => {
	const [checked, setChecked] = useState(false);

	const onClick: CheckboxProps["onClick"] = function() {
		setChecked(!checked);
	}

	return (
		<Checkbox
			checked={checked}
			onClick={onClick}
		/>
	)
}