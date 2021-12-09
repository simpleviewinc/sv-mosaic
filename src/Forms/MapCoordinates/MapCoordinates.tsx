import * as React from 'react';
import { memo, ReactElement, useCallback, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { MapCoordinatesProps } from './MapCoordinatesTypes';

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
} from './MapCoordinates.styled';
import { Sizes } from '@root/theme/sizes';

const MapCoordinates = (props: MapCoordinatesProps): ReactElement => {
  const { apiKey, disabled, mapPosition } = props;

  // State variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [latLngFields, setlatLngFields] = useState({ lat: '', lng: '' });
  //const [mapPosition, setMapPosition] = useState(center);
  const [coordinates, setCoordinates] = useState(mapPosition);

  const mapContainerRef = useRef<HTMLDivElement>(null);

  const onMapClick = useCallback((event) => {
    const latLng = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setCoordinates(latLng);
    setlatLngFields(latLng);
    //setMapPosition(latLng);
  }, []);

  /**
   * When the user types an address in the input
   * @param place
   */
  const onPlaceSelected = (place) => {
    console.log('plc', place);
    const latValue = place.geometry.location.lat();
    const lngValue = place.geometry.location.lng();

    setCoordinates({
      lat: latValue,
      lng: lngValue,
    });
  };

  /**
   * Opens the modal that displays the map.
   */
  const handleAddCoordinates = () => {
    setIsModalOpen(true);
  };

  const handleSaveCoordinates = useCallback(() => {
    /* if (mapContainerRef.current === null) {
      return
    }

    toPng(mapContainerRef.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      }) */

    setIsModalOpen(false);
  }, []);

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
  const resetLocation = () => {
    setlatLngFields({
      lat: '',
      lng: '',
    });
  };

  const removeCoordinatesCard = () => {};

  /* console.log(
    'LatLng: ',
    latLngFields,
    latLngFields.lat.length > 0 && latLngFields.lng.length > 0
  ); */

  return (
    <>
      {latLngFields.lat.length > 0 && latLngFields.lng.length > 0 ? (
        <CoordinatesCard>
          <MapImageColumn>
            <MapImage>MAP</MapImage>
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
            <Button buttonType='redText' onClick={resetLocation}>
              Remove
            </Button>
          </ButtonsWrapper>
        </CoordinatesCard>
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
        form='addcoordinates_form'
        open={isModalOpen}
        onClose={handleClose}
        primaryBtnLabel='Save Coordinates'
        primaryAction={handleSaveCoordinates}
        secondaryAction={handleClose}
        secondaryBtnLabel='Cancel'
        //submitDisabled={submitDisabled}
      >
        <Map
          apiKey={apiKey}
          mapPosition={coordinates}
          onClick={onMapClick}
          onPlaceSelected={onPlaceSelected}
          mapContainerRef={mapContainerRef}
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
          <Button buttonType='blueText' onClick={resetLocation}>
            Reset
          </Button>
        </FlexRow>
      </Modal>
    </>
  );
};

export default memo(MapCoordinates);
