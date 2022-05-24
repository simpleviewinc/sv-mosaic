import { Libraries } from "./MapCoordinatesTypes";
import { IAddress } from "@root/forms/FormFieldAddress/AddressTypes";
/**
 * Options to disable interactive actions. For more details take a look at the options interface:
 * https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.clickableIcons
 */
export declare const mapOptions: {
    clickableIcons: boolean;
    disableDefaultUI: boolean;
    gestureHandling: string;
    keyboardShortcuts: boolean;
    zoomControl: boolean;
};
export declare const libraries: Libraries;
/**
 *	Helper function to get a string address from an Address object
 */
export declare const getAddressStringFromAddressObject: (addressObj: IAddress) => string;
/**
 * Default map position
 */
export declare const defaultMapPosition: {
    lat: number;
    lng: number;
};
/**
 * Example of an address object.
 */
export declare const address: IAddress;
