import { Sizes } from '@root/theme/sizes';
import { ReactNode } from 'react';

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
	/**
	 * Settings that belong to a specific field.
	 * They are defined within each field implementation.
	 */
	inputSettings?: any;
	/**
	 * Used to show and limit the characters.
	 */
	maxCharacters?: number;
	/**
	 * Specifies which form element a label is bound to.
	 */
	htmlFor?: string;
	/**
	 * Value written by the user into the text field.
	 */
	value?: string;
	size?: Sizes;
}

export interface FieldDefProps extends FieldProps {
	type?: "text";
	children: ReactNode;
}