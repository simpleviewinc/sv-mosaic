import { DataViewProps, StateViewDef } from "../DataViewTypes";

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
	savedViewState?: StateViewDef;
	savedViewCallbacks?: SavedViewCallbacks;
	savedViewAllowSharedViewSave?: DataViewProps["savedViewAllowSharedViewSave"];
	loading?: DataViewProps["loading"];
	filter?: DataViewProps["filter"];
	filters?: DataViewProps["filters"]
	activeFilters?: DataViewProps["activeFilters"];
	onActiveFiltersChange?: DataViewProps["onActiveFiltersChange"];
	onBack?: DataViewProps["onBack"];
}
