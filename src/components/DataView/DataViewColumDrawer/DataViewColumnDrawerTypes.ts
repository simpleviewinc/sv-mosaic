import { DataViewProps } from "../DataViewTypes";

export interface DataViewColumnDrawerProps {
	open?: boolean;
	onClose?: () => void;
	columns?: DataViewProps["columns"];
	allColumns?: DataViewProps["columns"];
	onChange?: DataViewProps["onColumnsChange"];
}

export interface DataViewColumnDrawerContentProps {
  columns?: DataViewProps["columns"];
  onClose?: () => void;
  onChange?: DataViewProps["onColumnsChange"];
  allColumns?: DataViewProps["columns"];
}
