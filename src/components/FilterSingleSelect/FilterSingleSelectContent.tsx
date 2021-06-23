import * as React from "react";
import { ReactElement } from "react";

import MenuBase from "../MenuBase";

import { FilterSingleSelectContentProps } from "./FilterSingleSelectTypes";

export default function FilterSingleSelectContent(props: FilterSingleSelectContentProps): ReactElement {
	return (
		<MenuBase anchorEl={props.anchorEl} open={Boolean(props.anchorEl)} onClose={props.onClose}>
			{props.children}
		</MenuBase>
	)
}