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
	 *
	 * @deprecated Use the `onChange` prop on the field instead.
	*/
	onSelect?: (...args) => void;
}

interface FormFieldChipsExternalOptions {
	/**
	 * Used to get options from db.
	 *
	 * @deprecated Use the `options` input setting instead.
	 */
	getOptions: () => Promise<MosaicLabelValue[]>;
	/**
	* Function to be executed as callback when an option is selected
	 *
	 * @deprecated Use the `onChange` prop on the field instead.
	*/
	onSelect?: (...args) => void;
}

export type FormFieldChipsInputSettings = StrictUnion<FormFieldChipsLocalOptions | FormFieldChipsExternalOptions>;

export type ChipData = MosaicLabelValue;

export type FieldDefChip = FieldDefBase<"chip", FormFieldChipsInputSettings>;
