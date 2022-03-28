import { Sizes } from "@root/theme/sizes";
import { HTMLAttributes, ReactNode } from "react";
export interface MosaicFieldProps<T = any, U = any> {
    /**
     * Object that contains all the properties from the current field defined
     * by the developer.
     */
    fieldDef: FieldDef<T, U>;
    /**
     * Function that listens to changes on the field and updates its value.
     */
    onChange?: (e: U) => Promise<void>;
    /**
     * Function that listens to a blur event on the field and executes an action.
     */
    onBlur?: (e?: any) => Promise<void>;
    /**
     * Specifies which form element a label is bound to.
     */
    htmlFor?: string;
    /**
     * Value written by the user into the text field.
     */
    value?: U;
    /**
     * Flag to style text field as erroneous.
     */
    error?: string;
    /**
     * React Element or component to be rendered as child of the field component.
     */
    children?: ReactNode;
    /**
     * Number that represents the amount of fields that share the same row.
     */
    colsInRow?: number;
}
export interface FieldDef<T = any, U = any> {
    /**
     * Significant name related to its field.
     */
    name: string;
    /**
     * Label that will sit on top of the field.
     */
    label: string | undefined;
    /**
     * Marks field as required
     */
    required?: boolean;
    /**
     * Text to help the user fill the current field.
     */
    helperText?: string | JSX.Element;
    /**
     * Instructions about how to fill the current field.
     */
    instructionText?: string;
    /**
     * Indicates whether the field can be written on or readonly.
     */
    disabled?: boolean;
    /**
     * Settings that belong to a specific field.
     * They are defined within each field implementation.
     */
    inputSettings?: T;
    /**
     * Used to show and limit the characters.
     */
    maxCharacters?: number;
    /**
     * Defined between 100, 280, 450, and 620 px.
     */
    size?: Sizes | string;
    /**
     * Allows additional styling to the current field via className.
     */
    className?: HTMLAttributes<HTMLElement>["className"];
    /**
     * Allows additional styling to the current field via style object.
     */
    style?: HTMLAttributes<HTMLElement>["style"];
    /**
     * Defines the type of component from a list of components
     * found on Col.tsx. This also allows for a custom component type.
     */
    type?: string | JSX.Element | (() => JSX.Element);
    /**
     * Object that defines the position of the current field in the
     * form layout.
     */
    layout?: any;
    /**
     * Array of validators to be executed by the form when on blur or
     * when submitted.
     */
    validators?: ((() => string | undefined | JSX.Element) | string | {
        fn: any;
        options: any;
    })[];
    /**
     * Identifier passed by the developer
     */
    id?: string;
    /**
     * Optional value that devs can define for a field to begin with.
     */
    defaultValue?: U;
    /**
     * Array of fields linked to a specific field.
     */
    pairedFields?: string[];
}
