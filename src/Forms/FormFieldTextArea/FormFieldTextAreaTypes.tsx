import { FieldProps } from '@root/components/Field';
import { ChangeEventHandler } from 'react';
import { Sizes } from '../../theme/sizes';

export interface TextAreaProps extends FieldProps {
	inputSettings?: {
		/**
		 * Example text within the input to be replaced by the user.
		 */
		placeholder?: string;
		/**
		 * Specifies which form element a label is bound to.
		 */
		htmlFor?: string;
		/**
		 * When defined a counter with the current length of the text will be shown.
		 */
		maxCharacters?: number;
		/**
		 * Sizing attribute (dimensions tbd).
		 */
		size?: Sizes;
		/**
		 * Value written by the user into the text area.
		 */
		value?: string;
	}
	className?: string;
	/**
	 * Function that listens to changes on the text field and updates its value.
	 */
	onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface StyledTextAreaProps {
	disabled: boolean;
	error: string;
}
