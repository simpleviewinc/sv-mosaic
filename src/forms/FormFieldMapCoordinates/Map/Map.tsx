import * as React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { memo, ReactElement, useState } from "react";
import { MapProps } from "../MapCoordinatesTypes";
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
			console.log(error);
		}
	};

	/**
 * Reset the address value that is displayed in the autocomplete component.
 */
	const clearValue = () => {
		setAddressValue("");
	};

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
				>
					{isDragging ||
						(value && (value?.lat !== 0 || value?.lng !== 0) && (
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
