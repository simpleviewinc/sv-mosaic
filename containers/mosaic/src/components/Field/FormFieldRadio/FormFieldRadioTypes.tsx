import type { MosaicLabelValue } from "@root/types";
import type { StrictUnion } from "../FormFieldCheckbox";
import type { FieldDefBase } from "@root/components/Field";

interface FormFieldRadioLocalOptions {
	/**
	* List of options
	*/
	options: MosaicLabelValue[] | (() => Promise<MosaicLabelValue[]>);
}

interface FormFieldRadioExternalOptions {
	/**
	 * Used to get options from db.
	 *
	 * @deprecated Use the `options` input setting instead.
	 */
	getOptions: () => Promise<MosaicLabelValue[]>;
}

export type RadioInputSettings = StrictUnion<FormFieldRadioLocalOptions | FormFieldRadioExternalOptions>;

export type RadioData = MosaicLabelValue;

export type FieldDefRadio = FieldDefBase<"radio", RadioInputSettings>;
