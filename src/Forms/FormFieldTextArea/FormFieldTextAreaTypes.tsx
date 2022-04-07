import { Sizes } from "../../theme/sizes";

export type TextAreaDef = {
	/**
	 * Example text within the input to be replaced by the user.
	 */
	placeholder?: string;
	/**
	 * When defined a counter with the current length of the text will be shown.
	 */
	maxCharacters?: number;
	/**
	 * Sizing attribute (dimensions tbd).
	 */
	size?: Sizes;
}
