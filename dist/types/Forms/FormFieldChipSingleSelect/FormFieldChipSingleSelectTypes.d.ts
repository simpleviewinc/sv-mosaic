import { MosaicLabelValue } from "@root/types";
export declare type FormFieldChipSingleSelectDef = {
    /**
  * Array of objects containing each of the options to be displayed within the dropdown.
  */
    options: SelectableOption[];
    /**
     * Function to be executed as callback when an option is selected
     */
    onSelect?: (...args: any[]) => void;
};
interface SelectableOption extends MosaicLabelValue {
    /**
     * Indicates whether the current option is selected or not
     */
    selected?: boolean;
}
export {};
