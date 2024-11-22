import type { DataViewOnLimitChange } from "../DataViewTypes";

export interface DataViewControlLimitProps {
	limit: number;
	options: number[];
	onLimitChange: DataViewOnLimitChange;
}
