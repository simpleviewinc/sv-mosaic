import * as React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { boolean, withKnobs, object, text } from '@storybook/addon-knobs';

// Components
import MapCoordinates from './MapCoordinates';
import { IAddress } from '@root/forms/Address/AddressTypes';
import Form from '../Form/Form';
import { FieldDef } from '@root/components/Field';
import { useForm } from '../Form/formUtils';
import { MapCoordinatesDef } from '.';

export default {
	title: 'Forms|MapCoordinates',
	decorators: [withKnobs],
};

const mapPosition = {
	lat: -3.745,
	lng: -40.523,
};

const address: IAddress = {
	address: '8950 N Oracle Rd',
	city: 'Oro Valley',
	country: {
		title: 'United States',
		value: {},
	},
	postalCode: '85704',
	state: {
		title: 'AZ',
		value: {},
	},
	types: ['physical'],
};

export const Default = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const addressKnob = object('Address', address);
	const withAddress = boolean('With address', false);

	return (
		<MapCoordinates
			fieldDef={{
				label: '',
				inputSettings: {
					apiKey: 'AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac',
					address: withAddress && addressKnob,
					mapPosition,
				},
				disabled,
			}}
		/>

	);
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);

	const fields = useMemo(
		() =>
			[
				{
					name: "map",
					label: "Map Coordinates Example",
					type: "mapCoordinates",
					required,
					disabled,
					inputSettings: {
						apiKey: 'AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac'
					},
					// validators: [requiredValidator]
				},
			] as FieldDef<MapCoordinatesDef>[],
		[required, disabled]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert('Cancelling form, going back to previous site');
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};