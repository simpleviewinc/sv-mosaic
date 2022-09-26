import { MosaicLabelValue } from "@root/types";
import { PopperProps } from "@mui/material/Popper";

export type DropdownSingleSelectionDef = {
	/**
	 * Example text shown inside of the text field
	 * portion of the dropdown.
	 */
	placeholder?: string;
	/**
	 * Array of options to be displayed on the
	 * dropdown.
	 */
	options: MosaicLabelValue[];
	/**
	 * Used to get options from db.
	 */
	getOptions?: () => Promise<MosaicLabelValue[]>;
}

export type CustomPopperProps = {
	value: string;
} & PopperProps;
