import { render, cleanup } from '@testing-library/react';
import * as React from 'react';

// Components
import AddressCard from './AddressCard';

afterEach(cleanup);

const address = {
	address: 'Test 1',
	city: 'Guadalajara',
	country: {title: 'México', value: {}},
	postalCode: '123',
	state: {title: 'Jalisco', value: {}},
	type: 'physical',
	id: 1
}

describe('AddressCard component', () => {
	it('should display address card content', () => {
		const { getByText } = render(<AddressCard address={address} />);

		const addressElement = getByText('Test 1');
		const addressType = getByText('Physical Address');
		const cityStateAndCP = getByText('Guadalajara, Jalisco 123');
		const country = getByText('México');
		const editButton = getByText('Edit');
		const removeButton = getByText('Remove');

		expect(addressElement).toBeTruthy();
		expect(addressType).toBeTruthy();
		expect(cityStateAndCP).toBeTruthy();
		expect(country).toBeTruthy();
		expect(editButton).toBeTruthy();
		expect(removeButton).toBeTruthy();
	});
});
