import { ChangeEventHandler } from 'react';

export interface FormFieldToggleSwitchProps {
  /**
   * If true, the toggle switch is checked
   */
  checked?: boolean;
  /**
   * Meaningful name related to the field
   */
  label: string;
  /**
   * Indicates whether the field is required or not
   */
  required?: boolean;
  /**
   * Indicates whether the field can be selected or read-only
   */
  disabled?: boolean;
  /**
   * If true, changes border color, adds red background and displays errorText (if any)
   */
  error?: boolean;
  /**
   * Text to provide context of the field
   */
  instructionText?: string | JSX.Element;
  /**
   * 	Text to be shown if there’s an error with the field
   */
  errorText?: string;
  /**
   * Function that listens to changes on the toggle switch
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Label that describes the toggle switch
   */
  toggleLabel?: string;
}
