/**
 * Interface that defines structure of the options that the
 * checkbox list receives.
 */
export interface CheckboxOption {
    label: string;
    value: string | {
        [key: string]: unknown;
    };
}
export declare type FormFieldCheckboxDef = {
    /**
    * List of options
    */
    options: CheckboxOption[];
};
