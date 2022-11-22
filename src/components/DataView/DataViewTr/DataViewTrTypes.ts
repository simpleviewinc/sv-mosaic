
import { MosaicObject } from "@root/types";
import {
	DataViewAction,
	DataViewAdditionalAction,
	DataViewBulkAction,
	DataViewColumn,
	DataViewProps
} from "../DataViewTypes";

export interface DataViewTrProps {
	bulkActions?: DataViewBulkAction[];
	checked?: boolean;
	onReorder?: DataViewProps["onReorder"];
	onCheckboxClick?: React.MouseEventHandler<HTMLButtonElement>;
	primaryActions?: DataViewAction[];
	additionalActions?: DataViewAdditionalAction[];
	originalRowData?: MosaicObject;
	columns?: DataViewColumn[];
	row?: {[x: string]: any};
	rowIdx: number;
}
