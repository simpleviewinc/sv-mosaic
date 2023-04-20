import { DataViewProps } from "../DataViewTypes";

export interface DataViewTHeadProps {
	hasActions: boolean;
	checked?: any;
	bulkActions?: any;
	columns?: DataViewProps["columns"];
	onReorder?: DataViewProps["onReorder"];
	rowCount?: any;
	count?: any;
	onCheckAllClick?: any;
	data?: any;
	checkedAllPages?: any;
	onColumnsChange?: DataViewProps["onColumnsChange"];
	allColumns?: DataViewProps["columns"];
	onSortChange?: any;
	sort?: any;
	onCheckAllPagesClick?: any;
	anyChecked?: boolean;
	allChecked?: boolean;
	showBulkAll?: boolean;
}
