import { MosaicLabelValue } from "@root/types";
import { PopperProps } from "@mui/material/Popper";
import { StrictUnion } from "../FormFieldCheckbox";

export type DropdownSingleSelectionDef = StrictUnion<DropdownSingleSelectionLocalOptions | DropdownSingleSelectionExternalOptions>;

type DropdownSingleSelectionLocalOptions = {
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
}

type DropdownSingleSelectionExternalOptions = {
	/**
	 * Example text shown inside of the text field
	 * portion of the dropdown.
	 */
	placeholder?: string;
	/**
	 * Used to get options from db.
	 */
	getOptions?: () => Promise<MosaicLabelValue[]>;
}

export type CustomPopperProps = {
	value: string;
} & PopperProps;
