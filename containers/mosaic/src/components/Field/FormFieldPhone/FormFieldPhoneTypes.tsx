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
	country: string;
	label: string;
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
}

export interface PhoneSelectionInputSettings {
	/**
	 * Phone formatting according to the country selected.
	 *
	 * @deprecated No longer in use.
	 */
	autoFormat?: boolean;
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
}

export type PhoneDropdownData = string;

export type FieldDefPhoneSelection = FieldDefBase<"phone", PhoneSelectionInputSettings>;
