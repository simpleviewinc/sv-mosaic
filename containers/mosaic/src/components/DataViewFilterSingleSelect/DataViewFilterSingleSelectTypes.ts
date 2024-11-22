import type { DataViewFilterGetOptionsReturn, DataViewFilterProps } from "../DataView";
import type { MosaicLabelValue } from "../../types";

export interface DataViewFilterSingleSelectData {
	value: string;
}

export interface DataViewFilterSingleSelectProps extends DataViewFilterProps {
	data: DataViewFilterSingleSelectData;
	onChange(value: DataViewFilterSingleSelectData): void;
	args: {
		getOptions(): Promise<DataViewFilterGetOptionsReturn> | DataViewFilterGetOptionsReturn;
		getSelected(id: string): Promise<MosaicLabelValue> | MosaicLabelValue;
		required?: boolean;
	};
}

export interface DataViewFilterSingleSelectContentProps {
	onClose: () => void;
	anchorEl?: HTMLElement;
	children: React.ReactNode;
}

export interface DataViewFilterSingleSelectState {
	anchorEl: HTMLElement;
	selected: MosaicLabelValue | undefined;
	options: MosaicLabelValue[];
}
