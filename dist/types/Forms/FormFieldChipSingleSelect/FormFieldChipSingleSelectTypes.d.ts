import { FieldProps } from "@root/components/Field";
import { MosaicLabelValue } from "@root/types";
export interface FormFieldChipSingleSelectProps extends FieldProps {
    /**
   * Array of objects containing each of the options to be displayed within the dropdown.
   */
    options: SelectableOption[];
    /**
     * Function to be executed as callback when an option is selected
     */
    onSelect?: (...args: any[]) => void;
}
interface SelectableOption extends MosaicLabelValue {
    /**
     * Indicates whether the current option is selected or not
     */
    selected?: boolean;
}
export {};
