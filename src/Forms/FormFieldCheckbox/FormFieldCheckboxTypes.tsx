import { FieldProps } from '@root/components/Field';

/**
 * Interface that defines structure of the options that the
 * checkbox list receives.
 */
export interface Option {
	label: string;
	value: string | { [key: string]: unknown };
}

export interface FormFieldCheckboxProps extends FieldProps {
	inputSettings?: {
		/**
		 * List of options
		 */
		options: Option[];
	};
	/**
   * Function that listens to changes on the checked options.
   * @param checked List of checked options
   */
	onChange(checked: string[]): void;
}
