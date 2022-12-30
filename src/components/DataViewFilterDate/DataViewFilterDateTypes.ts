import { MosaicLabelValue } from "@root/types";
import { DataViewFilterProps } from "../DataView";

interface DataViewFilterDateRange {
	rangeStart?: Date,
	rangeEnd?: Date
}

interface DataViewFilterDateOption {
	option: string;
}

type DataViewFilterDateData = DataViewFilterDateRange | DataViewFilterDateOption;

export interface DataViewFilterDateOnChange {
	(value: DataViewFilterDateData): void
}

export interface DataViewFilterDateProps extends DataViewFilterProps {
	data: DataViewFilterDateData,
	onChange: DataViewFilterDateOnChange
	args: { options?: MosaicLabelValue[] }
}

export interface DataViewFilterDateDropdownContentProps {
	options?: MosaicLabelValue[]
	rangeStart?: Date
	rangeEnd?: Date
	onChange: DataViewFilterDateOnChange
	onClose: () => void
}
