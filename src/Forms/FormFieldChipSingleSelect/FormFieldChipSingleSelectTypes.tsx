import { FieldDef } from "@root/components/Field";
import { MosaicLabelValue } from "@root/types";

export interface FormFieldChipSingleSelectProps extends FieldDef {
	inputSettings?: {
		/**
   * Array of objects containing each of the options to be displayed within the dropdown.
   */
		options: SelectableOption[];
	}
	/**
	 * Function to be executed as callback when an option is selected 
	 */
	onSelect?: (...args) => void;
}

interface SelectableOption extends MosaicLabelValue {
	/**
	 * Indicates whether the current option is selected or not
	 */
	selected?: boolean;
}