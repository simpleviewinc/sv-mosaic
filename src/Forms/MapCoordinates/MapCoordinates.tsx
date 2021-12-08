import * as React from 'react';
import { memo, ReactElement, useCallback, useRef, useState } from 'react';
import { MapCoordinatesProps } from './MapCoordinatesTypes';

// Components
import Button from '@root/forms/Button';
import Modal from '@root/components/Modal';
import TextField from '@root/forms/FormFieldText';
import Map from '@root/forms/MapCoordinates/Map';

// Styles
import { FlexRow, StyledSpan } from './MapCoordinates.styled';
import { Sizes } from '@root/theme/sizes';

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapCoordinates = (props: MapCoordinatesProps): ReactElement => {
  const { disabled } = props;

  // State variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [latLngFields, setlatLngFields] = useState({lat: '', lng: ''});
	const	[mapPosition, setMapPosition] = useState(center);
  const [coordinates, setCoordinates] = useState(center);

  const onMapClick = useCallback((event) => {
		const latLng = {
			lat: event.latLng.lat(),
			lng: event.latLng.lng(),
		}

    setCoordinates(latLng);
		setlatLngFields(latLng);
		setMapPosition(latLng)
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
	
		/* setMapPosition({
      ...latLngFields,
      [e.target.name]: Number(e.target.value),
    }); */
  };

  /**
   * Clear values for the entered location.
   */
  const resetLocation = () => {
    alert('Reset location called');
  };

  return (
    <>
      <Button
        disabled={disabled}
        buttonType='secondary'
        onClick={handleAddCoordinates}
      >
        ADD COORDINATES
      </Button>
      <Modal
        dialogTitle='Map Coordinates'
        form='addcoordinates_form'
        open={isModalOpen}
        onClose={handleClose}
        primaryBtnLabel='Save Coordinates'
        secondaryAction={handleClose}
        secondaryBtnLabel='Cancel'
        //submitDisabled={submitDisabled}
      >
        <Map
          coordinates={coordinates}
					mapPosition={mapPosition}
          onClick={onMapClick}
          onPlaceSelected={onPlaceSelected}
        />
        <StyledSpan>
          Click on the map to update the lattitude and longitude coordinates
        </StyledSpan>
        <FlexRow>
          <TextField
            label='Latitude'
            name='lat'
            size={Sizes.sm}
            onChange={handleTextFieldsChange}
            //required
            value={latLngFields.lat}
            type='number'
						//disabled
          />
          <TextField
            label='Longitude'
            name='lng'
            size={Sizes.sm}
            onChange={handleTextFieldsChange}
            //required
            value={latLngFields.lng}
            type='number'
						//disabled
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
