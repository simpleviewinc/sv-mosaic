import { MosaicLabelValue } from "@root/types";
import { StrictUnion } from "../FormFieldCheckbox";
import { FieldDefBase } from "@root/components/Field";

type FormFieldRadioLocalOptions = {
	/**
	* List of options
	*/
	options: MosaicLabelValue[];
};

type FormFieldRadioExternalOptions = {
	/**
	 * Used to get options from db.
	 */
	getOptions: () => Promise<MosaicLabelValue[]>;
};

export type RadioInputSettings = StrictUnion<FormFieldRadioLocalOptions | FormFieldRadioExternalOptions>;

export type RadioData = MosaicLabelValue;

export type FieldDefRadio = FieldDefBase<"radio", RadioInputSettings>;
