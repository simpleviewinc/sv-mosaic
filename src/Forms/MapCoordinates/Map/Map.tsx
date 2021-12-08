import * as React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { memo, ReactElement, useCallback, useRef, useState } from 'react';
import Autocomplete, { usePlacesWidget } from 'react-google-autocomplete';
import { TextField } from '@material-ui/core';
import { MapContainer } from '../MapCoordinates.styled';
import { Libraries, MapProps } from '../MapCoordinatesTypes';

const containerStyle = {
  width: '684px',
  height: '200px',
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

const libraries: Libraries = ['places'];

const Map = (props: MapProps): ReactElement => {
  const { mapPosition, onClick, coordinates, onPlaceSelected } = props;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '',
    libraries,
  });

  console.log('coordinates: ', coordinates);
  console.log('Map position: ', mapPosition);
  /* 
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []); */

  //const [country, setCountry] = useState('us');

  /* const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac',
    onPlaceSelected: (place) => console.log(place),
    inputAutocompleteValue: 'country',
    options: {
      componentRestrictions: { country },
    },
  }); */

  if (loadError) return <span>{'Error loading maps'}</span>;
  if (!isLoaded) return <span>{'Loading Maps'}</span>;

  return (
    <MapContainer>
      {/* <div style={{ width: '250px', marginTop: '20px' }}>
        <span style={{ color: 'black' }}>Material UI</span>
        <TextField
          fullWidth
          color='primary'
          variant='outlined'
          inputRef={ref}
        />
      </div> */}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapPosition}
        zoom={10}
        onClick={onClick}
        options={mapOptions}
        //onLoad={onMapLoad}
      >
        <Marker
          position={{
            lat: coordinates.lat,
            lng: coordinates.lng,
          }}
        />
      </GoogleMap>
      {/* <Autocomplete
          apiKey='AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac'
          onPlaceSelected={onPlaceSelected}
          types={['(regions)']}
          placeholder='Type a location, address or city…'
          type='search'
        /> */}
    </MapContainer>
  );
};

export default memo(Map);
