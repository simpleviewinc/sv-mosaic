import { DataViewAction, DataViewAdditionalAction } from "../DataViewTypes";
import { MosaicObject } from "../../../types";

export type DataViewControlViewOption = "list" | "grid";

export interface DataViewActionsButtonRowProps {
	primaryActions: DataViewAction[];
	additionalActions: DataViewAdditionalAction[];
	originalRowData: MosaicObject;
	activeDisplay?: DataViewControlViewOption;
}
