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
	onReorder: (activeColumns: string[]) => void;
}

export interface DataViewColumnDrawerColumnProps {
	name: string;
	allColumns: DataViewProps["columns"];
}
