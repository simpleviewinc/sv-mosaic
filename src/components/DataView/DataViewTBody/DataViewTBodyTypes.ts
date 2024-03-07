import { MosaicObject } from "@root/types";
import { DataViewProps, DataViewRowActions } from "../DataViewTypes";
import { DataViewDisplayListProps } from "../DataViewDisplayList";

export interface DataViewTBodyProps {
	onReorder?: DataViewProps["onReorder"];
	onCheckboxClick?: DataViewDisplayListProps["onCheckboxClick"];
	transformedData: MosaicObject[];
	data: DataViewProps["data"];
	bulkActions?: DataViewProps["bulkActions"];
	rowActions?: DataViewRowActions;
	actionsHidden?: boolean;
	disabled?: DataViewProps["disabled"];
	checked?: DataViewProps["checked"];
	columns: DataViewProps["columns"];
	hasActions: boolean;
}
