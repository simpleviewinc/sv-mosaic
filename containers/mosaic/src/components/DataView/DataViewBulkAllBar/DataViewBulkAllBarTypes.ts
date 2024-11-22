import type { DataViewProps } from "../DataViewTypes";

export interface DataViewBulkAllBarProps {
	count?: DataViewProps["count"];
	rowCount?: number;
	checkedAllPages?: DataViewProps["checkedAllPages"];
	onCheckAllPagesClick?: () => void;
}
