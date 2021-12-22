//import * as React from 'react';
import { cleanup } from '@testing-library/react';

// Components
import {
	getAddressStringFromAddressObject,
} from './MapCoordinates';

afterEach(cleanup);

const addressObj = {
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

describe('MapCoordinates getAddressStringFromAddressObject helper function', () => {
	it('it convert an address object into a string', () => {
		const addressString = '8950 N Oracle Rd 85704 Oro Valley AZ United States';

		expect(getAddressStringFromAddressObject(addressObj)).toEqual(
			addressString
		);
	});
});
