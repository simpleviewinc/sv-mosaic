import * as React from "react";

/**
 * Dimensions used to define both the heights of the input and
 * the padding when the input contains an icon.
 */
export type Dimensions = 'sm' | 'md' | 'lg';

/**
 * Corresponding values for each height. This values are not 
 * defined yet, for now are just assumed.
 */
export const heights: {[key in Dimensions]: number} = {
  lg: 55,
  md: 45,
  sm: 35,
}

/**
 * Corresponding values for the padding when an leading icon is set. 
 * This values are not defined yet, for now are just assumed.
 */
export const iconPadding: {[key in Dimensions]: number} = {
  lg: 30,
  md: 25,
  sm: 20,
}

/**
 * Base text field props.
 */
export interface TextFieldProps {
  label?: string;
  helperText?: string;
  maxCharacters?: number;
  required?: boolean;
  leadingIcon?: React.ElementType;
  disabled?: boolean;
  instructionText?: string;
  error?: boolean;
  errorIcon?: React.ElementType;
  errorText?: string;
  validateTextField?: () => boolean;
  value?: string;
  size?: Dimensions;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  width?: string;
  multiline?: boolean;
  maxHeight?: string;
  [key: string]: any;
}

/**
 * Interface used to define props that are
 * used to conditionally apply styles to the 
 * wrapper of the text field component.
 */
export interface StyledWrapperProps {
  width: string;
  innerSize: Dimensions;
}

/**
 * Inteface used to define props that are used
 * to conditionally apply styles
 * to the text field component.
 */
export interface StyledTextInputProps {
  innerSize: Dimensions;
  disabled: boolean;
  error: boolean;
  width: string;
  withIcon: boolean;
}

/**
 * Interface used to define the type of the 
 * icon's left padding.
 */
export interface StyledIconProps {
  innerSize: Dimensions;
}
