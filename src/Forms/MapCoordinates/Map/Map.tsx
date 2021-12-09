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
  const {
    apiKey,
    mapContainerRef,
    mapPosition,
    onClick,
    onPlaceSelected,
  } = props;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  /*   console.log('coordinates: ', coordinates);
  console.log('Map position: ', mapPosition); */
  /* 
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []); */

  //const [country, setCountry] = useState('us');

  /* const { ref } = usePlacesWidget({
    apiKey: '',
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
      {/* <div style={{ width: '250px', marginBottom: '8px' }}>
        <TextField
          fullWidth
          color='primary'
          variant='outlined'
          inputRef={ref}
        />
      </div> */}
      <div ref={mapContainerRef}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapPosition}
          zoom={10}
          onClick={onClick}
          options={mapOptions}
          //onLoad={onMapLoad}
        >
          <Marker position={mapPosition} />
        </GoogleMap>
      </div>
      <Autocomplete
        //apiKey={apiKey}
        onPlaceSelected={(place) => console.log(place)}
      />
    </MapContainer>
  );
};

export default memo(Map);
