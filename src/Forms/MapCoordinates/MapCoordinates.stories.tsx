import * as React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { boolean, withKnobs, object, text } from '@storybook/addon-knobs';

// Components
import MapCoordinates from './MapCoordinates';
import { IAddress } from '@root/forms/Address/AddressTypes';
import Form from '../Form/Form';
import { FieldDefProps } from '@root/components/Field';
import { useForm } from '../Form/formUtils';

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
	const [isKey, setIsKey] = useState(false)
	const [value, setValue] = useState('');

	const disabled = boolean('Disabled', false);
	const addressKnob = object('Address', address);
	const withAddress = boolean('With address', false);

	const onClick = () => {
		setIsKey(true)
	};

	const inputChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div style={{ marginBottom: '20px' }}>
				<p>You must enter the Google Maps API key to see the component</p>
				<input onChange={inputChange} style={{ width: '300px' }} value={value} type="text" placeholder='Google Maps API Key' />
				<button onClick={onClick}>SET KEY</button>
			</div>
			{isKey && value.length > 0 && <MapCoordinates
				apiKey={value}
				address={withAddress && addressKnob}
				disabled={disabled}
				mapPosition={mapPosition}
			/>}
		</>
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
						disabled,
					},
					// validators: [requiredValidator]
				},
			] as unknown as FieldDefProps[],
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