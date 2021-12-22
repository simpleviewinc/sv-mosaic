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
	width: '684px',
	height: '200px',
};

const mapOptions = {
	disableDefaultUI: true,
	zoomControl: true,
};

const Map = (props: MapProps): ReactElement => {
	const { address, handleCoordinates, mapPosition, onClick } = props;

	return (
		<MapContainer>
			{isEmpty(address) && <LocationSearchInput handleCoordinates={handleCoordinates}/>}
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
