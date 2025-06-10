import type { MosaicLabelValue } from "@root/types";
import type { FieldDefBase } from "@root/components/Field";

export interface RadioInputSettings {
	/**
	* List of options
	*/
	options: MosaicLabelValue[] | (() => Promise<MosaicLabelValue[]>);
}

export type RadioData = MosaicLabelValue;

export type FieldDefRadio = FieldDefBase<"radio", RadioInputSettings>;
