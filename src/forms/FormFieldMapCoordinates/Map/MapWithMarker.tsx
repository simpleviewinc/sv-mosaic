import * as React from "react";
import {MapWithMarkerProps } from "../MapCoordinatesTypes";

// Components
import Map from "@root/forms/FormFieldMapCoordinates/Map";
import { StyledSpan } from "../MapCoordinates.styled";

function MapWithMarker({
	zoom,
	focusZoom,
	initialCenter,
	onCoordinatesChange,
	value
}: MapWithMarkerProps) {

	return (
		<>
			<Map
				initialCenter={initialCenter}
				value={value}
				zoom={zoom}
				focusZoom={focusZoom}
				onCoordinatesChange={onCoordinatesChange}
			/>
			<StyledSpan>
				Click on the map to update the latitude and longitude coordinates
			</StyledSpan>
		</>
	)
}

export default MapWithMarker
