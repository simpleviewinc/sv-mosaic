import { Sizes } from '../../theme/sizes';
export declare type TextAreaDef = {
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
};
