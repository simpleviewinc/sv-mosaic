import * as React from "react";
import { GoogleMap } from "@react-google-maps/api";
import { memo, ReactElement, useEffect, useState } from "react";
import { MapProps } from "../MapCoordinatesTypes";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { InputAdornment } from "@mui/material";

// Styles
import { MapContainer } from "../MapCoordinates.styled";
import AddressAutocomplete from "@root/forms/FormFieldAddress/AddressAutocomplete/AddressAutocomplete";
import { StyledClearIcon } from "@root/forms/FormFieldAddress/AddressAutocomplete/AddressAutocomplete.styled";
import MarkerFollower from "./MarkerFollower";

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
	const shouldPanRef = React.useRef<boolean>(true);

	const onMapMouseEvent = ({ latLng }: google.maps.MapMouseEvent) => {
		shouldPanRef.current = false;

		const lat = latLng.lat();
		const lng = latLng.lng();

		onCoordinatesChange({ lat, lng });
	}

	useEffect(() => {
		if (value === undefined || (value.lat === undefined && value.lng === undefined)) {
			clearValue();
		}
	}, [value])

	return (
		<MapContainer>
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
			<div>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={initialCenter}
					zoom={value ? focusZoom : zoom}
					onClick={onMapMouseEvent}
					options={mapOptions}
					ref={(ref) => map.current = ref}
				>
					<MarkerFollower
						value={value}
						initialCenter={initialCenter}
						onDragMarkerEnd={onMapMouseEvent}
						focusZoom={focusZoom}
						shouldPanRef={shouldPanRef}
					/>
				</GoogleMap>
			</div>
		</MapContainer>
	);
};

export default memo(Map);
