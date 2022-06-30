import { Libraries } from "./MapCoordinatesTypes";
import { IAddress } from "@root/forms/FormFieldAddress/AddressTypes";

/**
 * Options to disable interactive actions. For more details take a look at the options interface:
 * https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.clickableIcons
 */
export const mapOptions = {
	clickableIcons: false,
	disableDefaultUI: true,
	gestureHandling: "none",
	keyboardShortcuts: false,
	zoomControl: false,
};

export const libraries: Libraries = ["places"];

/**
 *	Helper function to get a string address from an Address object
 */
export const getAddressStringFromAddressObject = (addressObj: IAddress): string => {
	const { address1, city, country, postalCode, state } = addressObj;

	return `${address1} ${postalCode} ${city} ${state} ${country}`;
};

/**
 * Default map position
 */
export const defaultMapPosition = { lat: -3.745, lng: -40.523 }

/**
 * Example of an address object.
 */
export const address: IAddress = {
	address1: "8950 N Oracle Rd",
	city: "Oro Valley",
	country: "United States",
	postalCode: 85704,
	state: "AZ",
	types: ["physical"],
};
