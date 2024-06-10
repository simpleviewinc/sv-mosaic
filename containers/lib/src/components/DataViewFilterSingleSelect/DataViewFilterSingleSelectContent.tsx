import * as React from "react";
import { ReactElement } from "react";

import MenuBase from "../MenuBase";

import { DataViewFilterSingleSelectContentProps } from "./DataViewFilterSingleSelectTypes";

export default function DataViewFilterSingleSelectContent(props: DataViewFilterSingleSelectContentProps): ReactElement {
	return (
		<MenuBase anchorEl={props.anchorEl} open={Boolean(props.anchorEl)} onClose={props.onClose}>
			{props.children}
		</MenuBase>
	);
}
