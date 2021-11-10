import { BasePickerProps } from '@material-ui/pickers/typings/BasePicker';

export interface DateTimeInputProps {
  /**
   * Used only to style input elements with warnings.
   */
  error?: boolean;
  /**
   * Used to display only the values selected for both
   * input elements.
   */
  disabled?: boolean;
  /**
   * Value of the date picker
   */
  dateValue: Date;
  /**
   * onChange callback used by the date picker
   */
  onChangeDate: BasePickerProps['onChange'];
  /**
   * onChange callback used by the time picker
   */
  onChangeTime: BasePickerProps['onChange'];
  /**
   * Used to mark the input elements as required
   */
  required?: boolean;
  /**
   * Value of the time picker
   */
  timeValue: Date;
}
