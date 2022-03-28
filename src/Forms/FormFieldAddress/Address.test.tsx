import { FieldDef } from "@root/components/Field";
import {
	render,
	cleanup,
	fireEvent,
	screen,
	waitFor
} from "@testing-library/react";
import * as React from "react";
import { ReactElement, useCallback, useMemo } from "react";
import { useForm } from "../Form/formUtils";

// Components
import AddressCard from "./AddressCard";
import Form from "../Form/Form";
import { IAddress } from ".";

const address: IAddress = {
	id: 1,
	address1: "8950 N Oracle Rd",
	city: "Oro Valley",
	postalCode: "85704",
	country: "US",
	state: "AZ",
	types: ["physical", "billing"]
};

const fields = [
	{
		disabled: false,
		label: "Address Form Field",
		name: "address",
		type: "address"
	}
] as FieldDef[];

export const AddressFormFieldExample = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit
	} = useForm();

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
		<Form
			title="Title"
			description="Description"
			state={state}
			fields={fields}
			dispatch={dispatch}
			events={events}
			onSubmit={onSubmit}
		/>
	);
};

const {
	getByText,
	getByLabelText,
	getAllByTestId,
	getAllByRole,
	getAllByText,
	queryAllByTestId
} = screen;

const addNewAddress = () => {
	document.createRange = () => ({
		setStart: jest.fn(),
		setEnd: jest.fn(),
		// The types of the common Ancestor Container object in the following line
		// are ignored just for practical purposes to run the test.
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		commonAncestorContainer: {
			nodeName: "BODY",
			ownerDocument: document
		}
	});

	const addAddressButton = getByText("ADD ADDRESS");
	fireEvent.click(addAddressButton);
	const address = getByLabelText("Address");
	const city = getByLabelText("City");
	const postalCode = getByLabelText("Postal Code");
	const dropdowns = getAllByTestId("autocomplete-test-id");
	const inputs = getAllByRole("textbox") as HTMLInputElement[];
	// The first dropdown refers to the country selector.
	dropdowns[0].focus();

	const addressTypes = getAllByRole("checkbox") as HTMLInputElement[];
	const modalSaveButton = getByText("Save");

	fireEvent.change(address, { target: { value: "Address test 1" } });
	fireEvent.change(city, { target: { value: "Guadalajara" } });
	fireEvent.change(postalCode, { target: { value: "123" } });

	fireEvent.change(inputs[0], { target: { value: "México" } });
	fireEvent.keyDown(dropdowns[0], { key: "ArrowDown" });
	fireEvent.keyDown(dropdowns[0], { key: "Enter" });
	fireEvent.click(addressTypes[0]);
	fireEvent.click(modalSaveButton);
};

afterEach(cleanup);
jest.setTimeout(30000);

describe("Address component", () => {
	beforeEach(() => {
		render(<AddressFormFieldExample />);
	});

	it("should add a new address card and then remove it", async () => {
		expect(queryAllByTestId("address-card-test")).toStrictEqual([]);
		addNewAddress();
		fireEvent.click(getByText("Save"));
		await waitFor(
			() => {
				expect(queryAllByTestId("address-card-test").length).toBe(1);
			},
			{ timeout: 3000 }
		);

		fireEvent.click(getByText("Remove"));

		expect(queryAllByTestId("address-card-test")).toStrictEqual([]);
	});

	it("should edit an address card", async () => {
		addNewAddress();
		fireEvent.click(getByText("Save"));
		await new Promise(r => setTimeout(r, 3000));
		fireEvent.click(getByText("Edit"));

		const address = getByLabelText("Address");
		const city = getByLabelText("City");
		const postalCode = getByLabelText("Postal Code");
		const dropdowns = getAllByTestId("autocomplete-test-id");
		const countryDropdown = dropdowns[0].querySelector(
			".MuiAutocomplete-input"
		);
		const addressTypes = getAllByRole("checkbox") as HTMLInputElement[];

		fireEvent.change(address, { target: { value: "Address edited" } });
		fireEvent.change(city, { target: { value: "City edited" } });
		fireEvent.change(postalCode, { target: { value: "000" } });
		fireEvent.change(countryDropdown, { target: { value: "Argentina" } });
		fireEvent.click(getByText("Argentina"));
		fireEvent.click(addressTypes[1]);

		fireEvent.click(getAllByText("Save")[1]);
		await new Promise(r => setTimeout(r, 1000));

		await waitFor(
			() => {
				expect(getByText("Address edited")).toBeTruthy();
				expect(getByText("Physical, Billing Address")).toBeTruthy();
				expect(getByText("City edited, 000")).toBeTruthy();
				expect(getByText("Argentina")).toBeTruthy();
			},
			{ timeout: 3000 }
		);
	});
});

describe("AddressCard component", () => {
	it("should render an address card with the given address", () => {
		render(<AddressCard address={address} disabled={false} />);

		expect(getByText("8950 N Oracle Rd")).toBeTruthy();
		expect(getByText("Physical, Billing Address")).toBeTruthy();
		expect(getByText("Oro Valley, Arizona 85704")).toBeTruthy();
		expect(getByText("United States")).toBeTruthy();
	});
});
