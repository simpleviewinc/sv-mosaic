import type { DataViewProps } from "../DataViewTypes";

export interface DataViewColumnControlProps {
	onChange?: DataViewProps["onColumnsChange"];
	columns: DataViewProps["columns"];
	allColumns: DataViewProps["columns"];
}
