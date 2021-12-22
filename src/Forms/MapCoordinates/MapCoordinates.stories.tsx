import * as React from 'react';
import { ReactElement, useState } from 'react';
import { boolean, withKnobs, object } from '@storybook/addon-knobs';

// Components
import MapCoordinates from './MapCoordinates';
import { Address } from '@root/forms/Address/AddressTypes';

export default {
	title: 'Forms|MapCoordinates',
	decorators: [withKnobs],
};

const mapPosition = {
	lat: -3.745,
	lng: -40.523,
};

const address: Address = {
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

export const Example = (): ReactElement => {
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
			<div style={{marginBottom: '20px'}}>
				<p>You must enter the Google Maps API key to see the component</p>
				<input onChange={inputChange} style={{width: '300px'}} value={value} type="text" placeholder='Google Maps API Key'/>
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
