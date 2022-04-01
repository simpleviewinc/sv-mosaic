import { MosaicLabelValue } from "@root/types";

/**
 * Interface that defines structure of the options that the
 * checkbox list receives.
 */
// export interface CheckboxOption {
// 	label: string;
// 	value: string | { [key: string]: unknown };
// }

export type FormFieldCheckboxDef = {
	/**
	* List of options
	*/
	options: MosaicLabelValue[];
}
