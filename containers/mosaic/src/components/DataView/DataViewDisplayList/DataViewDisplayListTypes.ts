import type { DataViewProps, DataViewRowActions } from "../DataViewTypes";

export interface DataViewDisplayListProps {
	activeColumns?: DataViewProps["activeColumns"];
	columns: DataViewProps["columns"];
	data: DataViewProps["data"];
	onReorder?: DataViewProps["onReorder"];
	checked?: DataViewProps["checked"];
	checkedAllPages?: DataViewProps["checkedAllPages"];
	bulkActions?: DataViewProps["bulkActions"];
	sort?: DataViewProps["sort"];
	count?: DataViewProps["count"];
	rowCount?: number;
	onSortChange?: DataViewProps["onSortChange"];
	onCheckAllClick?: () => void;
	onCheckAllPagesClick?: () => void;
	onColumnsChange?: DataViewProps["onColumnsChange"];
	disabled?: DataViewProps["disabled"];
	rowActions: DataViewRowActions;
	onCheckboxClick?: (i: number) => void;
	activeColumnObjs: DataViewProps["columns"];
	anyChecked?: boolean;
	allChecked?: boolean;
	showBulkAll?: boolean;
	actionsHidden?: boolean;
}
