import { DataViewProps } from "../DataViewTypes";

interface SavedViewState {
	limit?: DataViewProps["limit"];
	sort?: DataViewProps["sort"];
	display?: DataViewProps["display"];
	filter?: DataViewProps["filter"];
	activeFilters?: DataViewProps["activeFilters"];
	activeColumns?: DataViewProps["activeColumns"];
}

interface SavedViewCallbacks {
	onSave: DataViewProps["onSavedViewSave"];
	onChange: DataViewProps["onSavedViewChange"];
	onGetOptions: DataViewProps["onSavedViewGetOptions"];
	onRemove: DataViewProps["onSavedViewRemove"];
}

export interface DataViewTitleBarProps {
	buttons?: DataViewProps["buttons"];
	title?: DataViewProps["title"];
	savedViewEnabled?: boolean;
	savedView?: DataViewProps["savedView"];
	savedViewState?: SavedViewState;
	savedViewCallbacks?: SavedViewCallbacks;
	savedViewAllowSharedViewSave?: DataViewProps["savedViewAllowSharedViewSave"];
	loading?: DataViewProps["loading"];
	filter?: DataViewProps["filter"];
	filters?: DataViewProps["filters"]
	activeFilters?: DataViewProps["activeFilters"];
	onActiveFiltersChange?: DataViewProps["onActiveFiltersChange"];
}
