import { MosaicObject } from "@root/types";
export declare const formActions: {
    init({ fields }: {
        fields: any;
    }): (_dispatch: any, _getState: any, extraArgs: any) => Promise<void>;
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
    submitForm(): (dispatch: any, getState: any, extraArgs: any) => Promise<{
        valid: boolean;
        data: any;
    }>;
    resetForm(): (dispatch: any) => Promise<void>;
    setFormValues({ values }: {
        values: MosaicObject;
    }): (dispatch: any) => Promise<void>;
};
export default formActions;
