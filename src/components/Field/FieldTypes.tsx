export interface FieldProps {
	name?: string;
	/**
 	 * Flag to style text field as erroneous.
	 */
	error?: boolean;
	/**
	 * Indicates whether the text field can be written on or readonly.
	 */
	disabled?: boolean;
	/**
   	 * Marks Text field as required
   	 */
	required?: boolean;
	/**
	 * Significant name related to its textfield.
	 */
	label: string;
	/**
 	 * Text to help the user fill the current text field.
	 */
	helperText?: string | JSX.Element;
	/**
   	 * Indicates the cause of an error.
   	 */
	errorText?: string;
	/**
	 * Instructions about how to fill the text field.
	 */
	instructionText?: string;
	/**
	 * Function that listens to changes on the text field and updates its value.
	 */
	onChange?: any;
}