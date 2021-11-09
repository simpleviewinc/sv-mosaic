import { BasePickerProps } from '@material-ui/pickers/typings/BasePicker';

export interface DatePickerProps {
  /**
   * Keyboard onChange callback
   */
  onChange: BasePickerProps['onChange'];
  /**
   * Picker value
   */
  value: Date;
}
