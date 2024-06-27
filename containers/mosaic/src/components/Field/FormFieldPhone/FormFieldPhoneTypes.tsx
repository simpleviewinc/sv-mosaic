import { FieldDefBase } from "@root/components/Field";

export type PhoneSelectionInputSettings = {
	/**
	 * Phone formatting according to the country selected.
	 */
	autoFormat?: boolean;
	/**
	 * Initial country. It must be a country code (e.g., us, mx, etc.)
	 */
	country?: string;
	/**
	 * Input state value
	 */
	value?: string;
};

export type PhoneDropdownData = string;

export type FieldDefPhoneSelection = FieldDefBase<"phone", PhoneSelectionInputSettings>;
