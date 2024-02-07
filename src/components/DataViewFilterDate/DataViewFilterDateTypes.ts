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
	args: { options?: MosaicLabelValue[], minDate?: Date }
}

interface DataViewFilterDateDropdownContentOptions {
	options?: MosaicLabelValue[],
	selectedOption?: string,
}

interface DataViewFilterDateDropdownContentRange {
	rangeStart?: Date
	rangeEnd?: Date
}

export type DataViewFilterDateDropdownContentProps = {
	onChange: DataViewFilterDateOnChange
	onClose: () => void
	minDate?: Date
} & (DataViewFilterDateDropdownContentOptions | DataViewFilterDateDropdownContentRange);
