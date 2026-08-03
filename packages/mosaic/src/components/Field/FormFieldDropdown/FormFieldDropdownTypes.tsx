import type { MosaicLabelValue } from "@root/types";
import type { PopperProps } from "@mui/material/Popper";
import type { FieldDefBase } from "@root/components/Field";

export interface DropdownInputSettings {
	/**
	 * Example text shown inside of the text field
	 * portion of the dropdown.
	 */
	placeholder?: string;
	/**
	 * Array of options to be displayed on the
	 * dropdown.
	 */
	options: MosaicLabelValue[] | (() => Promise<MosaicLabelValue[]>);
}

export type CustomPopperProps = {
	value: string;
} & PopperProps;

export type DropdownData = MosaicLabelValue;

export type FieldDefDropdown = FieldDefBase<"dropdown", DropdownInputSettings>;
