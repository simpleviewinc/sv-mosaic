import { Sizes } from "@root/theme/sizes";
export interface DropdownSingleSelectionProps {
    /**
     * Text to be shown on top of the dropdown
     */
    label: string;
    /**
     * Example text shown inside of the text field
     * portion of the dropdown
     */
    placeholder?: string;
    /**
     * Boolean value that indicates whether the
     * user must select an option from the dropdown
     * or not
     */
    required?: boolean;
    /**
     * Boolean value that indicates whether the
     * dropdown can be selected or not
     */
    disabled?: boolean;
    /**
     * Additional text shown under the dropdown
     * that helps the user understand how to use the
     * dropdown
     */
    helperText?: string;
    /**
     * Additional text shown next to the dropdown
     * that helps the user understand how to use the
     * dropdown
     */
    instructionText?: string;
    /**
     * Additional text shown under the dropdown
     * that warns the user when there's an error
     */
    errorText?: string;
    /**
     * Enum of default sizes to choose from
     */
    size?: Sizes;
    /**
     * Array of options to be displayed on the
     * dropdown
     */
    options: {
        title: string;
        [key: string]: any;
    }[];
}
