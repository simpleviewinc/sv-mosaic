import * as React from "react";
import { ReactElement } from "react";
import DropdownSingleSelection from "./DropdownSingleSelection";



export default {
	title : "Components|DropdownSingleSelection"
}

export const example = (): ReactElement => {
	const items = [];

	return (
		<DropdownSingleSelection
			options={items}
		/>
	)
}