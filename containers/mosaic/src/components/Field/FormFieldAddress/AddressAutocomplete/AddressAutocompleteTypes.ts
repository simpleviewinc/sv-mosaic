import type { TextFieldProps } from "@mui/material/TextField";
import type { AddressFieldInputSettings } from "../AddressTypes";

export interface AddressAutocompleteProps {
	value: string;
	onChange: (address: string) => void;
	onBlur?: () => void;
	className?: string;
	onSelect: (value: any) => Promise<void>;
	textField?: TextFieldProps;
	placeholder?: string;
	googleMapsApiKey: string;
	disabled?: boolean;
	id?: string;
	label: string;
}

export type AddressAutocompleteInputSettings = Pick<AddressFieldInputSettings,
	| "getOptionsCountries"
	| "getOptionsStates"
	| "googleMapsApiKey"
>
