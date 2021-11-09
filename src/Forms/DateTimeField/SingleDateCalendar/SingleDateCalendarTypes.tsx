import { DatePickerProps } from '../DatePicker/DatePickerTypes';

export interface SingleDateCalendarProps extends DatePickerProps {
  /**
   * Disabling the field should display the date values
   * selected.
   */
  disabled?: boolean;
}