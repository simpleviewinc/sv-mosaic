import * as React from 'react';
import { ReactElement, useMemo } from 'react';
import { MapCoordinatesModalProps } from '..';
import { FieldDef } from '@root/components/Field/FieldTypes';

// Components
import Button from '@root/forms/Button';
import Modal from '@root/components/Modal';
import Map from '@root/forms/MapCoordinates/Map';
import { StyledSpan } from '../MapCoordinates.styled';

// Utils
import { defaultMapPosition } from '../MapCoordinatesUtils';

// Layout of the form elements.
const sections = [
	{
		fields: [
			[['placesList']],
			[['lat'], ['lng'], ['resetButton']]
		]
	}
];

const MapCoordinatesModal = (props: MapCoordinatesModalProps): ReactElement => {
	const {
		fieldDef,
		handleClose,
		handleCoordinates,
		handleSaveCoordinates,
		isModalOpen,
		modalReducer,
		onMapClick,
		removeResetLocation
	} = props;

	const renderMap = (props) => (
		<>
			<Map
				address={fieldDef?.inputSettings?.address}
				handleCoordinates={handleCoordinates}
				mapPosition={
					props.value
						? props.value
						: fieldDef?.inputSettings?.mapPosition
							? fieldDef?.inputSettings?.mapPosition
							: defaultMapPosition
				}
				onClick={onMapClick}
			/>
			<StyledSpan>
				Click on the map to update the lattitude and longitude coordinates
			</StyledSpan>
		</>
	);

	const renderResetButton = (props): ReactElement => {
		return props.value ? (
			<Button
				buttonType='blueText'
				onClick={removeResetLocation}
				style={{ margin: 'auto 0px 35px 0px' }}
			>
				Reset
			</Button>
		) : (
			<></>
		);
	};

	const fields = useMemo(
		() =>
			[
				{
					name: 'placesList',
					type: renderMap,
				},
				{
					name: 'lat',
					label: 'Latitude',
					type: 'text',
					inputSettings: {
						type: 'number',
					},
				},
				{
					name: 'lng',
					label: 'Longitude',
					type: 'text',
					inputSettings: {
						type: 'number',
					},
				},
				{
					name: 'resetButton',
					label: 'Reset',
					type: renderResetButton,
				},
			] as FieldDef[],
		[]
	);

	useMemo(() => {
		modalReducer?.registerFields(fields);
	}, [fields, modalReducer?.registerFields]);

	return (
		<Modal
			title='Map Coordinates'
			state={modalReducer?.state}
			dispatch={modalReducer?.dispatch}
			sections={sections}
			fields={fields}
			open={isModalOpen}
			onCancel={handleClose}
			onSubmit={handleSaveCoordinates}
			submitButtonAttrs={{
				children: 'Save Coordinates',
				disabled: !modalReducer.state.data.lat || !modalReducer.state.data.lng,
			}}
			cancelButtonAttrs={{ children: 'Cancel' }}
		/>
	);
};

export default MapCoordinatesModal;
