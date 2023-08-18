import { FieldDefBase } from "@root/components/Field/FieldTypes";
import { IAddress } from "@root/forms/FormFieldAddress/AddressTypes";

/**
 * Libraries availables to load when bootstraping the JavaScript code for the Maps
 * https://developers.google.com/maps/documentation/javascript/libraries
 * We use places which places enables your application to search for places such as
 * establishments, geographic locations, or prominent points of interest, within a defined area.
 */
export type Libraries = (
	| "drawing"
	| "geometry"
	| "localContext"
	| "places"
	| "visualization"
)[];

/**
 * Used to display the Map's markers and center to center the map at a given latitude and
 * longitude.
 */
export type MapPosition = { lat: number; lng: number };

export type AddCordinatesFnc = (coordinates: MapPosition) => void;

export type MapCoordinatesInputSettings = {
	/**
	 * Address object used to set lat and lng values when using
	 * the autocoordinates feature.
	 */
	address?: IAddress;
	/**
	 * Google Maps API key needed to consume the Maps JavaScript API
	 * and Places API
	 */
	googleMapsApiKey: string;
	/**
	 * Latitude and longitude object.
	 */
	mapPosition?: MapPosition;
	/**
	 * The Google Maps API provides map tiles at various zoom levels for map
	 * type imagery. Most roadmap imagery is available from zoom levels 0 to 18
	 * https://developers.google.com/maps/documentation/javascript/maxzoom
	 */
	zoom?: number;
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
	 * Location of the marker
	 */
	value?: MapPosition;
	/**
	 * Function triggered when user clicks on the map.
	 */
	onClick: (e: google.maps.MapMouseEvent) => void;
	/**
	 * Zoom level of the Map
	 */
	zoom? : MapCoordinatesInputSettings["zoom"];
	/**
	 * This event is fired when the user stops dragging the marker.
	 */
	onDragMarkerEnd?: ((e: google.maps.MapMouseEvent) => void) | undefined;
	/**
	 * This event is fired when the user starts dragging the marker.
	 */
	onDragStart?: ((e: google.maps.MapMouseEvent) => void) | undefined;
}

export interface LocationSearchInputProps {
	/**
	 * Callback function that is executed when user selects one of the
	 * suggestions of the autocomplete google component.
	 */
	handleCoordinates?: AddCordinatesFnc
}

export interface MapCoordinatesDrawerProps {
	fieldDef: FieldDefMapCoordinates;
	handleClose: (save?: boolean) => Promise<void>;
	onChange: (e: MapPosition) => Promise<void>
	value: MapPosition;
	mapPosition: MapPosition;

	hasUnsavedChanges?: boolean;
	handleUnsavedChanges?: (val: boolean) => void;
	dialogOpen?: boolean;
	handleDialogClose?: (val: boolean) => void;
}

export type MapCoordinatesData = MapPosition;

export type FieldDefMapCoordinates = FieldDefBase<"mapCoordinates", MapCoordinatesInputSettings, MapCoordinatesData>
