import type { MosaicLabelValue } from "@root/types";

export interface CheckboxListProps {
	/**
	 * Flag that indicates if an option has been selected.
	 */
	checked: MosaicLabelValue[];
	/**
	 * List of options
	 */
	options: MosaicLabelValue[];
	/**
	 * Function that listens to changes on the checked options.
	 * @param checked List of checked options
	 */
	onChange(checked: (Record<string, unknown> | MosaicLabelValue)[]): void;
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
	 * Callback executed when the list of options is updated.
	 */
	onChangeCb?: (checked: (Record<string, unknown> | MosaicLabelValue)[]) => void;
}
