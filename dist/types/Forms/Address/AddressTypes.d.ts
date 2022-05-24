export declare type IAddress = {
    address: string;
    city: string;
    country: {
        title: string;
        value: any;
    };
    postalCode: string;
    state: {
        title: string;
        value: any;
    };
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
     * Function executed when removing an address card.
     */
    onRemoveAddress?: (address: any) => void;
    /**
     * Function executed when editing an address card.
     */
    onEdit?: (address: any, addressIndex: any) => void;
}
export interface AddressProps {
    /**
     * Meaningful name related to this component.
     */
    label: string;
    value?: IAddress[];
    onChange?: (event: unknown) => void;
}
