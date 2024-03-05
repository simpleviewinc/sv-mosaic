import { MosaicLabelValue } from "@root/types";
import { PopperProps } from "@mui/material/Popper";
import { StrictUnion } from "../FormFieldCheckbox";
import { FieldDefBase } from "@root/components/Field";

export type DropdownSingleSelectionInputSettings = StrictUnion<DropdownSingleSelectionLocalOptions | DropdownSingleSelectionExternalOptions>;

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
};

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
};

export type CustomPopperProps = {
	value: string;
} & PopperProps;

export type DropdownData = MosaicLabelValue;

export type FieldDefDropdown = FieldDefBase<"dropdown", DropdownSingleSelectionInputSettings>;
