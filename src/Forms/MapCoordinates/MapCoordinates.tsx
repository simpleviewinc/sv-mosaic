import * as React from 'react';
import {
  ChangeEvent,
  memo,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from 'react';
import { Libraries, MapCoordinatesProps } from './MapCoordinatesTypes';

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
  MapImage,
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

const MapCoordinates = (props: MapCoordinatesProps): ReactElement => {
  const { address, apiKey, disabled, mapPosition } = props;

  // State variables
  const [autocoordinatesChecked, setAutocoordinatesChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [latLngFields, setlatLngFields] = useState({ lat: '', lng: '' });
  const [coordinates, setCoordinates] = useState(mapPosition);
  const [hasSavedCoordinates, setHasSavedCoordinates] = useState(false);
  const mapContainerRef = useRef(null);

  const onMapClick = useCallback((event) => {
    const latLng = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setCoordinates(latLng);
    setlatLngFields(latLng);
  }, []);

  /**
   * Opens the modal that displays the map.
   */
  const handleAddCoordinates = () => {
    setIsModalOpen(true);
  };

  /**
   * 
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
   * Closes the modal and resets the values for
   * form field.
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAutocoordinatesChecked(e.target.checked);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  if (loadError) return <span>{'Error loading maps'}</span>;
  if (!isLoaded) return <span>{'Loading Maps'}</span>;

  return (
    <>
      {hasSavedCoordinates ? (
        <>
          <SwitchContainer>
            <ToggleSwitch
              label='Use same as address'
              onChange={handleChange}
              checked={autocoordinatesChecked}
            />
          </SwitchContainer>
          <CoordinatesCard>
            <MapImageColumn>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={coordinates}
                zoom={12}
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
            <ButtonsWrapper>
              <Button buttonType='blueText' onClick={handleAddCoordinates}>
                Edit
              </Button>
              <Button buttonType='redText' onClick={removeResetLocation}>
                Remove
              </Button>
            </ButtonsWrapper>
          </CoordinatesCard>
        </>
      ) : (
        <>
          <Button
            disabled={disabled}
            buttonType='secondary'
            onClick={handleAddCoordinates}
          >
            ADD COORDINATES
          </Button>
        </>
      )}

      <Modal
        dialogTitle='Map Coordinates'
        form='addcoordinates_form'
        open={isModalOpen}
        onClose={handleClose}
        primaryBtnLabel='Save Coordinates'
        primaryAction={handleSaveCoordinates}
        secondaryAction={handleClose}
        secondaryBtnLabel='Cancel'
      >
        <Map
          apiKey={apiKey}
          mapPosition={coordinates}
          onClick={onMapClick}
        />
        <StyledSpan>
          Click on the map to update the lattitude and longitude coordinates
        </StyledSpan>
        <FlexRow>
          <TextField
            //disabled
            label='Latitude'
            name='lat'
            size={Sizes.sm}
            onChange={handleTextFieldsChange}
            //required
            value={latLngFields.lat}
            type='number'
          />
          <TextField
            //disabled
            label='Longitude'
            name='lng'
            size={Sizes.sm}
            onChange={handleTextFieldsChange}
            //required
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
