import * as React from 'react';
import {
	ChangeEvent,
	memo,
	ReactElement,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';
import {
	Libraries,
	MapCoordinatesDef,
	MapPosition,
} from './MapCoordinatesTypes';
import { IAddress } from '@root/forms/Address/AddressTypes';

// External libraries
import { isEmpty } from 'lodash';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// Components
import Button from '@root/forms/Button';
import Map from '@root/forms/MapCoordinates/Map';
import Modal from '@root/components/Modal';
import ToggleSwitch from '@root/components/ToggleSwitch';

// Styles
import {
	ButtonsWrapper,
	Column,
	CoordinatesCard,
	CoordinatesValues,
	LatitudeValue,
	LatLngLabel,
	MapImageColumn,
	StyledSpan,
	SwitchContainer,
} from './MapCoordinates.styled';
import themes from '@root/theme';
import { actions, useForm } from '../Form/formUtils';
import { FieldDef, MosaicFieldProps } from '@root/components/Field';

/**
 * Options to disable interactive actions. For more details take a look at the options interface:
 * https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.clickableIcons
 */
const mapOptions = {
	clickableIcons: false,
	disableDefaultUI: true,
	gestureHandling: 'none',
	keyboardShortcuts: false,
	zoomControl: false,
};

const containerStyle = {
	border: `2px solid ${themes.colors.gray200}`,
	height: '153px',
	width: '232px',
};

const libraries: Libraries = ['places'];

/**
 *	Helper function to get a string address from an Address object
 */
export const getAddressStringFromAddressObject = (addressObj: IAddress): string => {
	const { address1, city, country, postalCode, state } = addressObj;

	return `${address1} ${postalCode} ${city} ${state.title} ${country.title}`;
};

const MapCoordinates = (props: MosaicFieldProps<MapCoordinatesDef>): ReactElement => {
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
				value: value.lat
			})
		);

		modalReducer.dispatch(
			actions.setFieldValue({
				name: 'lng',
				value: value.lng
			})
		);
	};

	/**
   * Callback for the 'SAVE COORDINATES' button.
   */
	const handleSaveCoordinates = () => {
		setIsModalOpen(false);
		onChange && onChange({
			...value,
			lat: modalReducer.state.data.lat,
			lng: modalReducer.state.data.lng,
		});
	};

	useMemo(() => {
		modalReducer?.registerOnSubmit(handleSaveCoordinates);
	}, [handleSaveCoordinates, modalReducer?.registerOnSubmit]);

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
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked;
		setAutocoordinatesChecked(checked);
	};

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

			modalReducer.dispatch(
				actions.setFieldValue({
					name: 'lat',
					value: latLng.lat,
				})
			);

			modalReducer.dispatch(
				actions.setFieldValue({
					name: 'lng',
					value: latLng.lng,
				})
			);
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

	const renderMap = (props) => {
		return (
			<>
				<Map
					address={fieldDef?.inputSettings?.address}
					handleCoordinates={handleCoordinates}
					mapPosition={props.value ? props.value : fieldDef?.inputSettings?.mapPosition ? fieldDef?.inputSettings?.mapPosition : { lat: -3.745, lng: -40.523 }}
					// mapPosition={coordinates}
					onClick={onMapClick}
				/>
				<StyledSpan>
					Click on the map to update the lattitude and longitude coordinates
				</StyledSpan>
			</>
		);
	};

	const renderResetButton = (props): ReactElement => {
		return props.value ?
			<Button
				buttonType='blueText'
				onClick={removeResetLocation}
				style={{ margin: 'auto 0px 35px 0px' }}
			>
				Reset
			</Button>
			:
			<></>
	}

	const fields = useMemo(
		() => (
			[
				{
					name: "placesList",
					type: renderMap,
				},
				{
					name: 'lat',
					label: 'Latitude',
					type: 'text',
					inputSettings: {
						type: 'number',
					}
				},
				{
					name: 'lng',
					label: 'Longitude',
					type: 'text',
					inputSettings: {
						type: 'number',
					}
				},
				{
					name: 'resetButton',
					label: 'Reset',
					type: renderResetButton
				}
			] as FieldDef[]
		), []
	);

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

	const sections = useMemo(() => [
		{
			fields: [
				[['placesList']],
				[['lat'], ['lng'], ['resetButton']]
			]
		}
	], []);

	useMemo(() => {
		modalReducer?.registerFields(fields);
	}, [fields, modalReducer?.registerFields]);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: fieldDef?.inputSettings?.apiKey,
		libraries,
	});

	if (loadError) return <span>{'Error loading maps'}</span>;
	if (!isLoaded) return <span>{'Loading Maps'}</span>;

	return (
		<>
			{value || !isEmpty(fieldDef?.inputSettings?.address) ? (
				<div>
					{!isEmpty(fieldDef?.inputSettings?.address) && (
						<SwitchContainer>
							<ToggleSwitch
								label='Use same as address'
								labelPlacement='start'
								onChange={handleChange}
								checked={autocoordinatesChecked}
							/>
						</SwitchContainer>
					)}
					<CoordinatesCard hasAddress={!isEmpty(fieldDef?.inputSettings?.address)}>
						<MapImageColumn>
							<GoogleMap
								mapContainerStyle={containerStyle}
								center={{ lat: value.lat, lng: value.lng }}
								zoom={10}
								options={mapOptions}
							>
								<Marker position={{ lat: value.lat, lng: value.lng }} />
							</GoogleMap>
						</MapImageColumn>
						<Column>
							<LatLngLabel>Latitude</LatLngLabel>
							<LatitudeValue>{value.lat}</LatitudeValue>
							<LatLngLabel>Longitude</LatLngLabel>
							<CoordinatesValues>{value.lng}</CoordinatesValues>
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

			<Modal
				title={'Map Coordinates'}
				state={modalReducer?.state}
				dispatch={modalReducer?.dispatch}
				sections={sections}
				fields={fields}
				open={isModalOpen}
				onCancel={handleClose}
				onSubmit={handleSaveCoordinates}
				submitButtonAttrs={{ children: 'Save Coordinates', disabled: !modalReducer.state.data.lat || !modalReducer.state.data.lng }}
				cancelButtonAttrs={{ children: 'Cancel' }}
			/>
		</>
	);
};

export default memo(MapCoordinates);
