import type { DataViewProps } from "../DataViewTypes";

export interface DataViewFiltersProps {
	activeFilters?: DataViewProps["activeFilters"];
	filters: DataViewProps["filters"];
	filter: DataViewProps["filter"];
	onActiveFiltersChange: DataViewProps["onActiveFiltersChange"];
}
