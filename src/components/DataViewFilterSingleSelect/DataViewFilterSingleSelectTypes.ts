import { DataViewFilterProps } from "../DataView";
import { MosaicLabelValue } from "../../types";

export interface DataViewFilterSingleSelectData {
	value: string
}

export interface DataViewFilterSingleSelectProps extends DataViewFilterProps {
	data: DataViewFilterSingleSelectData,
	onChange(value: DataViewFilterSingleSelectData): void,
	args: {
		getOptions(): {
			docs : MosaicLabelValue[]
			hasMore?: boolean
		}
		getSelected(id: string): MosaicLabelValue
		required?: boolean,
		color?: string,
	},
}

export interface DataViewFilterSingleSelectContentProps {
	onClose: () => void,
	anchorEl?: HTMLElement
	children: React.ReactNode
}

export interface DataViewFilterSingleSelectState {
	anchorEl: HTMLElement
	selected: MosaicLabelValue | undefined
	options: MosaicLabelValue[]
}