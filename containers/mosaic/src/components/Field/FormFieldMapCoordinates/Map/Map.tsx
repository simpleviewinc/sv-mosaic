import * as React from "react";
import { GoogleMap } from "@react-google-maps/api";
import type { ReactElement } from "react";
import { memo, useEffect, useState } from "react";
import type { MapProps } from "../MapCoordinatesTypes";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import InputAdornment from "@mui/material/InputAdornment";

import AddressAutocomplete from "@root/components/Field/FormFieldAddress/AddressAutocomplete/AddressAutocomplete";
import { StyledClearIcon } from "@root/components/Field/FormFieldAddress/AddressAutocomplete/AddressAutocomplete.styled";
import MarkerFollower from "./MarkerFollower";
import { defaultMapPosition, isValidLatLng } from "../MapCoordinatesUtils";
import { useLoadScript } from "@react-google-maps/api";
import { libraries } from "@root/components/Field/FormFieldMapCoordinates/MapCoordinatesUtils";

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
		initialCenter,
		value,
		zoom = 0,
		focusZoom = 11,
		onCoordinatesChange,
		googleMapsApiKey,
		onBlur,
	} = props;

	// State variables
	const [addressValue, setAddressValue] = useState("");
	const center = isValidLatLng(initialCenter) ? initialCenter : defaultMapPosition;

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
			console.error("Could not change coordinates: ", { error, value });
		}
	};

	/**
	 * Reset the address value that is displayed in the autocomplete component.
	 */
	const clearValue = () => {
		setAddressValue("");
	};

	const shouldPanRef = React.useRef<boolean>(true);

	const onMapMouseEvent = ({ latLng }: google.maps.MapMouseEvent) => {
		shouldPanRef.current = false;

		const lat = latLng.lat();
		const lng = latLng.lng();

		onCoordinatesChange({ lat, lng });
	};

	useEffect(() => {
		if (value === undefined || (value.lat === undefined && value.lng === undefined)) {
			clearValue();
		}
	}, [value]);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey,
		libraries,
	});

	return (
		<>
			<AddressAutocomplete
				className="mapCoordinates"
				label="Search for an address"
				value={addressValue}
				onChange={setAddressValue}
				onBlur={onBlur}
				onSelect={onSelect}
				placeholder="Type a location, address or city…"
				googleMapsApiKey={googleMapsApiKey}
				textField={{
					InputProps: {
						endAdornment: (
							<InputAdornment position="end">
								<StyledClearIcon data-testid="location-search-clear-icon" onClick={clearValue} />
							</InputAdornment>
						),
					},
				}}
			/>
			{isLoaded && !loadError && (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={value ? focusZoom : zoom}
					onClick={onMapMouseEvent}
					options={mapOptions}
				>
					<MarkerFollower
						value={value}
						initialCenter={initialCenter}
						onDragMarkerEnd={onMapMouseEvent}
						zoom={zoom}
						focusZoom={focusZoom}
						shouldPanRef={shouldPanRef}
					/>
				</GoogleMap>
			)}
		</>
	);
};

export default memo(Map);
