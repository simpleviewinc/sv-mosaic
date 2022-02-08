import { FieldDef } from '@root/components/Field/FieldTypes';
import { IAddress } from '@root/forms/Address/AddressTypes';
import EventEmitter = require('eventemitter3');

/**
 * Libraries availables to load when bootstraping the JavaScript code for the Maps
 * https://developers.google.com/maps/documentation/javascript/libraries
 * We use places which places enables your application to search for places such as
 * establishments, geographic locations, or prominent points of interest, within a defined area.
 */
export type Libraries = (
	| 'drawing'
	| 'geometry'
	| 'localContext'
	| 'places'
	| 'visualization'
)[];

/**
 * Used to display the Map's markers and center to center the map at a given latitude and
 * longitude.
 */
export type MapPosition = { lat: number; lng: number };

export type AddCordinatesFnc = (coordinates: MapPosition) => void;

export type MapCoordinatesDef = {
	/**
	 * Address object used to set lat and lng values when using
	 * the autocoordinates feature.
	 */
	address?: IAddress;
	/**
	 * Google Maps API key needed to consume the Maps JavaScript API
	 * and Places API
	 */
	apiKey: string;
	/**
	 * Latitude and longitude object.
	 */
	mapPosition?: MapPosition;
}

export interface MapProps {
	/**
	 * Address object used to set lat and lng values when using
	 * the autocoordinates feature.
	 */
	address?: IAddress;
	/**
	 * Callback function that is executed when user selects one of the
	 * suggestions of the autocomplete google component.
	 */
	handleCoordinates?: AddCordinatesFnc
	/**
	 * Latitude and longitude object.
	 */
	mapPosition: MapPosition;
	/**
	 * Function triggered when user clicks on the map.
	 */
	onClick: (e: google.maps.MapMouseEvent) => void;
}

export interface LocationSearchInputProps {
	/**
	 * Callback function that is executed when user selects one of the
	 * suggestions of the autocomplete google component.
	 */
	handleCoordinates?: AddCordinatesFnc
}

export type MapModalReducer = {
		events: EventEmitter<string | symbol, unknown>;
		state: {
			data: {
				lat: unknown;
				lng: unknown
			}
		};
		dispatch: unknown;
		registerFields: (fields: unknown) => void;
		registerOnSubmit: (fn: unknown) => void;
	}

export interface MapCoordinatesModalProps {
	fieldDef: FieldDef<MapCoordinatesDef>
	handleClose: () => void;
	handleCoordinates: AddCordinatesFnc
	handleSaveCoordinates: () => void;
	isModalOpen: boolean
	modalReducer: MapModalReducer;
	onMapClick: (mapEvent: unknown) => void;
	removeResetLocation: () => void;
}
