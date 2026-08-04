import type { DataViewProps } from "../DataViewTypes";

export interface DataViewTHeadProps {
	hasActions: boolean;
	checked?: DataViewProps["checked"];
	bulkActions?: DataViewProps["bulkActions"];
	columns: DataViewProps["columns"];
	onReorder?: DataViewProps["onReorder"];
	rowCount?: number;
	count?: DataViewProps["count"];
	onCheckAllClick?: () => void;
	data: DataViewProps["data"];
	checkedAllPages?: DataViewProps["checkedAllPages"];
	onColumnsChange?: DataViewProps["onColumnsChange"];
	allColumns?: DataViewProps["columns"];
	onSortChange?: DataViewProps["onSortChange"];
	sort?: DataViewProps["sort"];
	onCheckAllPagesClick?: () => void;
	anyChecked?: boolean;
	allChecked?: boolean;
	showBulkAll?: boolean;
	disabled?: DataViewProps["disabled"];
}
