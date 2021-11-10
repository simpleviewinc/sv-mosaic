import { BasePickerProps } from '@material-ui/pickers/typings/BasePicker';

export interface DatePickerProps {
  /**
   * Error flag passed through the Field wrapper.
   * it is used only for styling purposes.
   */
  error?: boolean;
  /**
   * Keyboard onChange callback
   */
  onChange: BasePickerProps['onChange'];
  /**
   * Placeholder display when a date/time is not selected
   */
  placeholder?: string;
  /**
   * Used to mark the input element as required
   */
  required?: boolean;
  /**
   * Picker value
   */
  value: Date;
}
