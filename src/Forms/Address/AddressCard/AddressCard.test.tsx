import { render, cleanup } from '@testing-library/react';
import * as React from 'react';

// Components
import AddressCard from './AddressCard';

afterEach(cleanup);

const address = {
	city: 'Fairfield',
	country: 'United States',
	street: '694 A St',
	postalCode: '94535 - 2324',
	state: 'CA',
	type: 'Billing',
};

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
