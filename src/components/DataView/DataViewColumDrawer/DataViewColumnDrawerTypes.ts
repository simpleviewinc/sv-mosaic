import { DataViewProps } from "../DataViewTypes";

export interface DataViewColumnDrawerProps extends DataViewColumnDrawerContentProps {
	open: boolean;
}

export interface DataViewColumnDrawerContentProps {
	columns: DataViewProps["columns"];
	onClose: () => void;
	onChange: DataViewProps["onColumnsChange"];
	allColumns: DataViewProps["columns"];
}
