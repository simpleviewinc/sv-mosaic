import type { DataViewOnSkipChange } from "../DataViewTypes";

export interface DataViewPagerPopoverProps {
	currentPage: number;
	totalPages: number;
	limit: number;
	onSkipChange: DataViewOnSkipChange;
}
