import { DataViewProps } from "../DataViewTypes";

export interface DataViewDisplayGridProps {
	additionalActions?: DataViewProps["additionalActions"];
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
	primaryActions?: DataViewProps["primaryActions"];
	rowCount?: number;
	sort?: DataViewProps["sort"];
	anyChecked?: boolean;
	allChecked?: boolean;
	showBulkAll?: boolean;
	disabled: DataViewProps["disabled"]
}
