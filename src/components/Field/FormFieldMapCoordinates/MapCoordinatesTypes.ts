import { FieldDefBase } from "@root/components/Field/FieldTypes";

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

export type MapCoordinatesInputSettings = Pick<MapProps, "initialCenter"> & {
	/**
	 * Latitude and longitude object.
	 * @deprecated Use initialCenter instead
	 */
	mapPosition?: MapPosition;
	/**
	 * Where to center the map initially and when
	 * the reset button is clicked. Defaults to
	 * Simpleview HQ in Tucson if not provided
	 */
	initialCenter?: MapPosition;
	/**
	 * Google Maps API key needed to consume the Maps JavaScript API
	 * and Places API
	 */
	googleMapsApiKey: string;
	/**
	 * The Google Maps API provides map tiles at various zoom levels for map
	 * type imagery. Most roadmap imagery is available from zoom levels 0 to 18
	 * https://developers.google.com/maps/documentation/javascript/maxzoom
	 */
	zoom?: number;
	/**
	 * How far to zoom when a marker is chosen
	 */
	focusZoom?: number;
};

export interface MapProps {
	/**
	 * Where to center the map initially and when
	 * the reset button is clicked. Defaults to
	 * Simpleview HQ in Tucson if not provided
	 */
	initialCenter?: MapPosition;
	/**
	 * Location of the marker
	 */
	value?: MapPosition;
	/**
	 * Zoom level of the Map
	 */
	zoom? : MapCoordinatesInputSettings["zoom"];
	/**
	 * Zoom level of the Map
	 */
	focusZoom? : MapCoordinatesInputSettings["focusZoom"];
	/**
	 * This is fired when the marker coordinates change, either by dragging
	 * an existing marker, clicking the map or selecting an address
	 */
	onCoordinatesChange?: (coords: MapPosition) => void;

	googleMapsApiKey: string;

	onBlur?: () => void;
}

export type MapWithMarkerProps = Pick<MapProps, "zoom" | "focusZoom" | "onCoordinatesChange" | "value" | "initialCenter" | "googleMapsApiKey" | "onBlur">;

export type ResetButtonProps = {
	show?: boolean;
	onClick?: () => void;
};

export type MapFocusProps = Pick<MapProps, "value" | "initialCenter" | "zoom"> & {
	onDragMarkerEnd?: (e: google.maps.MapMouseEvent) => void;

	/**
	 * The zoom at which to set the map when a marker is set
	 */
	focusZoom?: number;

	/**
	 * The map should pan to the new marker if it is within
	 * the current map bounds
	 */
	shouldPanRef?: React.MutableRefObject<boolean>;
};

export type MapCoordinatesDrawerProps = Pick<MapProps, "value" | "initialCenter"> & {
	fieldDef: FieldDefMapCoordinates;

	handleClose: (save?: boolean) => Promise<void>;

	onChange: (e: MapPosition) => Promise<void>;

	hasUnsavedChanges?: boolean;

	handleUnsavedChanges?: (val: boolean) => void;

	dialogOpen?: boolean;

	handleDialogClose?: (val: boolean) => void;

	googleMapsApiKey: string;
};

export type MapCoordinatesData = MapPosition;

export type FieldDefMapCoordinates = FieldDefBase<"mapCoordinates", MapCoordinatesInputSettings, MapCoordinatesData>;
