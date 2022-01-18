import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

// Components
import Address from './Address';

afterEach(cleanup);

const addNewAddress = () => {
	const addAddressButton = screen.getByText('ADD ADDRESS');
	fireEvent.click(addAddressButton);
	const address = screen.getByLabelText('Address');
	const city = screen.getByLabelText('City');
	const postalCode = screen.getByLabelText('Postal Code');
	const dropdowns = screen.getAllByTestId('autocomplete-test-id');
	const countryDropdown = dropdowns[0].querySelector('.MuiAutocomplete-input');
	const addressTypes = screen.getAllByRole('checkbox') as HTMLInputElement[];
	const saveButton = screen.getByText('Save');

	fireEvent.change(address, { target: { value: 'Address test 1' } });
	fireEvent.change(city, { target: { value: 'Guadalajara' } });
	fireEvent.change(postalCode, { target: { value: '123' } });
	fireEvent.change(countryDropdown, { target: { value: 'Mexico' } });
	fireEvent.click(addressTypes[0]);
	fireEvent.click(saveButton);
};

describe('Address component', () => {
	it('should add a new address card', () => {
		const { queryAllByTestId } = render(<Address fieldDef={{ label: 'Address label' }} />);

		expect(queryAllByTestId('address-card-test')).toStrictEqual([]);
		addNewAddress();
		expect(queryAllByTestId('address-card-test').length).toBe(1);
	});

	it('should delete an address card', () => {
		const { queryAllByTestId } = render(<Address fieldDef={{ label: 'Address label' }} />);

		addNewAddress();
		expect(queryAllByTestId('address-card-test').length).toBe(1);

		const removeButton = screen.getByText('Remove');
		fireEvent.click(removeButton);

		expect(queryAllByTestId('address-card-test')).toStrictEqual([]);
	});

	it('should edit an address card', () => {
		const { getByText, getByLabelText, getAllByTestId, getAllByRole } = render(<Address fieldDef={{ label: 'Address label' }} />);

		addNewAddress();
		const editButton = screen.getByText('Edit');
		fireEvent.click(editButton);

		const address = getByLabelText('Address');
		const city = getByLabelText('City');
		const postalCode = getByLabelText('Postal Code');
		const dropdowns = getAllByTestId('autocomplete-test-id');
		const countryDropdown = dropdowns[0].querySelector('.MuiAutocomplete-input');
		const addressTypes = getAllByRole('checkbox') as HTMLInputElement[];
		const saveButton = getByText('Save');

		fireEvent.change(address, { target: { value: 'Address edited' } });
		fireEvent.change(city, { target: { value: 'City edited' } });
		fireEvent.change(postalCode, { target: { value: '000' } });
		fireEvent.change(countryDropdown, { target: { value: 'Argentina' } });
		fireEvent.click(addressTypes[1]);
		fireEvent.click(saveButton);

		expect(getByText('Address edited')).toBeTruthy();
		expect(getByText('Physical, Billing Address')).toBeTruthy();
		expect(getByText('City edited, 000')).toBeTruthy();
		expect(getByText('Argentina')).toBeTruthy();
	});
});
