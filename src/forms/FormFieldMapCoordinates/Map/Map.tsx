import * as React from "react";
import { useEffect } from "react";
import { GoogleMap, Marker, useGoogleMap } from "@react-google-maps/api";
import { memo, ReactElement, useState } from "react";
import { MapPosition, MapProps } from "../MapCoordinatesTypes";
import { isEmpty } from "lodash";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { InputAdornment } from "@mui/material";

// Styles
import { MapContainer } from "../MapCoordinates.styled";
import AddressAutocomplete from "@root/forms/FormFieldAddress/AddressAutocomplete/AddressAutocomplete";
import { StyledClearIcon } from "@root/forms/FormFieldAddress/AddressAutocomplete/AddressAutocomplete.styled";

const containerStyle = {
	display: "flex",
	height: "400px",
};

const mapOptions = {
	disableDefaultUI: true,
	zoomControl: true,
	draggableCursor: "crosshair",
};

async function getMapBounds(map: google.maps.Map): Promise<google.maps.LatLngBounds | undefined> {
	const bounds = map.getBounds();

	if (bounds) {
		return bounds;
	}

	return new Promise((resolve) => {
		google.maps.event.addListener(map, "bounds_changed", () => {
			resolve(map.getBounds());
		})
	});
}

function isValidLatLng(latLng: MapPosition | undefined): latLng is MapPosition {
	if (!latLng) {
		return false;
	}

	if (
		latLng.lat === undefined || latLng.lng === undefined ||
		Number.isNaN(latLng.lat) || Number.isNaN(latLng.lng)
	) {
		return false;
	}

	return true;
}

const MapInner = ({
	value,
	mapPosition,
	onDragMarkerEnd,
	onDragStart
}: Pick<MapProps, "value" | "mapPosition" | "onDragMarkerEnd" | "onDragStart">): ReactElement => {
	const map = useGoogleMap();
	const currentTarget = React.useRef<google.maps.LatLng | null>(null);

	useEffect(() => {
		(async () => {
			const bounds = await getMapBounds(map);
			const { lat, lng } = isValidLatLng(value) ? value : mapPosition ? mapPosition : {lat: 0, lng: 0};
			const target = new google.maps.LatLng(lat, lng);

			if (bounds && target) {
				if (currentTarget.current && currentTarget.current.equals(target)) {
					return;
				}

				currentTarget.current = target;

				// The center of the viewport is already to target
				if (bounds.getCenter().equals(target)) {
					return;
				}

				if (!bounds.contains(target)) {
					map.setCenter(target);
				} else {
					map.panTo(target);
				}
			}
		})();
	}, [map, value]);

	return (
		<>
			{(value && (value?.lat !== 0 || value?.lng !== 0) && (
				<Marker
					draggable={true}
					position={value || mapPosition}
					onDragEnd={onDragMarkerEnd}
					onDragStart={onDragStart}
				/>
			))}
		</>
	)
}

const Map = (props: MapProps): ReactElement => {
	const {
		address,
		handleCoordinates,
		mapPosition,
		value,
		onClick,
		onDragMarkerEnd,
		zoom = 0,
		onDragStart,
	} = props;

	// State variables
	const [addressValue, setAddressValue] = useState("");

	/**
 * Gets lat and lng values from the selected suggestion and
 * updates the state of the MapCoordinates component.
 * @param value
 */
	const onSelect = async (value) => {
		setAddressValue(value);

		try {
			const results = await geocodeByAddress(value);
			const latLng = await getLatLng(results[0]);
			handleCoordinates(latLng);
		} catch (error) {
			// TODO Catch this
		}
	};

	/**
 * Reset the address value that is displayed in the autocomplete component.
 */
	const clearValue = () => {
		setAddressValue("");
	};

	const map = React.useRef<GoogleMap | undefined>();

	return (
		<MapContainer>
			{isEmpty(address) && (
				<AddressAutocomplete
					className={"mapCoordinates"}
					fieldSize={"100%"}
					value={addressValue}
					onChange={setAddressValue}
					onSelect={onSelect}
					placeholder="Type a location, address or city…"
					textField={{
						InputProps: {
							endAdornment: (
								<InputAdornment position='end'>
									<StyledClearIcon data-testid={"location-search-clear-icon"} onClick={clearValue} />
								</InputAdornment>
							),
						}
					}}
				/>
			)}
			<div>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={mapPosition}
					zoom={zoom}
					onClick={onClick}
					options={mapOptions}
					ref={(ref) => map.current = ref}
				>
					<MapInner
						value={value}
						mapPosition={mapPosition}
						onDragMarkerEnd={onDragMarkerEnd}
						onDragStart={onDragStart}
					/>
				</GoogleMap>
			</div>
		</MapContainer>
	);
};

export default memo(Map);
