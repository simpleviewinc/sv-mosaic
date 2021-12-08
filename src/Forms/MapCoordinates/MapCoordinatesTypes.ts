import { ReactGoogleAutocompleteProps } from 'react-google-autocomplete'

export interface MapCoordinatesProps {
  /**
   * Disables interactive elements
   */
  disabled?: boolean;
}

export interface MapProps {
  mapPosition: { lat: number | null; lng: number | null};
  onClick: (event: any) => void;
  coordinates: { lat: number | null; lng: number | null};
  onPlaceSelected: ReactGoogleAutocompleteProps['onPlaceSelected']
}

export type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];
