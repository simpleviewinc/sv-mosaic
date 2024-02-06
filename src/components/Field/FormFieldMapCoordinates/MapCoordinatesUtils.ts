import { isLatitude, isLongitude } from "@root/components/Form/validators";
import { Libraries, MapPosition } from "./MapCoordinatesTypes";
import { IAddress } from "@root/components/Field/FormFieldAddress/AddressTypes";

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
export const defaultMapPosition = { lat: 0, lng: 0 };

/**
 * Example of an address object.
 */
export const address: IAddress = {
	address1: "8950 N Oracle Rd",
	city: "Oro Valley",
	country: { label: "United States", value: "US" },
	postalCode: "85704",
	state: { label: "Arizona", value: "AZ" },
	types: [{ label: "Physical", value: "physical" }],
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
		});
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

	if (typeof isLatitude(latLng.lat) === "string" || typeof isLongitude(latLng.lng) === "string") {
		return false;
	}

	return true;
}

export function isValidCoords(coords: string | undefined) {
	if (!coords) {
		return false;
	}

	const rx = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

	return rx.test(coords);
}

export function isSameCoords(coords1: MapPosition | undefined, coords2: MapPosition | undefined) {
	const isEqual =
			// Both the coords1 value and the coords2 value are the same (undefined)
			(coords1 === coords2) ||
			// Both the coords1 value and the coords2 value have the same lat and lng values
			(coords1 && coords2 && coords1.lat === coords2.lat && coords1.lng === coords2.lng);

	return isEqual;
}
