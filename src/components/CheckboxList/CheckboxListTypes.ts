/**
 * Interface that defines structure of the options that the
 * checkbox list receives.
 */
export interface Option {
	label: string;
	value: string | { [key: string]: any; };
}

export interface CheckboxListProps {
	/**
	 * Flag that indicates if an option has been selected.
	 */
	checked: Option[];
	/**
	 * List of options
	 */
	options: Option[];
	/**
	 * Function that listens to changes on the checked options.
	 * @param checked List of checked options
	 */
	onChange(checked: string[]): void;
	/**
	 * Additional custom css class for styling the component
	 */
	className?: string;
	/**
	 * Boolean value that indicates whether the
	 * current checkbox can be selected or not
	 */
	disabled?: boolean;
}
