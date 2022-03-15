import { Sizes } from "@root/theme/sizes";

export type DropdownSingleSelectionDef = {
	/**
	 * Example text shown inside of the text field
	 * portion of the dropdown.
	 */
	placeholder?: string;
	/**
	 * Enum of default sizes to choose from.
	 */
	size?: Sizes;
	/**
	 * Array of options to be displayed on the
	 * dropdown.
	 */
	options: Option[],
}

export type Option = {
	title: string;
	value: any;
}