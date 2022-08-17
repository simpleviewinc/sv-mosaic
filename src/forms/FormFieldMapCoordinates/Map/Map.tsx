import * as React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { memo, ReactElement } from "react";
import { MapProps } from "../MapCoordinatesTypes";
import { isEmpty } from "lodash";

// Components
import LocationSearchInput from "../LocationSearchInput";

// Styles
import { MapContainer } from "../MapCoordinates.styled";

const containerStyle = {
	display: "flex",
	height: "400px",
};

const mapOptions = {
	disableDefaultUI: true,
	zoomControl: true,
	draggableCursor: "crosshair",
};

const Map = (props: MapProps): ReactElement => {
	const {
		address,
		handleCoordinates,
		mapPosition,
		value,
		onClick,
		onDragMarkerEnd,
		zoom = 0,
		isDragging,
		onDragStart,
	} = props;

	return (
		<MapContainer>
			{isEmpty(address) && (
				<LocationSearchInput handleCoordinates={handleCoordinates} />
			)}
			<div>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={mapPosition}
					zoom={zoom}
					onClick={onClick}
					options={mapOptions}
				>
					{isDragging ||
						((value || mapPosition) &&
							(value?.lat !== 0 || value?.lng !== 0) && (
							<Marker
								draggable={true}
								position={value || mapPosition}
								onDragEnd={onDragMarkerEnd}
								onDragStart={onDragStart}
							/>
						))}
				</GoogleMap>
			</div>
		</MapContainer>
	);
};

export default memo(Map);
