import { BasePickerProps } from '@material-ui/pickers/typings/BasePicker';

export interface DateRangeCalendarProps {
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
   * Date value displayed on the "from" input element
   */
  fromValue: Date;
  /**
   * onChange callback used by the "from" picker.
   */
  onChangeFrom: BasePickerProps['onChange'];
  /**
   * onChange callback used by the "to" picker.
   */
  onChangeTo: BasePickerProps['onChange'];
  /**
   * Used to mark the input elements as required
   */
  required?: boolean;
  /**
   * Date value displayed on the "to" input element
   */
  toValue: Date;
}