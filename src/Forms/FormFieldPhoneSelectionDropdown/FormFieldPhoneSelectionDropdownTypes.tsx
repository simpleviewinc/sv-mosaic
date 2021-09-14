export interface FormFieldPhoneSelectionDropdownProps {
  /**
   * Phone formatting according to the country selected.
   */
  autoFormat?: boolean;
  /**
   * Initial country. It must be a country code (e.g., us, mx, etc.)
   */
  country?: string;
  /**
   * Boolean value that indicates whether the
   * field can be selected or not
   */
  disabled?: boolean;
  /**
   * If true, changes border color, adds red background and displays errorText.
   */
  error?: boolean;
  /**
   * Additional text shown under the dropdown
   * that warns the user when there's an error
   */
  errorText?: string;
  /**
   * Additional text shown under the dropdown
   * that helps the user understand how to use the
   * dropdown
   */
  helperText?: string;
  /**
   * Additional text shown next to the dropdown
   * that helps the user understand how to use the
   * dropdown
   */
  instructionText?: string;
  /**
   * Text to be shown on top of the dropdown
   */
  label: string;
  /**
   * Example text shown inside of the input field
   * portion of the dropdown
   */
  placeholder?: string;
  /**
   * It will mark the input field as required
   */
  required?: boolean;
  /**
   * Input state value
   */
  value?: string;
}
