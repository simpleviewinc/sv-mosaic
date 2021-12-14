import * as React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { memo, ReactElement, useCallback, useRef, useState } from 'react';
import { MapContainer } from '../MapCoordinates.styled';
import { Libraries, MapProps } from '../MapCoordinatesTypes';
import LocationSearchInput from '../LocationSearchInput';

const containerStyle = {
  width: '684px',
  height: '200px',
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

// const libraries: Libraries = ['places'];

const Map = (props: MapProps): ReactElement => {
  const { apiKey, mapPosition, onClick } = props;

  /*   const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  }); */

  /*   console.log('coordinates: ', coordinates);
  console.log('Map position: ', mapPosition); */
  /* 
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []); */

  /*  const onMapLoad = React.useCallback((map) => {
    ref.current = map;
  }, []); */

  /*  if (loadError) return <span>{'Error loading maps'}</span>;
  if (!isLoaded) return <span>{'Loading Maps'}</span>; */

  return (
    <MapContainer>
      <LocationSearchInput />
      <div>
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
    </MapContainer>
  );
};

export default memo(Map);
