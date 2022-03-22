import { FieldDef } from '@root/components/Field';
import {
	// render,
	// cleanup,
	fireEvent,
	screen,
	waitFor,
	// waitForElementToBeRemoved,
	// queryByText,
} from '@testing-library/react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import * as React from 'react';
import { ReactElement, useCallback, useMemo } from 'react';
import { useForm } from '../Form/formUtils';

// Components
// import AddressCard from './AddressCard';
import Form from '../Form/Form';
import { IAddress } from '.';

// const address: IAddress = {
// 	id: 1,
// 	address1: '8950 N Oracle Rd',
// 	city: 'Oro Valley',
// 	postalCode: '85704',
// 	country: 'US',
// 	state: 'AZ',
// 	types: ['physical', 'billing'],
// };

const fields = [
	{
		disabled: false,
		label: 'Address Form Field',
		name: 'address',
		type: 'address',
	},
] as FieldDef[];

export const AddressFormFieldExample = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert('Form submitted with the following data: ' + JSON.stringify(data, null, ' '));
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<Form
			title='Title'
			description='Description'
			state={state}
			fields={fields}
			dispatch={dispatch}
			events={events}
			onSubmit={onSubmit}
			onCancel={() => jest.fn()}
		/>
	);
};

const container = document.body;

// beforeEach(() => {
// 	container = document.createElement('div');
// 	document.body.appendChild(container);
// });

// afterEach(() => {
// 	document.body.removeChild(container);
// 	container = null;
// });
jest.setTimeout(100000);

