import * as React from 'react';
import {
	memo,
	ReactElement,
	useCallback,
	useMemo,
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
import Button from '@root/forms/Button';
import ToggleSwitch from '@root/components/ToggleSwitch';
import MapCoordinatesModal from './MapCoordinatesModal';

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
import { actions, useForm } from '../Form/formUtils';
import {
	defaultMapPosition,
	getAddressStringFromAddressObject,
	libraries,
	mapOptions,
} from './MapCoordinatesUtils'; 

const MapCoordinates = (props: MosaicFieldProps<MapCoordinatesDef, MapPosition>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value,
	} = props;

	const modalReducer = useForm();

	// State variables
	const [autocoordinatesChecked, setAutocoordinatesChecked] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	/**
	 * When the map is clicked the lat and lng fields and
	 * the coordinates that center the map are updated.
	 */
	const onMapClick = useCallback((event) => {
		const lat = event.latLng.lat();
		const lng = event.latLng.lng();

		modalReducer.dispatch(
			actions.setFieldValue({
				name: 'placesList',
				value: { lat: Number(lat), lng: Number(lng) },
			})
		);

		modalReducer.dispatch(
			actions.setFieldValue({
				name: 'lat',
				value: lat,
			})
		);

		modalReducer.dispatch(
			actions.setFieldValue({
				name: 'lng',
				value: lng,
			})
		);
	}, []);

	/**
	 * Opens the modal that displays the map.
	 */
	const handleAddCoordinates = () => {
		setIsModalOpen(true);

		modalReducer.dispatch(
			actions.setFieldValue({
				name: 'lat',
				value: value?.lat
			})
		);

		modalReducer.dispatch(
			actions.setFieldValue({
				name: 'lng',
				value: value?.lng
			})
		);
	};

	/**
	 * Callback for the 'SAVE COORDINATES' button.
	 */
	const handleSaveCoordinates = () => {
		onChange && onChange({
			...value,
			lat: modalReducer.state.data.lat,
			lng: modalReducer.state.data.lng,
		});

		setIsModalOpen(false);
	};

	/**
	 * Closes the modal.
	 */
	const handleClose = () => {
		setIsModalOpen(false);
		modalReducer.dispatch(
			actions.setFieldValue({
				name: 'lat',
				value: undefined,
			})
		);

		modalReducer.dispatch(
			actions.setFieldValue({
				name: 'lng',
				value: undefined,
			})
		);
	};

	/**
	 * Clear values for the entered location.
	 */
	const removeResetLocation = () => {
		onChange && onChange(undefined);

		modalReducer.dispatch(
			actions.setFieldValue({ name: 'lat', value: undefined })
		);

		modalReducer.dispatch(
			actions.setFieldValue({ name: 'lng', value: undefined })
		);
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

	/**
	 * Callback function that is executed by the LocationSearchInput
	 * when the user selects one of the suggested options by the autocomplete
	 * google component.
	 */
	const handleCoordinates = (coordinates: MapPosition) => {
		modalReducer.dispatch(
			actions.setFieldValue({
				name: 'placesList',
				value: coordinates,
			})
		);

		modalReducer.dispatch(
			actions.setFieldValue({
				name: 'lat',
				value: coordinates.lat,
			})
		);

		modalReducer.dispatch(
			actions.setFieldValue({
				name: 'lng',
				value: coordinates.lng,
			})
		);
	};

	useMemo(() => {
		modalReducer?.registerOnSubmit(handleSaveCoordinates);
	}, [handleSaveCoordinates, modalReducer?.registerOnSubmit]);

	useEffect(() => {
		const { lat, lng } = modalReducer.state.data;

		if (lat?.toString().length > 0 && lng?.toString().length > 0) {
			modalReducer.dispatch(
				actions.setFieldValue({ name: 'resetButton', value: true })
			);

			modalReducer.dispatch(
				actions.setFieldValue({
					name: 'placesList',
					value: { lat: Number(lat), lng: Number(lng) }
				})
			);
		} else {
			modalReducer.dispatch(
				actions.setFieldValue({ name: 'resetButton', value: undefined })
			);
		}

	}, [modalReducer.state.data.lat, modalReducer.state.data.lng]);

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
								label='Use same as address'
								labelPlacement='start'
								onChange={handleToggleSwitchChange}
								checked={autocoordinatesChecked}
							/>
						</SwitchContainer>
					)}
					<CoordinatesCard hasAddress={!isEmpty(fieldDef?.inputSettings?.address)}>
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
						<ButtonsWrapper hasAddress={isEmpty(fieldDef?.inputSettings?.address)}>
							{!autocoordinatesChecked && (
								<Button disabled={fieldDef?.disabled} buttonType='blueText' onClick={handleAddCoordinates}>
									Edit
								</Button>
							)}
							{!autocoordinatesChecked && isEmpty(fieldDef?.inputSettings?.address) && (
								<Button disabled={fieldDef?.disabled} buttonType='redText' onClick={removeResetLocation}>
									Remove
								</Button>
							)}
						</ButtonsWrapper>
					</CoordinatesCard>
				</div>
			) : (
				<Button
					disabled={fieldDef?.disabled}
					buttonType='secondary'
					onClick={handleAddCoordinates}
				>
					ADD COORDINATES
				</Button>
			)}

			<MapCoordinatesModal 
				fieldDef={fieldDef}
				handleClose={handleClose}
				handleCoordinates={handleCoordinates}
				handleSaveCoordinates={handleSaveCoordinates}
				isModalOpen={isModalOpen}
				modalReducer={modalReducer}
				onMapClick={onMapClick}
				removeResetLocation={removeResetLocation}
			/>
		</>
	);
};

export default memo(MapCoordinates);
