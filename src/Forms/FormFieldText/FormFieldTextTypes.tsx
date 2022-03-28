import { Sizes } from "@root/theme/sizes";

/**
 * Base text field props.
 */
// TEXT FIELD SPECIFIC DEVELOPER CONTRACT
export type TextFieldDef = {
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
