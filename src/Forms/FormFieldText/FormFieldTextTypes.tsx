import { FieldDef, MosaicFieldProps } from '@root/components/Field';
import { Sizes } from '@root/theme/sizes';
import { ChangeEventHandler } from 'react';

/**
 * Base text field props.
 */
// export interface TextFieldProps extends FieldProps {
// 		inputSettings?: {
//     /**
//      * Example text within the input to be replaced by the user.
//      */
//     placeholder?: string;
//     /**
//      * Specifies which form element a label is bound to.
//      */
//     htmlFor?: string;
//     /**
//      * Used to show and limit the characters.
//      */
//     maxCharacters?: number;
//     /**
//      * Icon at the beginning of the text field.
//      */
//     prefixElement?: JSX.Element;
//     /**
//      * Sizing attribute (dimensions tbd).
//      */
//     size?: Sizes;
//     /**
//      * Value written by the user into the text field.
//      */
//     value?: string;
//     /**
//      * When true the text field will expand its height.
//      */
//     multiline?: boolean;
//     /**
//      * Type of the input element. It should be a valid HTML5
//      * (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
//      * input type.
//      */
//     type?: string;
//   };
//   /**
//    * Function that listens to changes on the text field and updates its value.
//    */
//   onChange?: ChangeEventHandler<HTMLInputElement>;
// }

export type TextFieldProps = {
	fieldDef: TextFieldDef
} & MosaicFieldProps;

// TEXT FIELD SPECIFIC DEVELOPER CONTRACT
// type TextFieldDef = {
//     inputSettings : {
//         ...
//     }
// } & FieldDef;
export type TextFieldDef = {
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
		 * Used to show and limit the characters.
		 */
		maxCharacters?: number;
		/**
		 * Icon at the beginning of the text field.
		 */
		prefixElement?: JSX.Element;
		/**
		 * Sizing attribute (dimensions tbd).
		 */
		size?: Sizes;
		/**
		 * Value written by the user into the text field.
		 */
		value?: string;
		/**
		 * When true the text field will expand its height.
		 */
		multiline?: boolean;
		/**
		 * Type of the input element. It should be a valid HTML5
		 * (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
		 * input type.
		 */
		type?: string;
	};
	/**
	 * Function that listens to changes on the text field and updates its value.
	 */
	// onChange?: ChangeEventHandler<HTMLInputElement>;
} & FieldDef;

export interface StyledWrapperProps {
	width: string;
}

export interface StyledTextInputProps {
	width: string;
}
