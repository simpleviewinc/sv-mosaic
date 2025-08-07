import type { DataViewFilterProps } from "../DataView/DataViewTypes";
import type { MosaicLabelValue } from "@root/types";
import type { ButtonProps } from "../Button";
export interface DataViewPrimaryFilterProps {
	label: DataViewFilterProps["label"];
	/**
	 * @deprecated This prop is no longer in use.
	 */
	color?: ButtonProps["color"];
	onClick: (evt: any) => void;
	multiselect?: MosaicLabelValue[];
	parts?: {
		type: "operator" | "term";
		label: string | number;
	}[];
}
