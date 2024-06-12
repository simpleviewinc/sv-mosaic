import {
	DataViewColumn,
	DataViewOnSortChange,
	DataViewProps,
} from "../DataViewTypes";
import { DataViewDisplay } from "../DataViewDisplays";
export interface DataViewActionsRowProps {
	bulkActions?: DataViewProps["bulkActions"];
	checked?: DataViewProps["checked"];
	display: DataViewProps["display"];
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
	checkedAllPages?: DataViewProps["checkedAllPages"];
	data?: DataViewProps["data"];
	sort?: DataViewProps["sort"];
	onSortChange?: DataViewOnSortChange;
	columns?: DataViewColumn[];
	anyChecked?: boolean;
	allChecked?: boolean;
	disabled?: DataViewProps["disabled"];
}
