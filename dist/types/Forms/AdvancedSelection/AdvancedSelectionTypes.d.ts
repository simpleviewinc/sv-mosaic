import { FieldProps } from '@root/components/Field';
export declare type optionsWithCategory = {
    category?: string;
    label: string;
    value: string;
};
export interface AdvancedSelectionProps extends FieldProps {
    inputSettings: {
        /**
           * Options to be display within the Modal.
           */
        checkboxOptions: optionsWithCategory[];
        /**
         * Descriptive title for the modal displayed on the
         * header.
         */
        modalTitle: string;
        /**
         * If true, displays a checkbox list for each category
         * otherwise displays a single checkbox list with all the
         * checkboxOptions.
         */
        groupByCategory?: boolean;
        updateOptionsCb?: (key: any) => void;
    };
    /**
     * Used to get the selected options on the parent component.
     */
    onChange: (selectedOptions: optionsWithCategory[]) => void;
}
