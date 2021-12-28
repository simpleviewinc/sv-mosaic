import { Address } from '@root/forms/Address/AddressTypes';

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

export interface MapCoordinatesProps {
  /**
   * Address object used to set lat and lng values when using
   * the autocoordinates feature.
   */
  address?: Address;
  /**
   * Google Maps API key needed to consume the Maps JavaScript API
   * and Places API
   */
  apiKey: string;
  /**
   * Disables interactive elements.
   */
  disabled?: boolean;
  /**
   * Latitude and longitude object.
   */
  mapPosition: MapPosition;
}

export interface MapProps {
  /**
   * Address object used to set lat and lng values when using
   * the autocoordinates feature.
   */
  address?: Address;
  /**
   * Callback function that is executed when user selects one of the
   * suggestions of the autocomplete google component.
   */
  handleCoordinates?: (coordinates: MapPosition) => void;
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
  handleCoordinates?: (coordinates: MapPosition) => void;
}
