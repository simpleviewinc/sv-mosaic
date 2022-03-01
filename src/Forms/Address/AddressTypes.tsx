import { Dispatch, SetStateAction } from 'react';

export type IAddress = {
	address1: string;
	address2?: string;
	address3?: string;
	city: string;
	country: { title: string; value: unknown };
	countryName?: string;
	id?: number;
	postalCode: string;
	state: { title: string; value: unknown };
	stateName?: string;
	types: string[];
};

export interface AddressCardProps {
	/**
	 * Address object that contains all the information
	 * to fill the address card.
	 */
	address: IAddress;
	/**
	 * Index of the current address card.
	 */
	addressIndex?: number;
	/**
	 * Disables edit and remove button
	 */
	disabled: boolean;
	/**
	 * Function executed when removing an address card.
	 */
	onRemoveAddress?: (address) => void;
	/**
	 * Function executed when editing an address card.
	 */
	onEdit?: (address, addressIndex) => void;
}

export interface AddressProps {
	/**
	 * Meaningful name related to this component.
	 */
	label: string;
	value?: IAddress[];
	onChange?: (event: unknown) => void;
}

export interface AddressDrawerProps {
	addressToEdit: IAddress;
	isEditing: boolean;
	addressIdx: number;
	open: boolean;
	onChange?: (event: unknown) => void;
	handleClose: () => void;
	setIsEditing: Dispatch<SetStateAction<boolean>>;
	value: IAddress[];
}
