import { FieldProps } from "@root/components/Field";
import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import { BasePickerProps } from '@material-ui/pickers/typings/BasePicker';

export interface DateRangeCalendarProps extends FieldProps {
  fromValue: ParsableDate;
  onChangeFrom: BasePickerProps['onChange'];
  onChangeTo: BasePickerProps['onChange'];
  toValue: ParsableDate;
}