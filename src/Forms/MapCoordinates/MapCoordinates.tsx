import * as React from 'react';
import { memo, ReactElement, useState } from 'react';
import { MapCoordinatesProps } from './MapCoordinatesTypes';

// Components
import Button from '@root/forms/Button';
import Modal from '@root/components/Modal';
import TextField from '@root/forms/FormFieldText';

// Styles
import { FlexRow, StyledSpan } from './MapCoordinates.styled';
import { Sizes } from '@root/theme/sizes';

const MapCoordinates = (props: MapCoordinatesProps): ReactElement => {
	const { disabled } = props;

	// State variables
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [textFields, setTextFields] = useState({
		latitude: '',
		longitude: '',
	});

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
		setTextFields({
			...textFields,
			[e.target.name]: e.target.value,
		});
	};

	/**
   * Clear values for the entered location.
   */
	const resetLocation = () => {
		alert('Reset location called');
	}

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
				<input type='text' />
				<div>MAP COMPONENT</div>
				<StyledSpan>
          Click on the map to update the attitude and longitude coordinates
				</StyledSpan>
				<FlexRow>
					<TextField
						label='Latitude'
						name='latitude'
						size={Sizes.sm}
						onChange={handleTextFieldsChange}
						//required
						value={textFields.latitude}
						type='number'
					/>
					<TextField
						label='Longitude'
						name='longitude'
						size={Sizes.sm}
						onChange={handleTextFieldsChange}
						//required
						value={textFields.longitude}
						type='number'
					/>
					<Button buttonType='blueText' onClick={resetLocation}>Reset</Button>
				</FlexRow>
			</Modal>
		</>
	);
};

export default memo(MapCoordinates);
