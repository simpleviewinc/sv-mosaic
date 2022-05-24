import { SectionDef } from "./FormTypes";
declare type State = {
    data: any;
    errors: any;
    validating: any;
    custom: unknown;
    validForm: boolean;
    disabled: unknown;
};
declare type Action = {
    type: string;
    value: any;
    name: string;
};
export declare function coreReducer(state: State, action: Action): State;
declare type UseFormReturn = {
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
