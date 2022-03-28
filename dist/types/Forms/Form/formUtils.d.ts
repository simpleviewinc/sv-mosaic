import { SectionDef } from "./FormTypes";
import { MosaicObject } from "@root/types";
declare type State = {
    data: any;
    touched: unknown;
    errors: any;
    validating: any;
    custom: unknown;
    validForm: boolean;
    disabled: unknown;
    pairedFields: {
        [key: string]: string[];
    };
};
declare type Action = {
    type: string;
    value: any;
    name: string;
};
export declare function coreReducer(state: State, action: Action): State;
export declare const actions: {
    setFieldValue({ name, value, validate }: {
        name: string;
        value: unknown;
        validate?: boolean;
    }): (dispatch: any) => Promise<void>;
    validateField({ name }: {
        name: string;
    }): (dispatch: any, getState: any, extraArgs: any) => Promise<void>;
    copyFieldToField({ from, to }: {
        from: any;
        to: string;
    }): (dispatch: any, getState: any) => Promise<void>;
    validateForm({ fields }: {
        fields: any;
    }): (dispatch: any, getState: any) => Promise<boolean>;
    submitForm(): (dispatch: any, getState: any, extraArgs: any) => Promise<void>;
    resetForm(): (dispatch: any) => Promise<void>;
    setFormValues({ values }: {
        values: MosaicObject;
    }): (dispatch: any) => Promise<void>;
    setPairedFields({ pairedFields }: {
        pairedFields: any;
    }): (dispatch: any) => Promise<void>;
};
declare type UseFormReturn = {
    events: any;
    state: any;
    dispatch: any;
    registerFields: (fields: any[]) => void;
    registerOnSubmit: (fn: any) => void;
};
export declare function useForm({ customReducer }?: {
    customReducer?: ((state: State, action: Action) => any)[];
}): UseFormReturn;
export declare const generateLayout: ({ sections, fields }: {
    sections?: any;
    fields: any;
}) => SectionDef[];
export declare function joinReducers(...reducers: any[]): (state: any, action: any) => any;
export declare function useThunkReducer(reducer: any, initialState: any, extraArgs: any): any[];
export {};
