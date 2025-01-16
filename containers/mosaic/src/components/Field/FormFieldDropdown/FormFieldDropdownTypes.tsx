import type { MosaicLabelValue } from "@root/types";
import type { PopperProps } from "@mui/material/Popper";
import type { StrictUnion } from "../FormFieldCheckbox";
import type { FieldDefBase } from "@root/components/Field";

export type DropdownInputSettings = StrictUnion<DropdownLocalOptions | DropdownExternalOptions>;

interface DropdownLocalOptions {
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

interface DropdownExternalOptions {
	/**
	 * Example text shown inside of the text field
	 * portion of the dropdown.
	 */
	placeholder?: string;
	/**
	 * Used to get options from db.
	 *
	 * @deprecated Use the `options` input setting instead.
	 */
	getOptions?: () => Promise<MosaicLabelValue[]>;
}

export type CustomPopperProps = {
	value: string;
} & PopperProps;

export type DropdownData = MosaicLabelValue;

export type FieldDefDropdown = FieldDefBase<"dropdown", DropdownInputSettings>;
