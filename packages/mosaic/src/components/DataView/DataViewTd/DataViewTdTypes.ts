import type { ComponentProps, Ref } from "react";
import type { DataViewColumn } from "../DataViewTypes";

export interface DataViewTdProps extends ComponentProps<"td"> {
	expandCell?: boolean;
	style?: DataViewColumn["style"];
	children: React.ReactNode;
	ariaLabel?: HTMLElement["ariaLabel"];
	testId?: string;
	ref?: Ref<HTMLTableCellElement>;
}
