import * as React from "react";
import { useState } from "react";

import Checkbox from "./Checkbox";

export default {
	title : "Components|Checkbox"
}

export const example = () => {
	const [checked, setChecked] = useState(false);

	const onClick = function() {
		setChecked(!checked);
	}

	return (
		<Checkbox
			checked={checked}
			onClick={onClick}
		/>
	)
}