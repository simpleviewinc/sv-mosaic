import { ChangeEventHandler } from 'react';
import { Sizes } from '../../theme/sizes';
export interface TextAreaProps {
    /**
     * Significant name related to its text area.
     */
    label: string;
    /**
     * Example text within the input to be replaced by the user.
     */
    placeholder?: string;
    /**
     * Indicates whether the text area is required or not.
     */
    required?: boolean;
    /**
     * Indicates whether the text area can be written on or readonly.
     */
    disabled?: boolean;
    /**
     * Text to provide context to the current text field.
     */
    helperText?: string | JSX.Element;
    /**
     * When defined a counter with the current length of the text will be shown.
     */
    maxCharacters?: number;
    /**
     * Text to help the user fill the current text field.
     */
    instructionalText?: string;
    /**
     * If true, changes border color, adds red background and displays errorText (if any).
     */
    error?: boolean;
    /**
     * Text to be shown if there’s an error with the text field.
     */
    errorText?: string;
    /**
     * Value written by the user into the text area.
     */
    value?: string;
    /**
     * Sizing attribute (dimensions tbd).
     */
    size?: Sizes;
    /**
    * Additional custom css class for styling the component
    */
    className?: string;
    /**
     * Specifies which form element a label is bound to.
     */
    htmlFor?: string;
    /**
     * Function that listens to changes on the text field and updates its value.
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export interface StyledTextAreaProps {
    disabled: boolean;
    error: boolean;
}
