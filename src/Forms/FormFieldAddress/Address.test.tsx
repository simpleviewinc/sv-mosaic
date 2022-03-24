// Components
import * as React from 'react';
import { ReactElement, useCallback, useMemo } from "react";
import Form from '../Form/Form';
import { FieldDef } from '../../components/Field';
import { useForm } from '../Form/formUtils';
import { act, cleanup, render, screen } from '@testing-library/react';
import { IAddress } from './AddressTypes';
import FormFieldAddress from './FormFieldAddress';

const onCancel = () => {
	alert('Cancelling form, going back to previous site');
};

const address: IAddress = {
	id: 1,
	address1: '8950 N Oracle Rd',
	city: 'Oro Valley',
	postalCode: '85704',
	country: 'US',
	state: 'AZ',
	types: ['physical', 'billing'],
};

const fields = 
		[
			{
				disabled: false,
				label: "Label",
				required: false,
				name: "address",
				type: 'address',
			}
		] as FieldDef[];

const AddressFormFieldExample = (): ReactElement => {
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

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={"Form Title"}
				description={"This is a description example"}
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

const AddressFormFieldDisabledExample = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	const fields = useMemo(
		() => (
			[
				{
					disabled: true,
					label: "Label",
					required: false,
					name: "address",
					type: 'address',
				}
			] as FieldDef[]
		),
		[]
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

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={"Form Title"}
				description={"This is a description example"}
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

afterEach(cleanup);

const { getByText } = screen;

describe("Address field component", () => {
	it("Should display Add Address button", async () => {
		await act(async () => {
			render(<AddressFormFieldExample />);
		});
		expect(await getByText("ADD ADDRESS")).toBeTruthy();
	});

	it("Should be disabled Address button", async () => {
		await act(async () => {
			render(<AddressFormFieldDisabledExample />);
		});
		expect(await getByText('ADD ADDRESS').closest('button').disabled).toBeTruthy()
	});
});

describe("Rendering Address component", () => {

	beforeEach( async () => {
		await act(async () => {
			render(<FormFieldAddress fieldDef={fields[0]} value={[address]} />);
		});
	});

	it("Should render an address card with the given address", async () => {
		expect(await getByText("Physical, Billing Address")).toBeTruthy();
		expect(await getByText("8950 N Oracle Rd")).toBeTruthy();
		expect(await getByText("Oro Valley, Arizona 85704")).toBeTruthy();
		expect(await getByText("United States")).toBeTruthy();
		expect(await getByText("Edit")).toBeTruthy();
		expect(await getByText("Remove")).toBeTruthy();
	});

	it("Should remove an address card with the given address", async () => {


		expect(await getByText("Physical, Billing Address")).toBeTruthy();
		expect(await getByText("8950 N Oracle Rd")).toBeTruthy();
		expect(await getByText("Oro Valley, Arizona 85704")).toBeTruthy();
		expect(await getByText("United States")).toBeTruthy();
		expect(await getByText("Edit")).toBeTruthy();
		expect(await getByText("Remove")).toBeTruthy();
	});
});