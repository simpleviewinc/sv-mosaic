export interface RadioButtonProps {
  /**
   * Indicates whether the text area can be written on or readonly.
   */
   disabled?: boolean;
  /**
   * Significant name related to its text area.
   */
  label: string;
  /**
   * Indicates whether the text area is required or not.
   */
  required?: boolean;
  /**
   * The value of the component.
   */
  value?: string;
}
