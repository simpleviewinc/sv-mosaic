import * as React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { memo, ReactElement } from 'react';
import { MapContainer } from '../MapCoordinates.styled';
import { MapProps } from '../MapCoordinatesTypes';
import LocationSearchInput from '../LocationSearchInput';

const containerStyle = {
	width: '684px',
	height: '200px',
};

const mapOptions = {
	disableDefaultUI: true,
	zoomControl: true,
};

const Map = (props: MapProps): ReactElement => {
	const { mapPosition, onClick } = props;

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
				>
					<Marker position={mapPosition} />
				</GoogleMap>
			</div>
		</MapContainer>
	);
};

export default memo(Map);
