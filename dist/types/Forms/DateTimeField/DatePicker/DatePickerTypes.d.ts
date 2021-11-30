import { BasePickerProps } from '@material-ui/pickers/typings/BasePicker';
export interface DatePickerProps extends InputPickerProps {
    /**
     * Keyboard onChange callback
     */
    onChange: BasePickerProps['onChange'];
    /**
     * Placeholder display when a date/time is not selected
     */
    placeholder?: string;
    /**
     * Picker value
     */
    value: Date;
}
export interface InputPickerProps {
    /**
     * Error flag passed through the Field wrapper.
     * it is used only for styling purposes.
     */
    error?: boolean;
    /**
     * Used to mark the input element as required
     */
    required?: boolean;
    /**
     * Used to display only the values selected for both
     * input elements.
     */
    disabled?: boolean;
}
