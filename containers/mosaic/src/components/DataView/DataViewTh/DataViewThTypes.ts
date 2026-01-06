import type { ComponentProps } from "react";
import type { DataViewTHeadProps } from "../DataViewTHead";
import type { DataViewColumn } from "../DataViewTypes";

export interface DataViewThProps extends ComponentProps<"th"> {
	name: string;
	label: string;
	description?: DataViewColumn["description"];
	sortable?: boolean;
	sorted?: "asc" | "desc";
	onSortChange?: DataViewTHeadProps["onSortChange"];
}
