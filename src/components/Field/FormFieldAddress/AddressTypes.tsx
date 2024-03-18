import { MosaicLabelValue } from "@root/types";
import { FieldDefBase } from "@root/components/Field";

export type IAddress = {
	address1: string;
	address2?: string;
	address3?: string;
	city: string;
	country: MosaicLabelValue;
	id?: number;
	postalCode: string;
	state: MosaicLabelValue;
	types: MosaicLabelValue[];
};

export interface AddressCardProps {
	/**
	 * Address object that contains all the information
	 * to fill the address card.
	 */
	address: IAddress;
	/**
	 * Disables edit and remove button
	 */
	disabled: boolean;
	/**
	 * Function executed when removing an address card.
	 */
	onRemoveAddress?: (address: IAddress) => void;
	/**
	 * Function executed when editing an address card.
	 */
	onEdit?: (address: IAddress) => void;
}
export interface AddressDrawerProps {
	addressToEdit?: IAddress;
	googleMapsApiKey: string;
	onSave: (address: IAddress) => void;
	handleClose: (save?: boolean) => Promise<void>;
	addressTypes?: MosaicLabelValue[];
	handleUnsavedChanges?: (val: boolean) => void;
	dialogOpen?: boolean;
	handleDialogClose?: (val: boolean) => void;
	getOptionsCountries: AddressFieldInputSettings["getOptionsCountries"];
	getOptionsStates: AddressFieldInputSettings["getOptionsStates"];
}

export type AddressFieldInputSettings = {
	amountPerType?: number;
	amountShipping?: number;
	amountBilling?: number;
	amountPhysical?: number;
	getOptionsCountries(): Promise<MosaicLabelValue[]>;
	getOptionsStates(country: string): Promise<MosaicLabelValue[]>;
	googleMapsApiKey: string;
};

export type AddressData = IAddress[];

export type FieldDefAddress = FieldDefBase<"address", AddressFieldInputSettings>;

export type AddressType = MosaicLabelValue & {
	inputSettingsKey: string;
	limit?: number;
};
