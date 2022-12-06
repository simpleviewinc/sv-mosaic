import { DataViewProps } from "../DataViewTypes";

export interface DataViewDisplayGridProps {
	additionalActions?: DataViewProps["additionalActions"];
	bulkActions?: DataViewProps["bulkActions"];
	checked?: boolean[];
	checkedAllPages?: boolean;
	columns?: DataViewProps["columns"];
	count?: DataViewProps["count"];
	data?: DataViewProps["data"];
	gridColumnsMap?: {
		image?: string | number;
		primary?: string | number;
		secondary?: string | number;
	};
	onCheckAllClick?: () => void;
	onCheckAllPagesClick?: () => void;
	onCheckboxClick?: (i: any) => void;
	onSortChange?: DataViewProps["onSortChange"];
	primaryActions?: DataViewProps["primaryActions"];
	rowCount?: number;
	sort?: DataViewProps["sort"];
}
