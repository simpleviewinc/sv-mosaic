export declare type DropdownSingleSelectionDef = {
    /**
     * Example text shown inside of the text field
     * portion of the dropdown.
     */
    placeholder?: string;
    /**
     * Array of options to be displayed on the
     * dropdown.
     */
    options: Option[];
};
export declare type Option = {
    title: string;
    value: any;
};
