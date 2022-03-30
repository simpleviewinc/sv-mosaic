import { MosaicLabelValue } from "@root/types";
export declare type optionsWithCategory = {
    category?: string;
} & MosaicLabelValue;
declare type AdvancedSelectionBasic = {
    createNewOption?: (filter: string) => Promise<string>;
    getSelected: (options: string[]) => Promise<optionsWithCategory[]>;
};
declare type AdvancedSelectionLocalOptions = {
    /**
    * Options to be display within the Modal.
    */
    checkboxOptions: optionsWithCategory[];
} & AdvancedSelectionBasic;
declare type AdvancedSelectionExternalOptions = {
    /**
     * Used to get the selected options on the parent component.
     */
    getOptions: ({ filter, limit, offset, }: {
        filter?: string;
        limit?: number;
        offset?: number;
    }) => Promise<optionsWithCategory[]>;
    getOptionsLimit?: number | string;
} & AdvancedSelectionBasic;
export declare type AdvancedSelectionDef = AdvancedSelectionLocalOptions | AdvancedSelectionExternalOptions;
export interface ChipListPropsTypes {
    fieldDef: {
        inputSettings: {
            isModalOpen: boolean;
            isMobileView: boolean;
            selectedOptions: any;
            getSelected: (options: string[]) => Promise<optionsWithCategory[]>;
            deleteSelectedOption: (e: any) => Promise<void>;
        };
        disabled: boolean;
    };
}
export interface AdvanceSelectionDrawerPropTypes {
    value: any;
    fieldDef: any;
    onChange: (e: any) => Promise<void>;
    isModalOpen: boolean;
    isMobileView: boolean;
    handleClose: (save?: boolean) => Promise<void>;
    handleUnsavedChanges?: (val: boolean) => void;
    dialogOpen?: boolean;
    handleDialogClose?: (val: boolean) => void;
}
export interface LoadMoreButtonPropsTypes {
    fieldDef: {
        disabled: boolean;
        inputSettings: {
            canLoadMore: boolean;
            parentInputSettings: any;
            getMoreOptions: () => void;
        };
    };
}
export {};
