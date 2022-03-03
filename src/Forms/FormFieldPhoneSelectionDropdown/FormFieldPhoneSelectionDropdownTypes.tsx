export type PhoneSelectionDef = {
	/**
	 * Phone formatting according to the country selected.
	 */
	autoFormat?: boolean;
	/**
	 * Initial country. It must be a country code (e.g., us, mx, etc.)
	 */
	country?: string;
	/**
	 * Example text shown inside of the input field
	 * portion of the dropdown
	 */
	placeholder?: string;
	/**
	 * Input state value
	 */
	value?: string;
}
