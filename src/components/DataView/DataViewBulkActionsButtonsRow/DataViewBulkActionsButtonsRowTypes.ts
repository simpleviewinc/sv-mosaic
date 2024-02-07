import { MosaicObject } from "@root/types";
import { DataViewBulkAction, DataViewProps } from "../DataViewTypes";

export interface DataViewBulkActionsButtonsRowProps {
	bulkActions: DataViewBulkAction[];
	data: MosaicObject[];
	checked: DataViewProps["checked"];
	checkedAllPages: DataViewProps["checkedAllPages"];
}
