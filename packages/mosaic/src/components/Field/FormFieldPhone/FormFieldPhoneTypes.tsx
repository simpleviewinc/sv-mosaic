import type { Dispatch, SetStateAction, ComponentProps } from "react";

import type { FieldDefBase, MosaicFieldProps } from "@root/components/Field";
import type { MosaicLabelValue } from "@root/types";

export type PhoneCodeSelectProps = Omit<ComponentProps<"button">, "onChange"> & {
	value?: string;
	options: (Omit<MosaicLabelValue, "value"> & { value?: MosaicLabelValue["value"] })[];
	onChange: (value?: string) => void;
	iconComponent: unknown;
	error: boolean;
}

export interface PhoneCountryFlagProps {
	country?: string;
	label?: string;
	disabled?: boolean;
}
export interface PhoneCodeAutocompleteProps {
	options: PhoneCodeSelectProps["options"];
	onChange: PhoneCodeSelectProps["onChange"];
	value: PhoneCodeSelectProps["options"][number];
}

export interface PhoneTextFieldProps extends ComponentProps<"input"> {
	error?: boolean;
	countryCodeEditable?: boolean;
}

export interface FormFieldPhoneContextState {
	autocompleteOpen: boolean;
	setAutocompleteOpen: Dispatch<SetStateAction<boolean>>;
	hasFocus: boolean;
	setHasFocus: Dispatch<SetStateAction<boolean>>;
	container?: HTMLDivElement;
	setContainer: React.Dispatch<React.SetStateAction<HTMLDivElement>>;
	id?: string;
	error?: boolean;
	disabled?: boolean;
	onBlur?: MosaicFieldProps["onBlur"];
	inputRef?: MosaicFieldProps["inputRef"];
	international?: boolean;
}

export interface PhoneSelectionInputSettings {
	/**
	 * Initial country. It must be a country code (e.g., us, mx, etc.)
	 */
	country?: string;
	/**
	 * Input state value
	 *
	 * @deprecated
	 */
	value?: string;
	/**
	 * Whether the field should format phone numbers internationally
	 * or nationally. Internationally formatted phone numbers include
	 * the country code in the text field.
	 */
	international?: boolean;
}

export type PhoneDropdownData = string;

export type FieldDefPhoneSelection = FieldDefBase<"phone", PhoneSelectionInputSettings>;
