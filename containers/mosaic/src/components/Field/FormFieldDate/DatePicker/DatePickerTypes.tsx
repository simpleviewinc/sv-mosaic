import type { MosaicFieldProps } from "@root/components/Field/FieldTypes";

export interface DatePickerChangeOptions {
	isPartiallyFilled?: boolean;
}

export interface DatePickerProps extends Omit<MosaicFieldProps, "onChange"> {
	onChange?: (date: Date | null, keyboardInputValue?: string, options?: DatePickerChangeOptions) => void;
	minDate?: Date;
}
