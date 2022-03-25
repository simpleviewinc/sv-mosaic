/// <reference types="react" />
import { MosaicLabelValue } from '@root/types';
import { Sizes } from '../../theme/sizes';
export interface FormFieldDropdownMultipleSelectionTypes {
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
     * Text to help the user fill the current text field.
     */
    instructionText?: string;
    /**
     * If true, changes border color, adds red background and displays errorText (if any).
     */
    error?: boolean;
    /**
     * Text to be shown if there’s an error with the text field.
     */
    errorText?: string;
    /**
     * Sizing attribute.
     */
    size?: Sizes;
    /**
     * Array of objects containing each of the options to be displayed within the dropdown.
     */
    options?: MosaicLabelValue[];
}
