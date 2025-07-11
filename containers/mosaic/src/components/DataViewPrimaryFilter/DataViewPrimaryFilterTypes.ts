import type { DataViewFilterProps } from "../DataView/DataViewTypes";
import type { MosaicLabelValue } from "@root/types";
import type { ButtonProps } from "../Button";

export interface DataViewPrimaryFilterProps {
	label: DataViewFilterProps["label"];
	value?: string;
	/**
	 * @deprecated This prop is no longer in use.
	 */
	color?: ButtonProps["color"];
	onClick: (evt: any) => void;
	multiselect?: MosaicLabelValue[];
}
