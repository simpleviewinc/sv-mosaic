/**
 * Interface that defines structure of the options that the
 * checkbox list receives.
 */
export interface Option {
	label: string;
	value: string | { [key: string]: unknown };
}

export interface FormFieldCheckboxDef {
	/**
	* List of options
	*/
	options: Option[];
}
