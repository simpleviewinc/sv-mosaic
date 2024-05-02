import {
	DataViewProps,
} from "../DataViewTypes";

export interface DataViewTitleBarProps {
	buttons?: DataViewProps["buttons"];
	title?: DataViewProps["title"];
	filter?: DataViewProps["filter"];
	filters?: DataViewProps["filters"];
	activeFilters?: DataViewProps["activeFilters"];
	onActiveFiltersChange?: DataViewProps["onActiveFiltersChange"];
	onBack?: DataViewProps["onBack"];
	backLabel?: DataViewProps["backLabel"];
	disabled?: DataViewProps["disabled"];
}
