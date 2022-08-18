import { MosaicFieldProps } from "@root/components/Field/FieldTypes";
export declare type DatePickerDef = {
    placeholder: string;
};
export interface DatePickerProps extends Omit<MosaicFieldProps, "onChange"> {
    onChange?: (date: Date) => void;
}
