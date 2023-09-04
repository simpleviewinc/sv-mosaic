
import { MosaicObject } from "@root/types";
import { DataViewProps } from "../DataViewTypes";

export interface DataViewTrProps {
	bulkActions?: DataViewProps["bulkActions"];
	checked: boolean;
	hasActions: boolean;
	onReorder?: DataViewProps["onReorder"];
	onCheckboxClick?: React.MouseEventHandler<HTMLButtonElement>;
	primaryActions?: DataViewProps["primaryActions"];
	additionalActions?: DataViewProps["additionalActions"];
	disabled?: DataViewProps["disabled"]
	originalRowData: MosaicObject;
	columns: DataViewProps["columns"];
	row?: {[x: string]: any};
	rowIdx: number;
}
