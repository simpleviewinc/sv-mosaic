import * as React from "react";
import type { MapWithMarkerProps } from "../MapCoordinatesTypes";

// Components
import Map from "@root/components/Field/FormFieldMapCoordinates/Map";
import { StyledSpan } from "../MapCoordinates.styled";

function MapWithMarker({
	zoom,
	focusZoom,
	initialCenter,
	onCoordinatesChange,
	value,
	googleMapsApiKey,
	onBlur,
}: MapWithMarkerProps) {

	return (
		<div>
			<Map
				initialCenter={initialCenter}
				value={value}
				zoom={zoom}
				focusZoom={focusZoom}
				onCoordinatesChange={onCoordinatesChange}
				googleMapsApiKey={googleMapsApiKey}
				onBlur={onBlur}
			/>
			<StyledSpan>
				Click on the map to update the latitude and longitude coordinates
			</StyledSpan>
		</div>
	);
}

export default MapWithMarker;
