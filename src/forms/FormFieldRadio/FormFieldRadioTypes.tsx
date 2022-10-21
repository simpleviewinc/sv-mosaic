import { MosaicLabelValue } from "@root/types";
import { StrictUnion } from "../FormFieldCheckbox";

type FormFieldRadioLocalOptions = {
	/**
	* List of options
	*/
	options: MosaicLabelValue[];
}

type FormFieldRadioExternalOptions = {
	/**
	 * Used to get options from db.
	 */
	getOptions: () => Promise<MosaicLabelValue[]>;
}

export type FormFieldRadioDef = StrictUnion<FormFieldRadioLocalOptions | FormFieldRadioExternalOptions>