describe.skip('AddressCard component', () => {
	it('should render an address card with the given address', async () => {
		await act(async () => {
			ReactDOM.render(<AddressFormFieldExample />, container);
		});

		const addressButton = container.querySelectorAll('button');
		// addressButton.forEach(button => {
		// 	screen.debug(button);
		// });

		await act(async () => {
			addressButton[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});

		expect(await screen.findByTestId('drawer-title-test')).toBeTruthy();

		console.log('BREAK 1');

		const buttons = container.querySelectorAll('button');
		// buttons.forEach(button => {
		// 	screen.debug(button);
		// });

		// await act(async () => {
		// 	buttons[4].dispatchEvent(new MouseEvent('click', { bubbles: true }));
		// });

		console.log('BREAK 2');

		const address = container.querySelector('#address1');
		const city = container.querySelector('#city');
		const postalCode = container.querySelector('#postalCode');
		const dropdowns = container.querySelectorAll('div[data-testid="autocomplete-test-id"]');
		// const inputs = await screen.findAllByRole('textbox') as HTMLInputElement[];

		// screen.debug(inputs);

		// screen.debug(null, 60000);
		const addressTypes = await screen.findAllByRole('checkbox') as HTMLInputElement[];

		// screen.debug(address);
		// screen.debug(city);
		// screen.debug(postalCode);
		// screen.debug(dropdowns[0]);
		// screen.debug(addressTypes);


		// await act(async () => {
		// 	// address.dispatchEvent(new InputEvent('onchange', { }))
		// 	addressTypes[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
		// });
		await act(async () => {
			fireEvent.change(address, { target: { value: 'Address test 1' } });
			fireEvent.change(city, { target: { value: 'Guadalajara' } });
			fireEvent.change(postalCode, { target: { value: '123' } });
			// fireEvent.change(inputs[0], { target: { value: 'México' } });
			// The first dropdown refers to the country selector.
			dropdowns[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
			fireEvent.keyDown(dropdowns[0], { key: 'ArrowDown' });
			fireEvent.keyDown(dropdowns[0], { key: 'ArrowDown' });
			fireEvent.keyDown(dropdowns[0], { key: 'Enter' });
			fireEvent.click(addressTypes[0]);
			// buttons[5].dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		await act(async () => {
			buttons[4].dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});

		// screen.debug(container.querySelector('span[data-testid="drawer-title-test"]'));
		//

		await waitFor(() => {
			expect(screen.getByText('Address edited')).toBeTruthy();
			expect(screen.getByText('Physical, Billing Address')).toBeTruthy();
			expect(screen.getByText('City edited, 000')).toBeTruthy();
			expect(screen.getByText('AR')).toBeTruthy();
		}, { timeout: 3000 });

		await waitFor(() => {
			expect(container.querySelector('span[data-testid="drawer-title-test"]')).toBeNull();
		}, { timeout: 10000 });

		// await waitForElementToBeRemoved(() => container.querySelector('span[data-testid="drawer-title-test"]'));
		// screen.debug(null, 100000);

		expect(await screen.findAllByText('Remove')).toHaveLength(1);

		// // await waitFor(() => {
		// // 	expect(queryAllByTestId('address-card-test').length).toBe(1);
		// // }, { timeout: 3000 });

		// fireEvent.click(getByText('Remove'));

		// expect(queryAllByTestId('address-card-test')).toStrictEqual([]);
	});
});

// const {
// 	getByText,
// 	getByLabelText,
// 	getAllByTestId,
// 	getAllByRole,
// 	getAllByText,
// 	queryAllByTestId
// } = screen;

// const addNewAddress = async () => {
// 	document.createRange = () => ({
// 		setStart: jest.fn(),
// 		setEnd: jest.fn(),
// 		// The types of the common Ancestor Container object in the following line
// 		// are ignored just for practical purposes to run the test.
// 		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// 		// @ts-ignore
// 		commonAncestorContainer: {
// 			nodeName: 'BODY',
// 			ownerDocument: document,
// 		},
// 	});

// 	const addAddressButton = getByText('ADD ADDRESS');
// 	fireEvent.click(addAddressButton);

// 	expect(await screen.findByTestId('drawer-title-test')).toBeTruthy();

// 	const address = await screen.findByLabelText('Address');
// 	const city = await screen.findByLabelText('City');
// 	const postalCode = await screen.findByLabelText('Postal Code');
// 	const dropdowns = await screen.findAllByTestId('autocomplete-test-id');
// 	const inputs = await screen.findAllByRole('textbox') as HTMLInputElement[];
// 	// The first dropdown refers to the country selector.
// 	dropdowns[0].focus();

// 	// screen.debug(null, 60000);
// 	const addressTypes = await screen.findAllByRole('checkbox') as HTMLInputElement[];
// 	const modalSaveButton = await screen.findAllByText('Save');

// 	fireEvent.change(address, { target: { value: 'Address test 1' } });
// 	fireEvent.change(city, { target: { value: 'Guadalajara' } });
// 	fireEvent.change(postalCode, { target: { value: '123' } });

// 	fireEvent.change(inputs[0], { target: { value: 'México' } });
// 	fireEvent.keyDown(dropdowns[0], { key: 'ArrowDown' });
// 	fireEvent.keyDown(dropdowns[0], { key: 'Enter' });
// 	fireEvent.click(addressTypes[0]);
// 	fireEvent.click(modalSaveButton[1]);
// };

// afterEach(cleanup);
// jest.setTimeout(30000);

// describe('Address component', () => {
// 	beforeEach(() => {
// 		render(<AddressFormFieldExample />);
// 	});

// 	it.only('should add a new address card and then remove it', async () => {
// 		expect(queryAllByTestId('address-card-test')).toStrictEqual([]);
// 		// await addNewAddress();

// 		//
// 		const addAddressButton = getByText('ADD ADDRESS');
// 		fireEvent.click(addAddressButton);

// 		expect(await screen.findByTestId('drawer-title-test')).toBeTruthy();

// 		const address = await screen.findByLabelText('Address');
// 		const city = await screen.findByLabelText('City');
// 		const postalCode = await screen.findByLabelText('Postal Code');
// 		const dropdowns = await screen.findAllByTestId('autocomplete-test-id');
// 		const inputs = await screen.findAllByRole('textbox') as HTMLInputElement[];

// 		// screen.debug(inputs);

// 		// screen.debug(null, 60000);
// 		const addressTypes = await screen.findAllByRole('checkbox') as HTMLInputElement[];
// 		let modalSaveButton = await screen.findAllByText('Save');

// 		fireEvent.change(address, { target: { value: 'Address test 1' } });
// 		fireEvent.change(city, { target: { value: 'Guadalajara' } });
// 		fireEvent.change(postalCode, { target: { value: '123' } });
// 		// fireEvent.change(inputs[0], { target: { value: 'México' } });
// 		// The first dropdown refers to the country selector.
// 		dropdowns[0].focus();
// 		fireEvent.keyDown(dropdowns[0], { key: 'ArrowDown' });
// 		fireEvent.keyDown(dropdowns[0], { key: 'ArrowDown' });
// 		fireEvent.keyDown(dropdowns[0], { key: 'Enter' });
// 		fireEvent.click(addressTypes[0]);
// 		fireEvent.click(modalSaveButton[1]);
// 		//

// 		await new Promise((r) => setTimeout(r, 2000));

// 		// expect(await screen.findByTestId('drawer-title-test')).toBe(null);
// 		await waitFor(async () =>
// 			expect(await screen.findByTestId('drawer-title-test')).not.toBeInTheDocument(),
// 		)

// 		// screen.debug(null, 100000);

// 		// expect(await screen.findAllByText('Remove')).toHaveLength(1);

// 		// // await waitFor(() => {
// 		// // 	expect(queryAllByTestId('address-card-test').length).toBe(1);
// 		// // }, { timeout: 3000 });

// 		// fireEvent.click(getByText('Remove'));

// 		// expect(queryAllByTestId('address-card-test')).toStrictEqual([]);
// 	});

// 	it('should edit an address card', async () => {
// 		// await addNewAddress();
// 		// await new Promise((r) => setTimeout(r, 5000));
// 		fireEvent.click(await screen.findByText('Edit'));

// 		const address = getByLabelText('Address');
// 		const city = getByLabelText('City');
// 		const postalCode = getByLabelText('Postal Code');
// 		const dropdowns = getAllByTestId('autocomplete-test-id');
// 		const countryDropdown = dropdowns[0].querySelector(
// 			'.MuiAutocomplete-input'
// 		);
// 		const addressTypes = getAllByRole('checkbox') as HTMLInputElement[];

// 		fireEvent.change(address, { target: { value: 'Address edited' } });
// 		fireEvent.change(city, { target: { value: 'City edited' } });
// 		fireEvent.change(postalCode, { target: { value: '000' } });
// 		fireEvent.change(countryDropdown, { target: { value: 'Argentina' } });
// 		fireEvent.click(getByText('Argentina'));
// 		fireEvent.click(addressTypes[1]);

// 		fireEvent.click(getAllByText('Save')[1]);

// 		await waitFor(() => {
// 			expect(getByText('Address edited')).toBeTruthy();
// 			expect(getByText('Physical, Billing Address')).toBeTruthy();
// 			expect(getByText('City edited, 000')).toBeTruthy();
// 			expect(getByText('Argentina')).toBeTruthy();
// 		}, { timeout: 3000 });
// 	});
// });

// describe('AddressCard component', () => {
// 	it('should render an address card with the given address', () => {
// 		render(<AddressCard address={address} disabled={false} />);

// 		expect(getByText('8950 N Oracle Rd')).toBeTruthy();
// 		expect(getByText('Physical, Billing Address')).toBeTruthy();
// 		expect(getByText('Oro Valley, Arizona 85704')).toBeTruthy();
// 		expect(getByText('United States')).toBeTruthy();
// 	});
// });

