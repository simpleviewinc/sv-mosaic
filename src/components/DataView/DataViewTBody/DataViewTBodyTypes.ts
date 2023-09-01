import { MosaicObject } from "@root/types";
import { DataViewProps } from "../DataViewTypes";

export interface DataViewTBodyProps {
	onReorder?: DataViewProps["onReorder"];
	onCheckboxClick?: DataViewProps["onCheckChange"];
	transformedData: MosaicObject[];
	data: DataViewProps["data"];
	bulkActions?: DataViewProps["bulkActions"];
	primaryActions?: DataViewProps["primaryActions"];
	additionalActions?: DataViewProps["additionalActions"];
	disabled?: DataViewProps["disabled"];
	checked?: DataViewProps["checked"];
	columns: DataViewProps["columns"];
	hasActions: boolean;
}
