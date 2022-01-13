import { Sizes } from '@root/theme/sizes';
import { HTMLAttributes, ReactNode } from 'react';

// MOSAIC GENERIC CONTRACT
// interface FieldProps {
//     onChange: fn()
//     value:
//     touched
// }
export interface MosaicFieldProps<T> {//FieldProps
	fieldDef: FieldDef<T>;
	/**
	 * Function that listens to changes on the text field and updates its value.
	 */
	// onChange?: (e: unknown, ...params: unknown[]) => void | unknown;
	onChange?: HTMLAttributes<HTMLElement>['onChange'];
	onBlur?: HTMLAttributes<HTMLElement>['onBlur'];
	className?: HTMLAttributes<HTMLElement>['className'];
	/**
	 * Specifies which form element a label is bound to.
	 */
	htmlFor?: string;
	/**
	 * Value written by the user into the text field.
	 */
	value?: any | string;
	/**
	 * Flag to style text field as erroneous.
	 */
	error?: string;
	children?: ReactNode;
}

// SHARED FIELD DEFINITION - DEVELOPER GENERIC CONTRACT
// interface FieldDef {
//     name: string
//     label: string
//     maxCharacters: numbers
// }
export interface FieldDef<T = any> {//Previously FieldProps
	name?: string;
	/**
	 * Significant name related to its textfield.
	 */
	label: string;
	/**
		   * Marks Text field as required
		   */
	required?: boolean;
	/**
	  * Text to help the user fill the current text field.
	 */
	helperText?: string | JSX.Element;
	/**
	 * Instructions about how to fill the text field.
	 */
	instructionText?: string;
	/**
	 * Indicates whether the text field can be written on or readonly.
	 */
	disabled?: boolean;
	/**
	 * Settings that belong to a specific field.
	 * They are defined within each field implementation.
	 */
	inputSettings?: T;
	/**
	 * Used to show and limit the characters.
	 */
	maxCharacters?: number;
	size?: Sizes;
	className?: string;
	type?: string | JSX.Element | (() => JSX.Element);
	layout?: any;
	validators?: (() => string | JSX.Element)[];
}