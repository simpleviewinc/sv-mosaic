import type { FieldDefBase } from "@root/components/Field";
import type { MosaicLabelValue } from "@root/types";

export interface FormFieldChipsInputSettings {
	/**
	* List of options
	*/
	options: MosaicLabelValue[] | (() => Promise<MosaicLabelValue[]>);
}

export type ChipData = MosaicLabelValue;

export type FieldDefChip = FieldDefBase<"chip", FormFieldChipsInputSettings>;
