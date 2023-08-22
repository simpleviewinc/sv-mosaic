import * as React from "react";
import { useEffect } from "react";
import { GoogleMap, Marker, useGoogleMap } from "@react-google-maps/api";
import { memo, ReactElement, useState } from "react";
import { MapFocusProps, MapProps } from "../MapCoordinatesTypes";
import { isEmpty } from "lodash";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { InputAdornment } from "@mui/material";

// Styles
import { MapContainer } from "../MapCoordinates.styled";
import AddressAutocomplete from "@root/forms/FormFieldAddress/AddressAutocomplete/AddressAutocomplete";
import { StyledClearIcon } from "@root/forms/FormFieldAddress/AddressAutocomplete/AddressAutocomplete.styled";
import { getMapBounds, isValidLatLng } from "../MapCoordinatesUtils";

const containerStyle = {
	display: "flex",
	height: "400px",
};

const mapOptions = {
	disableDefaultUI: true,
	zoomControl: true,
	draggableCursor: "crosshair",
};

const MapInner = ({
	value,
	initialCenter,
	onDragMarkerEnd,
	onDragStart
}: MapFocusProps): ReactElement => {
	const map = useGoogleMap();
	const currentTarget = React.useRef<google.maps.LatLng | null>(null);

	useEffect(() => {
		(async () => {
			const bounds = await getMapBounds(map);
			const { lat, lng } = isValidLatLng(value) ? value : initialCenter ? initialCenter : {lat: 0, lng: 0};
			const target = new google.maps.LatLng(lat, lng);

			if (!bounds || !target) {
				return;
			}

			if (currentTarget.current && currentTarget.current.equals(target)) {
				return;
			}

			currentTarget.current = target;

			// The center of the viewport is already the target
			if (bounds.getCenter().equals(target)) {
				return;
			}

			if (!bounds.contains(target)) {
				map.setCenter(target);
			} else {
				map.panTo(target);
			}
		})();
	}, [map, value]);

	if (!value || value.lat === undefined || value.lng === undefined) {
		return;
	}

	return (
		<Marker
			draggable={true}
			position={value}
			onDragEnd={onDragMarkerEnd}
			onDragStart={onDragStart}
		/>
	)
}

const Map = (props: MapProps): ReactElement => {
	const {
		address,
		initialCenter,
		value,
		zoom = 0,
		onDragStart,
		onCoordinatesChange
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
			onCoordinatesChange(latLng);
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

	const onDragMarkerEnd = ({ latLng }: google.maps.MapMouseEvent) => {
		const lat = latLng.lat();
		const lng = latLng.lng();

		onCoordinatesChange({ lat, lng });
	}

	const onClick = ({ latLng }: google.maps.MapMouseEvent) => {
		const lat = latLng.lat();
		const lng = latLng.lng();

		onCoordinatesChange({ lat, lng });
	}

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
					center={initialCenter}
					zoom={zoom}
					onClick={onClick}
					options={mapOptions}
					ref={(ref) => map.current = ref}
				>
					<MapInner
						value={value}
						initialCenter={initialCenter}
						onDragMarkerEnd={onDragMarkerEnd}
						onDragStart={onDragStart}
					/>
				</GoogleMap>
			</div>
		</MapContainer>
	);
};

export default memo(Map);
