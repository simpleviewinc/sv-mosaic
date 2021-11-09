import { FieldProps } from '@root/components/Field';
import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import { BasePickerProps } from '@material-ui/pickers/typings/BasePicker';

export interface DateTimeInputProps extends FieldProps {
  dateValue: ParsableDate | Date;
  onChangeDate: BasePickerProps['onChange'];
  onChangeTime: BasePickerProps['onChange'];
  timeValue: Date;
}
