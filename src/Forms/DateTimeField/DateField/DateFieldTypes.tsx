import { BasePickerProps } from '@material-ui/pickers/typings/BasePicker';

export type DateFieldDef = {
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
	 * Value of the time picker
	 */
	timeValue: Date;
	/**
	 * Value to trigger time field
	 */
	showTime: boolean;
};

// export interface DateTimeInputProps extends InputPickerProps {
// 	/**
// 	 * Value of the date picker
// 	 */
// 	dateValue: Date;
// 	/**
// 	 * onChange callback used by the date picker
// 	 */
// 	onChangeDate: BasePickerProps['onChange'];
// 	/**
// 	 * onChange callback used by the time picker
// 	 */
// 	onChangeTime: BasePickerProps['onChange'];
// 	/**
// 	 * Value of the time picker
// 	 */
// 	timeValue: Date;
// 	value?: any;
// 	onChange?: any;
// }
