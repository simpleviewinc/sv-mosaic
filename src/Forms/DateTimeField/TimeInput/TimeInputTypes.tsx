import { TimePickerProps } from '../TimePicker/TimePickerTypes';

export interface TimeInputProps extends TimePickerProps {
  /**
   * Disabling this field should show the
   * time value selected.
   */
  disabled?: boolean;
}