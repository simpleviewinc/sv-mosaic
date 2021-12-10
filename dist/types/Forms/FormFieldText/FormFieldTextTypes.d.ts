import { FieldProps } from "@root/components/Field";
import { Sizes } from "@root/theme/sizes";
import { ChangeEventHandler } from "react";
/**
 * Base text field props.
 */
export interface TextFieldProps extends FieldProps {
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
        icon?: JSX.Element;
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
    };
    /**
     * Function that listens to changes on the text field and updates its value.
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export interface StyledWrapperProps {
    width: string;
}
export interface StyledTextInputProps {
    width: string;
}
