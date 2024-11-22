import type { FieldDefBase } from "@root/components/Field";
import type { MosaicLabelValue } from "@root/types";
import type { StrictUnion } from "../FormFieldCheckbox";

interface FormFieldChipsLocalOptions {
	/**
	* List of options
	*/
	options: MosaicLabelValue[];
	/**
	* Function to be executed as callback when an option is selected
	*/
	onSelect?: (...args) => void;
}

interface FormFieldChipsExternalOptions {
	/**
	 * Used to get options from db.
	 */
	getOptions: () => Promise<MosaicLabelValue[]>;
	/**
	* Function to be executed as callback when an option is selected
	*/
	onSelect?: (...args) => void;
}

export type FormFieldChipsInputSettings = StrictUnion<FormFieldChipsLocalOptions | FormFieldChipsExternalOptions>;

export type ChipData = MosaicLabelValue;

export type FieldDefChip = FieldDefBase<"chip", FormFieldChipsInputSettings>;
