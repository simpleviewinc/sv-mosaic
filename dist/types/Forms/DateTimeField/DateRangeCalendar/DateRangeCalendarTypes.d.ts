import { BasePickerProps } from '@material-ui/pickers/typings/BasePicker';
import { InputPickerProps } from '@root/forms/DateTimeField/DatePicker/DatePickerTypes';
export interface DateRangeCalendarProps extends InputPickerProps {
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
     * Date value displayed on the "to" input element
     */
    toValue: Date;
    value?: any;
    onChange?: any;
}
