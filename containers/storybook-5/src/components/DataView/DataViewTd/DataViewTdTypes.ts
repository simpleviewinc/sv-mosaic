import { DataViewColumn } from "../DataViewTypes";

export interface DataViewTdProps {
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
}
