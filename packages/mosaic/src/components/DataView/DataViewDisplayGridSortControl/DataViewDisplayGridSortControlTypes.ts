import type { DataViewColumn, DataViewSort, DataViewOnSortChange } from "../DataViewTypes";

export interface DataViewDisplayGridSortControlProps {
	columns: DataViewColumn[];
	sort: DataViewSort;
	onSortChange: DataViewOnSortChange;
}
