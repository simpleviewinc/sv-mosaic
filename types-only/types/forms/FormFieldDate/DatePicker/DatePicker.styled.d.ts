 
import { MuiPickersOverrides } from "@material-ui/pickers/typings/overrides";
declare type overridesNameToClassKey = {
    [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P];
};
declare type CustomType = {
    MuiPickersBasePicker: any;
};
declare module "@material-ui/core/styles/overrides" {
    interface ComponentNameToClassKey extends overridesNameToClassKey {
    }
    interface ComponentNameToClassKey extends CustomType {
    }
}
export declare const customTheme: import("@material-ui/core/styles").Theme;
export declare const StyledInputPicker: string;
export declare const StyledDatePicker: any;
export declare const DisabledDateTimeValue: any;
export declare const DatePickerWrapper: any;
export {};
