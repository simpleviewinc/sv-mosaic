import type { MosaicLabelValue } from "@root/types";
import type { FieldDef, FieldDefBase } from "@root/components/Field";

export interface IAddress {
	address1: string;
	address2?: string;
	address3?: string;
	city: string;
	country: MosaicLabelValue;
	id?: number;
	postalCode: string;
	state: MosaicLabelValue;
	types: MosaicLabelValue[];
}

export type AddressPart = "address1" | "address2" | "address3" | "country" | "city" | "state" | "postalCode";

export interface AddressCardProps {
	/**
	 * Address object that contains all the information
	 * to fill the address card.
	 */
	address: AddressItem;
	/**
	 * Disables edit and remove button
	 */
	disabled: boolean;
	/**
	 * Function executed when removing an address card.
	 */
	onRemoveAddress?: (address: AddressItem) => void;
	/**
	 * Function executed when editing an address card.
	 */
	onEdit?: (address: AddressItem) => void;
}
export interface AddressDrawerProps {
	addressToEdit?: AddressItem;
	googleMapsApiKey: string;
	onSave: (address: AddressItem) => void;
	handleClose: (save?: boolean) => Promise<void>;
	addressTypes?: MosaicLabelValue[];
	handleUnsavedChanges?: (val: boolean) => void;
	dialogOpen?: boolean;
	handleDialogClose?: (val: boolean) => void;
	getOptionsCountries: AddressFieldInputSettings["getOptionsCountries"];
	getOptionsStates: AddressFieldInputSettings["getOptionsStates"];
}

export interface AddressFieldInputSettings {
	amountPerType?: number;
	amountShipping?: number;
	amountBilling?: number;
	amountPhysical?: number;
	getOptionsCountries(): Promise<MosaicLabelValue[]>;
	getOptionsStates(country: string): Promise<MosaicLabelValue[]>;
	googleMapsApiKey?: string;
	subFields?: (AddressPart | Partial<Omit<FieldDef, "name"> & { name: AddressPart }>)[];
}

export type AddressSingleFieldInputSettings = Pick<AddressFieldInputSettings,
	| "getOptionsCountries"
	| "getOptionsStates"
	| "googleMapsApiKey"
	| "subFields"
>

export type AddressItem = IAddress & Record<PropertyKey, unknown>;

export type AddressData = AddressItem[];

export type FieldDefAddress = FieldDefBase<"address", AddressFieldInputSettings>;
export type FieldDefAddressSingle = FieldDefBase<"addressSingle", AddressSingleFieldInputSettings>;

export type AddressType = MosaicLabelValue & {
	inputSettingsKey: string;
	limit?: number;
};
