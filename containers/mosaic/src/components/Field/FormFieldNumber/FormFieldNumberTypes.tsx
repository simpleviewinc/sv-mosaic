import { FieldDefBase } from "@root/components/Field";

/**
 * Base number field props.
 */
export type NumberFieldInputSettings = {
	/**
	 * Example text within the input to be replaced by the user.
	 */
	placeholder?: string;
	/**
	 * Maximum number of decimal places that this field can accept.
	 * Defaults to 0. Use -1 to allow any number of decimal places.
	 */
	decimalPlaces?: number;
	/**
	 * Prefix the field with a unit or symbol
	 */
	prefix?: string;
	/**
	 * Suffix the field with a unit or symbol
	 */
	suffix?: string;
	/**
	 * Whether the field should expect a positive, negative
	 * or either sign. Defaults to "any"
	 */
	sign?: "any" | "positive" | "negative";
};

export type NumberFieldData = string | number;

export type FieldDefNumber = FieldDefBase<"number", NumberFieldInputSettings>;
