import { DataViewOnSkipChange } from "../DataViewTypes";

export interface DataViewPagerProps {
	limit: number;
	count: number;
	skip: number;
	onSkipChange: DataViewOnSkipChange;
}
