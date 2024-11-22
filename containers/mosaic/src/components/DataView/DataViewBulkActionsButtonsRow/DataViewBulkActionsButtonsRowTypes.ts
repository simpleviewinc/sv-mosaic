import type { DataViewBulkAction, DataViewProps } from "../DataViewTypes";

export interface DataViewBulkActionsButtonsRowProps {
	bulkActions: DataViewBulkAction[];
	data: DataViewProps["data"];
	checked: DataViewProps["checked"];
	checkedAllPages: DataViewProps["checkedAllPages"];
}
