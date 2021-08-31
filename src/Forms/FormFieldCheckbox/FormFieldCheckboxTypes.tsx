export interface FormFieldCheckboxProps {
  /**
   * Meaningful name related to its checkbox group.
   */
  label: string;
  /**
   * Indicates whether the checkbox group is required or not.
   */
  required?: boolean;
  /**
   * Indicates whether the checkbox group can be selected or read-only.
   */
  disabled?: boolean;
  /**
   * If true, changes border color, adds red background and displays errorText (if any).
   */
  error?: boolean;
  /**
   * Text to provide context to the current text field.
   */
  instructionText?: string | JSX.Element;
  /**
   * 	Text to be shown if there’s an error with the checkbox group (e.g. no option was selected).
   */
  errorText?: string;
}
