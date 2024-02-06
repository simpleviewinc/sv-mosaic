import {
	DataViewProps,
	StateViewDef,
	SavedViewCallbacks,
} from "../DataViewTypes";

export interface DataViewTitleBarProps {
	buttons?: DataViewProps["buttons"];
	title?: DataViewProps["title"];
	savedViewEnabled?: boolean;
	savedView?: DataViewProps["savedView"];
	savedViewState?: StateViewDef;
	savedViewCallbacks?: SavedViewCallbacks;
	savedViewAllowSharedViewSave?: DataViewProps["savedViewAllowSharedViewSave"];
	filter?: DataViewProps["filter"];
	filters?: DataViewProps["filters"]
	activeFilters?: DataViewProps["activeFilters"];
	onActiveFiltersChange?: DataViewProps["onActiveFiltersChange"];
	onBack?: DataViewProps["onBack"];
	backLabel?: DataViewProps["backLabel"]
	disabled?: DataViewProps["disabled"]
}
