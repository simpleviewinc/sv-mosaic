import * as React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { memo, ReactElement } from 'react';
import { MapProps } from '../MapCoordinatesTypes';
import { isEmpty } from 'lodash';

// Components
import LocationSearchInput from '../LocationSearchInput';

// Styles
import { MapContainer } from '../MapCoordinates.styled';

const containerStyle = {
	display: 'flex',
	height: '200px',
};

const mapOptions = {
	disableDefaultUI: true,
	zoomControl: true,
};

const Map = (props: MapProps): ReactElement => {
	const {
		address,
		handleCoordinates,
		mapPosition = { lat: -3.745, lng: -40.523 },
		onClick
	} = props;

	return (
		<MapContainer>
			{isEmpty(address) && <LocationSearchInput handleCoordinates={handleCoordinates} />}
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
