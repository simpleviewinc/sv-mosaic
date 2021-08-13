import { ChangeEventHandler } from "react";

/**
 * Dimensions used to define both the heights of the input and
 * the padding when the input contains an icon.
 */
export type Dimensions = 'sm' | 'md' | 'lg';


/**
 * Base text field props.
 */
export interface TextFieldProps {
  /**
   * Significant name related to its textfield.
   */
  label: string;
  /**
   * Example text within the input to be replaced by the user.
   */
  placeholder: string;
  /**
   * Specifies which form element a label is bound to.
   */
  htmlFor?: string;
  /**
   * Text to help the user fill the current text field.
   */
  helperText?: string | JSX.Element;
  /**
   * Used to show and limit the characters.
   */
  maxCharacters?: number;
  /**
   * Marks Text field as required
   */
  required?: boolean;
  /**
   * Icon at the beginning of the text field.
   */
  icon?: JSX.Element;
  /**
   * Sizing attribute (dimensions tbd).
   */
  size?: Dimensions;
  /**
   * Indicates whether the text field can be written on or readonly.
   */
  disabled?: boolean;
  /**
   * Flag to style text field as erroneous.
   */
  error?: boolean;
  /**
   * Value written by the user into the text field.
   */
  value?: string;
  /**
   * Sets the width of the text field.
   */
  width?: string;
  /**
   * Function that listens to changes on the text field and updates its value.
   */
  onChange: ChangeEventHandler<HTMLInputElement>;
  /**
   * When true the text field will expand its height.
   */
  multiline?: boolean;
}

export interface StyledWrapperProps {
  width: string;
}

export interface StyledTextInputProps {
  width: string;
}
