import type { MosaicLabelValue } from "@root/types";

export interface CheckboxListProps {
	/**
	 * Flag that indicates if an option has been selected.
	 */
	checked: MosaicLabelValue[];
	/**
	 * List of options. Each option's checkbox takes its accessible name from
	 * `ariaLabel` when that is set, and from `label` otherwise. Set `ariaLabel`
	 * when `label` is empty, so the checkbox still has a name for assistive
	 * technology (e.g. a colour swatch option with no visible text). Setting
	 * both overrides the visible label and logs a warning.
	 */
	options: MosaicLabelValue[];
	/**
	 * Function that listens to changes on the checked options.
	 * @param {MosaicLabelValue[]} checked List of checked options
	 */
	onChange: (checked: MosaicLabelValue[]) => void;
	/**
	 * Additional custom css class for styling the component
	 */
	className?: string;
	/**
	 * Boolean value that indicates whether the
	 * current checkbox can be selected or not
	 */
	disabled?: boolean;
	/**
	 * Checkboxes are split into up to 3 columns with the maximum
	 * number of items in each column being itemsPerColumn. Pass -1
	 * to prevent columns. Defaults to 8.
	 */
	itemsPerColumn?: number;
}
