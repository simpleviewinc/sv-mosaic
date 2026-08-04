import type { DataViewProps } from "../DataViewTypes";

export interface DataViewColumnDrawerProps extends DataViewColumnDrawerContentProps {
	open: boolean;
}

export interface DataViewColumnDrawerContentProps {
	columns: DataViewProps["columns"];
	onClose: () => void;
	onChange: DataViewProps["onColumnsChange"];
	allColumns: DataViewProps["columns"];
}

export interface DataViewColumnDrawerColumnsProps {
	activeColumns: string[];
	allColumns: DataViewProps["columns"];
	onChange: DataViewProps["onColumnsChange"];
}

export interface DataViewColumnDrawerColumnProps {
	name: string;
	allColumns: DataViewProps["columns"];
	onRemove: (column: string) => void;
}
