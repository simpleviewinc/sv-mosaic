import { DataViewProps, DataViewRowActions } from "../DataViewTypes";

export interface DataViewDisplayGridProps {
	bulkActions?: DataViewProps["bulkActions"];
	checked?: DataViewProps["checked"];
	checkedAllPages?: DataViewProps["checkedAllPages"];
	columns: DataViewProps["columns"];
	count?: DataViewProps["count"];
	data: DataViewProps["data"];
	gridColumnsMap?: DataViewProps["gridColumnsMap"];
	onCheckAllClick?: () => void;
	onCheckAllPagesClick?: () => void;
	onCheckboxClick?: (i: any) => void;
	onSortChange?: DataViewProps["onSortChange"];
	rowActions: DataViewRowActions;
	actionsHidden?: boolean;
	rowCount?: number;
	sort?: DataViewProps["sort"];
	anyChecked?: boolean;
	allChecked?: boolean;
	showBulkAll?: boolean;
	disabled: DataViewProps["disabled"];
}
