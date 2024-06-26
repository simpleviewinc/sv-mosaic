import { FieldDefBase } from "@root/components/Field";
import { MosaicLabelValue } from "@root/types";
import { StrictUnion } from "../FormFieldCheckbox";

type FormFieldChipsLocalOptions = {
	/**
	* List of options
	*/
	options: MosaicLabelValue[];
	/**
	* Function to be executed as callback when an option is selected
	*/
	onSelect?: (...args) => void;
};

type FormFieldChipsExternalOptions = {
	/**
	 * Used to get options from db.
	 */
	getOptions: () => Promise<MosaicLabelValue[]>;
	/**
	* Function to be executed as callback when an option is selected
	*/
	onSelect?: (...args) => void;
};

export type FormFieldChipsInputSettings = StrictUnion<FormFieldChipsLocalOptions | FormFieldChipsExternalOptions>;

export type ChipData = MosaicLabelValue;

export type FieldDefChip = FieldDefBase<"chip", FormFieldChipsInputSettings>;
