import { DataViewFilterProps } from "../DataView";

export interface DataViewFilterDateData {
	rangeStart?: Date,
	rangeEnd?: Date
}

export interface DataViewFilterDateOnChange {
	(value: DataViewFilterDateData): void
}

export interface DataViewFilterDateProps extends DataViewFilterProps {
	data: DataViewFilterDateData,
	onChange: DataViewFilterDateOnChange
}

export interface DataViewFilterDateDropdownContentProps {
	rangeStart?: Date
	rangeEnd?: Date
	onChange: DataViewFilterDateOnChange
	onClose: () => void
}