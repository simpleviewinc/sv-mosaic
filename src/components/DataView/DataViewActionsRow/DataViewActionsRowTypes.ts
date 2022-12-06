import { MosaicObject } from "@root/types";
import {
	DataViewColumn,
	DataViewDisplay,
	DataViewOnSortChange,
	DataViewProps,
} from "../DataViewTypes";
export interface DataViewActionsRowProps {
	bulkActions?: DataViewProps["bulkActions"];
	checked?: boolean[];
	display: string;
	displayControlEnabled: boolean;
	displayOptionsFull: DataViewDisplay[];
	limit?: DataViewProps["limit"];
	limitOptions?: DataViewProps["limitOptions"];
	onLimitChange?: DataViewProps["onLimitChange"];
	onDisplayChange?: DataViewProps["onDisplayChange"];
	onSkipChange?: DataViewProps["onSkipChange"];
	skip?: DataViewProps["skip"];
	count?: DataViewProps["count"];
	onColumnsChange?: DataViewProps["onColumnsChange"];
	activeColumnObjs: DataViewProps["columns"];
	allColumns?: DataViewProps["columns"];
	onCheckAllClick?: () => void;
	checkedAllPages?: boolean;
	data?: MosaicObject[];
	sort?: DataViewProps["sort"];
	onSortChange?: DataViewOnSortChange;
	columns?: DataViewColumn[];
}
