import * as React from 'react';
import {
	ChangeEvent,
	memo,
	ReactElement,
	useCallback,
	useEffect,
	useState,
} from 'react';
import {
	Libraries,
	MapCoordinatesProps,
	MapPosition,
} from './MapCoordinatesTypes';
import { Address } from '@root/forms/Address/AddressTypes';

// External libraries
import { isEmpty } from 'lodash';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// Components
import Button from '@root/forms/Button';
import Modal from '@root/components/Modal';
import TextField from '@root/forms/FormFieldText';
import Map from '@root/forms/MapCoordinates/Map';

// Styles
import {
	ButtonsWrapper,
	Column,
	CoordinatesCard,
	CoordinatesValues,
	FlexRow,
	LatitudeValue,
	LatLngLabel,
	MapImageColumn,
	StyledSpan,
	SwitchContainer,
} from './MapCoordinates.styled';
import { Sizes } from '@root/theme/sizes';
import ToggleSwitch from '@root/components/ToggleSwitch';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

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
	width: '232px',
	height: '153px',
};

const libraries: Libraries = ['places'];

/**
 *	Helper function to get a string address from an Address object
 */
export const getAddressStringFromAddressObject = (addressObj: Address): string => {
	const { address, city, country, postalCode, state } = addressObj;

	return `${address} ${postalCode} ${city} ${state.title} ${country.title}`;
};

const MapCoordinates = (props: MapCoordinatesProps): ReactElement => {
	const { address, apiKey, disabled, mapPosition } = props;

	// State variables
	const [autocoordinatesChecked, setAutocoordinatesChecked] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [latLngFields, setlatLngFields] = useState({ lat: '', lng: '' });
	const [coordinates, setCoordinates] = useState<MapPosition>(mapPosition);
	const [hasSavedCoordinates, setHasSavedCoordinates] = useState(false);

	/**
   * When the map is clicked the lat and lng fields and
   * the coordinates that center the map are updated.
   */
	const onMapClick = useCallback((event) => {
		const lat = event.latLng.lat();
		const lng = event.latLng.lng();

		setCoordinates({ lat, lng });
		setlatLngFields({ lat: lat.toString(), lng: lng.toString() });
	}, []);

	/**
   * Opens the modal that displays the map.
   */
	const handleAddCoordinates = () => {
		setIsModalOpen(true);
	};

	/**
   * Callback for the 'SAVE COORDINATES' button.
   */
	const handleSaveCoordinates = () => {
		setHasSavedCoordinates(true);
		setIsModalOpen(false);
		setCoordinates({
			lat: Number(latLngFields.lat),
			lng: Number(latLngFields.lng),
		});
	};

	/**
   * Closes the modal.
   */
	const handleClose = () => {
		setIsModalOpen(false);
	};

	/**
   * Handle value change for latitude and longitude
   * inputs.
   * @param e
   */
	const handleTextFieldsChange = (e) => {
		setlatLngFields({
			...latLngFields,
			[e.target.name]: e.target.value,
		});

		setCoordinates({
			...mapPosition,
			[e.target.name]: Number(e.target.value),
		});
	};

	/**
   * Clear values for the entered location.
   */
	const removeResetLocation = () => {
		setHasSavedCoordinates(false);
		setlatLngFields({
			lat: '',
			lng: '',
		});
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
			const addressString = getAddressStringFromAddressObject(address);
			const results = await geocodeByAddress(addressString);
			const latLng = await getLatLng(results[0]);

			setCoordinates(latLng);
			setlatLngFields({
				lat: latLng.lat.toString(),
				lng: latLng.lng.toString(),
			});
		} catch (error) {
			console.log(error);
		}
	}, [address]);

	/**
   *	When the component is mounted and the auto coordinates flag is true
   *  setCoordinatesFromAddress is executed.
   */
	useEffect(() => {
		if (autocoordinatesChecked) {
			setCoordinatesFromAddress();
		}
	}, [autocoordinatesChecked, address]);

	/**
   * Callback function that is executed by the LocationSearchInput
	 * when the user selects one of the suggested options by the autocomplete
	 * google component.
   */
	const handleCoordinates = (coordinates: MapPosition) => {
		setCoordinates(coordinates);
		setlatLngFields({
			lat: coordinates.lat.toString(),
			lng: coordinates.lng.toString(),
		});
	};

	let submitDisabled = true;

	if (latLngFields.lat.length > 0 && latLngFields.lng.length > 0) {
		submitDisabled = false;
	}

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: apiKey,
		libraries,
	});

	if (loadError) return <span>{'Error loading maps'}</span>;
	if (!isLoaded) return <span>{'Loading Maps'}</span>;

	return (
		<>
			{hasSavedCoordinates || !isEmpty(address) ? (
				<div>
					{!isEmpty(address) && (
						<SwitchContainer>
							<ToggleSwitch
								label='Use same as address'
								onChange={handleChange}
								checked={autocoordinatesChecked}
							/>
						</SwitchContainer>
					)}
					<CoordinatesCard>
						<MapImageColumn>
							<GoogleMap
								mapContainerStyle={containerStyle}
								center={coordinates}
								zoom={10}
								options={mapOptions}
							>
								<Marker position={coordinates} />
							</GoogleMap>
						</MapImageColumn>
						<Column>
							<LatLngLabel>Latitude</LatLngLabel>
							<LatitudeValue>{latLngFields.lat}</LatitudeValue>
							<LatLngLabel>Longitude</LatLngLabel>
							<CoordinatesValues>{latLngFields.lng}</CoordinatesValues>
						</Column>
						<ButtonsWrapper hasAddress={isEmpty(address)}>
							{!autocoordinatesChecked && (
								<Button buttonType='blueText' onClick={handleAddCoordinates}>
                  Edit
								</Button>
							)}
							{!autocoordinatesChecked && isEmpty(address) && (
								<Button buttonType='redText' onClick={removeResetLocation}>
                  Remove
								</Button>
							)}
						</ButtonsWrapper>
					</CoordinatesCard>
				</div>
			) : (
				<Button
					disabled={disabled}
					buttonType='secondary'
					onClick={handleAddCoordinates}
				>
          ADD COORDINATES
				</Button>
			)}

			<Modal
				dialogTitle='Map Coordinates'
				open={isModalOpen}
				onClose={handleClose}
				primaryBtnLabel='Save Coordinates'
				primaryAction={handleSaveCoordinates}
				secondaryAction={handleClose}
				secondaryBtnLabel='Cancel'
				submitDisabled={submitDisabled}
			>
				<Map
					address={address}
					handleCoordinates={handleCoordinates}
					mapPosition={coordinates}
					onClick={onMapClick}
				/>
				<StyledSpan>
          Click on the map to update the lattitude and longitude coordinates
				</StyledSpan>
				<FlexRow>
					<TextField
						htmlFor='lat'
						id='lat'
						label='Latitude'
						name='lat'
						size={Sizes.sm}
						onChange={handleTextFieldsChange}
						value={latLngFields.lat}
						type='number'
					/>
					<TextField
						htmlFor='lng'
						id='lng'
						label='Longitude'
						name='lng'
						size={Sizes.sm}
						onChange={handleTextFieldsChange}
						value={latLngFields.lng}
						type='number'
					/>
					<Button buttonType='blueText' onClick={removeResetLocation}>
            Reset
					</Button>
				</FlexRow>
			</Modal>
		</>
	);
};

export default memo(MapCoordinates);
