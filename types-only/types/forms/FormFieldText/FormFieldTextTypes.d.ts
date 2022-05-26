/// <reference types="react" />
/**
 * Base text field props.
 */
export declare type TextFieldDef = {
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
};
