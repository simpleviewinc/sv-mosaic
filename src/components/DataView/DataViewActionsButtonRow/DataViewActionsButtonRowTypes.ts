import { DataViewAction, DataViewAdditionalAction, DataViewControlViewOption } from "../DataViewTypes";
import { MosaicObject } from "../../../types";

export interface DataViewActionsButtonRowProps {
	primaryActions: DataViewAction[];
	additionalActions: DataViewAdditionalAction[];
	originalRowData: MosaicObject;
	activeDisplay?: DataViewControlViewOption;
}
