// Components
import * as React from "react";
import { ReactElement, useCallback, useMemo } from "react";
import Form from "../Form/Form";
import { FieldDef } from "../../components/Field";
import { useForm } from "../Form/formUtils";
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor
} from "@testing-library/react";
import { IAddress } from "./AddressTypes";

const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

const address: IAddress = {
	id: 1,
	address1: "8950 N Oracle Rd",
	city: "Oro Valley",
	postalCode: "85704",
	country: "US",
	state: "AZ",
	types: ["physical", "billing"]
};

// eslint-disable-next-line react/prop-types
const AddressFormFieldExample = ({ disabled, defaultValue }): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit
	} = useForm();

	const fields = useMemo(
		() =>
			[
				{
					disabled: disabled || false,
					label: "Label",
					required: false,
					name: "address",
					type: "address",
					defaultValue: defaultValue || undefined
				}
			] as FieldDef[],
		[disabled, defaultValue]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback(
		data => {
			alert(
				"Form submitted with the following data: " +
					JSON.stringify(data, null, " ")
			);
		},
		[state.validForm]
	);

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
			render(
				<AddressFormFieldExample disabled={false} defaultValue={undefined} />
			);
		});
		expect(await getByText("ADD ADDRESS")).toBeTruthy();
	});

	it("Should be disabled Address button", async () => {
		await act(async () => {
			render(
				<AddressFormFieldExample disabled={true} defaultValue={undefined} />
			);
		});
		expect(
			await getByText("ADD ADDRESS").closest("button").disabled
		).toBeTruthy();
	});

	it("Should be displayed address card with default values", async () => {
		await act(async () => {
			render(
				<AddressFormFieldExample disabled={false} defaultValue={[address]} />
			);
		});
		expect(getByText("Physical, Billing Address")).toBeTruthy();
		expect(getByText("8950 N Oracle Rd")).toBeTruthy();
		expect(getByText("Oro Valley, Arizona 85704")).toBeTruthy();
		expect(getByText("United States")).toBeTruthy();
		expect(getByText("Edit")).toBeTruthy();
		expect(getByText("Remove")).toBeTruthy();
	});
});

describe("Set new address action buttons", () => {
	beforeEach(() => {
		render(
			<AddressFormFieldExample disabled={false} defaultValue={undefined} />
		);

		const addAddressButton = getByText("ADD ADDRESS");
		fireEvent.click(addAddressButton);
	});

	it("Should display AddressDrawer component", async () => {
		const container = document.body;
		expect(screen.getByTestId("drawer-title-test")).toBeTruthy();

		const dropdowns = await screen.findAllByTestId('autocomplete-test-id');
		const country = dropdowns[0];
		const address1 = container.querySelector("#address1");
		const city = container.querySelector("#city");
		const postalCode = container.querySelector("#postalCode");
		const addressTypes = await screen.findAllByRole('checkbox') as HTMLInputElement[];
		const modalSaveButton = await screen.findAllByText('Save');
		
		// Change country
		fireEvent.keyDown(country, { key: 'ArrowDown' });
		fireEvent.keyDown(country, { key: 'ArrowDown' });
		fireEvent.keyDown(country, { key: 'Enter' });
		// Change Values
		fireEvent.change(address1, { target: { value: 'Address test 1' } });
		fireEvent.change(city, { target: { value: 'Guadalajara' } });
		fireEvent.change(postalCode, { target: { value: '123' } });
		// Select address type
		fireEvent.click(addressTypes[0]);
		fireEvent.click(addressTypes[2]);
		
		//Click Save button
		await waitFor(() => {
			fireEvent.click(modalSaveButton[1]);
			fireEvent.click(modalSaveButton[1]);
		});
		
		await waitFor(() => {
			screen.debug();
			expect(getByText("Address test 1")).toBeTruthy();
		})
	});
});
