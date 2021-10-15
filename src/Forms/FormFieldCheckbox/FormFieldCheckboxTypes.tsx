import { FieldProps } from '@root/components/Field';

/**
 * Interface that defines structure of the options that the
 * checkbox list receives.
 */
interface Option {
	label: string;
	value: string;
}

export interface FormFieldCheckboxProps extends FieldProps {
	inputSettings?: {
		/**
		   * Flag that indicates if an option has been selected.
		   */
		checked?: string[];
		/**
		 * List of options
		 */
		options: Option[];
		value?: string[]
	};
	/**
   * Function that listens to changes on the checked options.
   * @param checked List of checked options
   */
	onChange(checked: string[]): void;
}
