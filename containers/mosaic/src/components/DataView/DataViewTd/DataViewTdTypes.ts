import type { ComponentProps, Ref } from "react";
import type { DataViewColumn } from "../DataViewTypes";

export interface DataViewTdProps extends ComponentProps<"td"> {
	expandCell?: boolean;
	bold?: DataViewColumn["style"]["bold"];
	italic?: DataViewColumn["style"]["italic"];
	strikeThrough?: DataViewColumn["style"]["strikeThrough"];
	noWrap?: DataViewColumn["style"]["noWrap"];
	ellipsis?: DataViewColumn["style"]["ellipsis"];
	maxWidth?: DataViewColumn["style"]["maxWidth"];
	textTransform?: DataViewColumn["style"]["textTransform"];
	children: React.ReactNode;
	ariaLabel?: HTMLElement["ariaLabel"];
	testId?: string;
	ref?: Ref<HTMLTableCellElement>;
}
