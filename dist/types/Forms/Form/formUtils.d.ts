import { SectionDef } from "./FormTypes";
export declare function coreReducer(state: any, action: any): any;
export declare const actions: {
    setFieldValue({ name, value, validate }: {
        name: any;
        value: any;
        validate?: boolean;
    }): (dispatch: any) => Promise<void>;
    validateField({ name }: {
        name: any;
    }): (dispatch: any, getState: any, extraArgs: any) => Promise<void>;
    copyFieldToField({ from, to }: {
        from: any;
        to: any;
    }): (dispatch: any, getState: any) => Promise<void>;
    validateForm({ fields }: {
        fields: any;
    }): (dispatch: any, getState: any) => Promise<boolean>;
    submitForm(): (dispatch: any, getState: any, extraArgs: any) => Promise<void>;
    resetForm(): (dispatch: any) => Promise<void>;
};
export declare function useForm({ customReducer }?: {
    customReducer?: ((state: any, action: any) => any)[];
}): {
    events: import("eventemitter3")<string | symbol, any>;
    state: any;
    dispatch: any;
    registerFields: (fields: any) => void;
    registerOnSubmit: (fn: any) => void;
};
export declare const generateLayout: ({ sections, fields }: {
    sections?: any;
    fields: any;
}) => SectionDef[];
