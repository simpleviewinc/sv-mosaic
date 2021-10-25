import { render, cleanup } from '@testing-library/react';
import * as React from 'react';

// Components
import AddressCard from './AddressCard';

afterEach(cleanup);

const address = {
	address: 'Test 1',
	city: 'Guadalajara',
	country: {title: 'Mexico', value: {}},
	postalCode: '1',
	state: {title: 'Jalisco', value: {}},
	type: 'physical',
	id: 1
}

describe('AddressCard component', () => {
	it('should display address card content', () => {
		const { getByText } = render(<AddressCard address={address} />);

		const addressType = getByText('Billing Address');
		const editButton = getByText('Edit');
		const removeButton = getByText('Remove');

		expect(addressType).toBeTruthy();
		expect(editButton).toBeTruthy();
		expect(removeButton).toBeTruthy();
	});
});
