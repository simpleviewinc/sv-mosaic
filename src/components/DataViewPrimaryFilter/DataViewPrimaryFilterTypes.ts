import { DataViewFilterProps } from "../DataView/DataViewTypes";
import { MosaicLabelValue } from "@root/types";

export interface DataViewPrimaryFilterProps {
	label?: DataViewFilterProps["label"];
	value?: string;
	onRemove?: DataViewFilterProps["onRemove"];
	onClick?: (evt: any) => void;
	multiselect?: MosaicLabelValue[];
}
