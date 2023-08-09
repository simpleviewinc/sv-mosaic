import { Libraries } from "./MapCoordinatesTypes";
import { IAddress } from "@root/forms/FormFieldAddress/AddressTypes";

export const libraries: Libraries = ["places"];

/**
 *	Helper function to get a string address from an Address object
 */
export const getAddressStringFromAddressObject = (addressObj: IAddress): string => {
	const { address1, city, country, postalCode, state } = addressObj;

	return `${address1} ${postalCode} ${city} ${state.value} ${country.label}`;
};

/**
 * Default map position
 */
export const defaultMapPosition = { lat: 78.65665391667302, lng: 16.35480434300188 }

/**
 * Example of an address object.
 */
export const address: IAddress = {
	address1: "8950 N Oracle Rd",
	city: "Oro Valley",
	country: {label: "United States", value: "US"},
	postalCode: "85704",
	state: {label: "Arizona", value: "AZ"},
	types: [{label: "Physical", value: "physical"}],
};
