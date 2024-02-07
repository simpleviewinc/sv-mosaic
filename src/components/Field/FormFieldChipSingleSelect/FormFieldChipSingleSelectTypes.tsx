import { FieldDefBase } from "@root/components/Field";
import { MosaicLabelValue } from "@root/types";
import { StrictUnion } from "../FormFieldCheckbox";

type FormFieldChipSingleSelectLocalOptions = {
	/**
	* List of options
	*/
	options: MosaicLabelValue[];
	/**
	* Function to be executed as callback when an option is selected
	*/
	onSelect?: (...args) => void;
};

type FormFieldChipSingleSelectExternalOptions = {
	/**
	 * Used to get options from db.
	 */
	getOptions: () => Promise<MosaicLabelValue[]>;
	/**
	* Function to be executed as callback when an option is selected
	*/
	onSelect?: (...args) => void;
};

export type FormFieldChipSingleSelectInputSettings = StrictUnion<FormFieldChipSingleSelectLocalOptions | FormFieldChipSingleSelectExternalOptions>;

export type ChipData = MosaicLabelValue;

export type FieldDefChip = FieldDefBase<"chip", FormFieldChipSingleSelectInputSettings, ChipData>;
