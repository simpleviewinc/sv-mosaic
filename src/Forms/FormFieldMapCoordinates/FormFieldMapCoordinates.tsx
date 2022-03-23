import * as React from 'react';
import {
	memo,
	ReactElement,
	useCallback,
	useEffect,
	useState,
} from 'react';
import {
	MapCoordinatesDef,
	MapPosition,
} from './MapCoordinatesTypes';
import { MosaicFieldProps } from '@root/components/Field';

// External libraries
import { isEmpty } from 'lodash';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// Components
import Button from "@root/components/Button";
import ToggleSwitch from '@root/components/ToggleSwitch';
import MapCoordinatesDrawer from './MapCoordinatesDrawer';

// Styles
import {
	ButtonsWrapper,
	Column,
	mapContainerStyle,
	CoordinatesCard,
	CoordinatesValues,
	LatitudeValue,
	LatLngLabel,
	MapImageColumn,
	SwitchContainer,
} from './MapCoordinates.styled';

// Utils
import {
	defaultMapPosition,
	getAddressStringFromAddressObject,
	libraries,
	mapOptions,
} from './MapCoordinatesUtils';
import Drawer from "../../components/Drawer.jsx";

const FormFieldMapCoordinates = (props: MosaicFieldProps<MapCoordinatesDef, MapPosition>): ReactElement => {
	const {
		value,
		onBlur,
		onChange,
		fieldDef,
	} = props;

	// State variables
	const [autocoordinatesChecked, setAutocoordinatesChecked] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [hasUnsavedChanges, setUnsavedChanges] = useState(false);
	const [dialogOpen, setIsDialogOpen] = useState(false);

	/**
	 * Opens the modal that displays the map.
	 */
	const handleAddCoordinates = () => {
		setIsModalOpen(true);
	};

	/**
	 * Closes the modal.
	 */
	const handleClose = async (save = false) => {
		if (typeof save === 'boolean' && save) {
			setUnsavedChanges(false);
			setIsModalOpen(false);
			await onBlur();
		} else if (hasUnsavedChanges)
			setIsDialogOpen(true);
		else {
			setUnsavedChanges(false);
			setIsModalOpen(false);
			await onBlur();
		}
	};

	const handleDialogClose = async (close: boolean) => {
		if (close) {
			await handleClose(true);
		}
		setIsDialogOpen(false);
	}

	/**
	 * Clear values for the entered location.
	 */
	const removeLocation = () => {
		onChange && onChange(undefined);
	};

	/**
	 * Managed the switch state to enable or disable autocoordinates.
	 * @param e
	 */
	const handleToggleSwitchChange = (isChecked) => {
		setAutocoordinatesChecked(isChecked);
	}

	/**
	 * Set map coordinates and lat and lng fields with the values
	 * provided by the address that is passed. Is only executed when
	 * the autocoordinates value is true.
	 */
	const setCoordinatesFromAddress = useCallback(async () => {
		try {
			const addressString = getAddressStringFromAddressObject(fieldDef?.inputSettings?.address);
			const results = await geocodeByAddress(addressString);
			const latLng = await getLatLng(results[0]);

			onChange && onChange({
				lat: latLng.lat,
				lng: latLng.lng,
			});

		} catch (error) {
			console.log(error);
		}
	}, [fieldDef?.inputSettings?.address]);

	/**
	 *	When the component is mounted and the auto coordinates flag is true
	 *  setCoordinatesFromAddress is executed.
	 */
	useEffect(() => {
		if (autocoordinatesChecked) {
			setCoordinatesFromAddress();
		}
	}, [autocoordinatesChecked, fieldDef?.inputSettings?.address]);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: fieldDef?.inputSettings?.apiKey,
		libraries,
	});

	if (loadError) return <span>{'Error loading maps'}</span>;
	if (!isLoaded) return <span>{'Loading Maps'}</span>;

	const mapPosition = {
		lat: value?.lat
			? Number(value.lat)
			: fieldDef?.inputSettings?.mapPosition?.lat
				? fieldDef.inputSettings.mapPosition.lat
				: defaultMapPosition.lat,
		lng: value?.lng
			? Number(value.lng)
			: fieldDef?.inputSettings?.mapPosition?.lng
				? fieldDef.inputSettings.mapPosition.lng
				: defaultMapPosition.lng,
	};

	return (
		<>
			{value || !isEmpty(fieldDef?.inputSettings?.address) ? (
				<div>
					{!isEmpty(fieldDef?.inputSettings?.address) && (
						<SwitchContainer>
							<ToggleSwitch
								disabled={fieldDef?.disabled}
								label="Use same as address"
								labelPlacement="start"
								onChange={handleToggleSwitchChange}
								checked={autocoordinatesChecked}
							/>
						</SwitchContainer>
					)}
					<CoordinatesCard
						hasAddress={!isEmpty(fieldDef?.inputSettings?.address)}
					>
						<MapImageColumn>
							<GoogleMap
								mapContainerStyle={mapContainerStyle}
								center={mapPosition}
								zoom={10}
								options={mapOptions}
							>
								<Marker position={mapPosition} />
							</GoogleMap>
						</MapImageColumn>
						<Column>
							<LatLngLabel>Latitude</LatLngLabel>
							<LatitudeValue>{mapPosition.lat}</LatitudeValue>
							<LatLngLabel>Longitude</LatLngLabel>
							<CoordinatesValues>{mapPosition.lng}</CoordinatesValues>
						</Column>
						<ButtonsWrapper
							hasAddress={isEmpty(fieldDef?.inputSettings?.address)}
						>
							{!autocoordinatesChecked && (
								<Button
									color="teal"
									variant="text"
									label="Edit"
									disabled={fieldDef?.disabled}
									onClick={handleAddCoordinates}
									muiAttrs={{ disableRipple: true }}
								></Button>
							)}
							{!autocoordinatesChecked &&
								isEmpty(fieldDef?.inputSettings?.address) && (
								<Button
									color="red"
									disabled={fieldDef?.disabled}
									variant="text"
									label="Remove"
									onClick={removeLocation}
									muiAttrs={{ disableRipple: true }}
								></Button>
							)}
						</ButtonsWrapper>
					</CoordinatesCard>
				</div>
			) : (
				<Button
					disabled={fieldDef?.disabled}
					onClick={handleAddCoordinates}
					color="gray"
					variant="outlined"
					label="ADD COORDINATES"
					muiAttrs={{ disableRipple: true }}
				></Button>
			)}

			<Drawer open={isModalOpen} onClose={handleClose}>
				<MapCoordinatesDrawer
					value={value}
					fieldDef={fieldDef}
					onChange={onChange}
					handleClose={handleClose}
					handleUnsavedChanges={(e) => setUnsavedChanges(e)}
					dialogOpen={dialogOpen}
					handleDialogClose={handleDialogClose}
				/>
			</Drawer>
		</>
	);
};

export default memo(FormFieldMapCoordinates);
