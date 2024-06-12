import {
	DataViewProps,
} from "../DataViewTypes";

export type DataViewTitleBarProps = Pick<DataViewProps,
	| "buttons"
	| "currentView"
	| "title"
	| "filter"
	| "filters"
	| "activeFilters"
	| "onActiveFiltersChange"
	| "onBack"
	| "onViewSave"
	| "onViewSaveAs"
	| "onViewList"
	| "backLabel"
	| "disabled"
>;
