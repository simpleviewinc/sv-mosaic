import { Libraries, MapPosition } from "./MapCoordinatesTypes";
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

/**
 * Returns the map bounds if they're available, or waits
 * until the bounds have changed to return them
 */
export async function getMapBounds(map: google.maps.Map): Promise<google.maps.LatLngBounds | undefined> {
	const bounds = map.getBounds();

	if (bounds) {
		return bounds;
	}

	let listener: google.maps.MapsEventListener;

	return new Promise((resolve) => {
		listener = google.maps.event.addListener(map, "bounds_changed", () => {
			resolve(map.getBounds());
			google.maps.event.removeListener(listener);
		})
	});
}

/**
 * Validates a latitude/longitude object. It's only valid if it matches the shape of
 * { lat: number, lng: number }
 */
export function isValidLatLng(latLng: MapPosition | undefined): latLng is MapPosition {
	if (!latLng) {
		return false;
	}

	if (
		latLng.lat === undefined || latLng.lng === undefined ||
		Number.isNaN(latLng.lat) || Number.isNaN(latLng.lng)
	) {
		return false;
	}

	return true;
}
