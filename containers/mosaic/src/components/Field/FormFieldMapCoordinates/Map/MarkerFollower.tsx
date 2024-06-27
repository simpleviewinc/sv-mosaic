import * as React from "react";
import { useEffect } from "react";
import { Marker, useGoogleMap } from "@react-google-maps/api";
import { ReactElement } from "react";
import { MapFocusProps } from "../MapCoordinatesTypes";

// Styles
import { defaultMapPosition, getMapBounds, isValidLatLng } from "../MapCoordinatesUtils";

const MarkerFollower = ({
	value,
	initialCenter,
	onDragMarkerEnd,
	zoom: initialZoom = 7,
	focusZoom = 11,
	shouldPanRef,
}: MapFocusProps): ReactElement => {
	const map = useGoogleMap();
	const currentTarget = React.useRef<google.maps.LatLng | null>(null);

	useEffect(() => {
		(async () => {
			const latLng = isValidLatLng(value) ? value : undefined;

			const bounds = await getMapBounds(map);
			const { lat, lng } = latLng ? value : isValidLatLng(initialCenter) ? initialCenter : defaultMapPosition;
			const target = new google.maps.LatLng(lat, lng);
			const willZoomIn = latLng && map.getZoom() < focusZoom;

			if (bounds && target) {
				if (!currentTarget.current || !currentTarget.current.equals(target)) {
					currentTarget.current = target;

					// The center of the viewport isn't already the target
					if (!bounds.getCenter().equals(target)) {
						if (!bounds.contains(target)) {
							map.setCenter(target);
						} else if (shouldPanRef.current || !latLng || willZoomIn) {
							map.panTo(target);
						} else {
							shouldPanRef.current = true;
						}
					}
				}
			}

			if (latLng) {
				if (map.getZoom() < focusZoom) {
					map.setZoom(focusZoom);
				}
			} else {
				map.setZoom(initialZoom);
			}
		})();
	}, [initialZoom, map, value, shouldPanRef.current]);

	if (!value || value.lat === undefined || value.lng === undefined) {
		return;
	}

	return (
		<Marker
			draggable={true}
			position={value}
			onDragEnd={onDragMarkerEnd}
		/>
	);
};

export default MarkerFollower;
