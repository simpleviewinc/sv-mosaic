import { DataViewAction, DataViewAdditionalAction, DataViewProps } from "../DataViewTypes";
import { MosaicObject } from "../../../types";

export type DataViewControlViewOption = "list" | "grid";

export interface DataViewActionsButtonRowProps {
	primaryActions: DataViewAction[];
	additionalActions: DataViewAdditionalAction[];
	actionsHidden?: boolean;
	disabled?: DataViewProps["disabled"]
	originalRowData: MosaicObject;
	activeDisplay?: DataViewControlViewOption;
}
