import { DataViewFilterProps } from "../DataView/DataViewTypes";
import { MosaicLabelValue } from "@root/types";
import { ButtonProps } from "../Button";

export interface DataViewPrimaryFilterProps {
	label: DataViewFilterProps["label"];
	value?: string;
	color?: ButtonProps["color"];
	onClick: (evt: any) => void;
	multiselect?: MosaicLabelValue[];
}
