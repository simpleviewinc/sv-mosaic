import { FieldDefBase } from "@root/components/Field";

/**
 * Base text field props.
 */
// TEXT FIELD SPECIFIC DEVELOPER CONTRACT
export type TextFieldInputSettings = {
	/**
	 * Example text within the input to be replaced by the user.
	 */
	placeholder?: string;
	/**
	 * Used to show and limit the characters.
	 */
	maxCharacters?: number;
	/**
	 * Icon at the beginning of the text field.
	 */
	prefixElement?: JSX.Element;
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
	/**
	 * Minimum number of rows to display when multiline option
	 * is set to true.
	 */
	minRows?: number;
	/**
	 * Maximum number of rows to display when multiline
	 * option is set to true.
	 */
	maxRows?: number;
};

export type TextFieldData = string | number;

export type FieldDefText = FieldDefBase<"text", TextFieldInputSettings>;
