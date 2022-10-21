import { FieldDef } from "@root/components/Field";
import {
	render,
	cleanup,
	fireEvent,
	screen,
	waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";
import { ReactElement } from "react";

// Components
import AddressCard from "./AddressCard";
import { IAddress, AddressFieldDef } from ".";
import Form, { useForm } from "@root/components/Form";

const address: IAddress = {
	id: 1,
	address1: "8950 N Oracle Rd",
	city: "Oro Valley",
	postalCode: "85704",
	country: {label: "United States", value: "US"},
	state: {label: "Arizona", value: "AZ"},
	types: [{label: "Physical", value: "physical"}, {label: "Billing", value: "billing"}]
};

const fields = [
	{
		disabled: false,
		label: "Address Form Field",
		name: "address",
		type: "address",
	}
] as FieldDef[];

export const AddressFormFieldExample = (props: { inputSettings?: AddressFieldDef; }): ReactElement => {
	const {
		state,
		dispatch,
	} = useForm();

	const newFields = fields.map(field => props?.inputSettings ? ({
		...field,
		inputSettings: props.inputSettings,
	}) : field);

	return (
		<Form
			title="Title"
			description="Description"
			state={state}
			fields={newFields}
			dispatch={dispatch}
		/>
	);
};

const {
	getByText,
	getByLabelText,
	getAllByTestId,
	getAllByRole,
	queryAllByTestId,
	queryByText,
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
	const inputs = getAllByRole("combobox") as HTMLInputElement[];
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
jest.setTimeout(60000);

describe("Address component without inputSettings prop", () => {
	beforeEach(() => {
		render(<AddressFormFieldExample />);
	});

	it("should add a new address card and then remove it", async () => {
		expect(queryAllByTestId("address-card-test")).toStrictEqual([]);
		addNewAddress();
		fireEvent.click(getByText("Save"));
		await waitFor(() => {
			expect(queryAllByTestId("address-card-test").length).toBe(1);
		});

		fireEvent.click(getByText("Remove"));

		expect(queryAllByTestId("address-card-test")).toStrictEqual([]);
	});

	it("should edit an address card and disable ADD ADDRESS button", async () => {
		addNewAddress();

		fireEvent.click(getByText("Save"));
		await waitFor(() => {
			expect(queryAllByTestId("address-card-test").length).toBe(1);
		});

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
		fireEvent.change(postalCode, { target: { value: "456" } });
		fireEvent.change(countryDropdown, { target: { value: "Argentina" } });
		fireEvent.click(getByText("Argentina"));
		fireEvent.click(addressTypes[1]);
		fireEvent.click(addressTypes[2]);

		fireEvent.click(getByText("Save"));

		await waitFor(() => {
			expect(getByText("Address edited")).toBeTruthy();
			expect(getByText("Physical, Billing, Shipping Address")).toBeTruthy();
			expect(getByText("City edited, 456")).toBeTruthy();
			expect(getByText("Argentina")).toBeTruthy();
			expect(getByText("ADD ADDRESS")).toHaveClass("Mui-disabled");
		});
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

describe("Address field with specific amount per type", () => {

	it("should add a new address card with shipping address type", async () => {

		render(<AddressFormFieldExample inputSettings={{
			amountPerType: 2,
			amountShipping: 1,
			amountPhysical: 0,
			amountBilling: 0,
		}}/>);

		expect(queryAllByTestId("address-card-test")).toStrictEqual([]);

		addNewAddress();

		expect(queryByText("Physical")).not.toBeInTheDocument();
		expect(queryByText("Billing")).not.toBeInTheDocument();

		fireEvent.click(getByText("Save"));

		await waitFor(() => {
			expect(queryAllByTestId("address-card-test").length).toBe(1);
		});

		await waitFor(() => {
			expect(getByText("ADD ADDRESS")).not.toHaveClass("Mui-disabled");
		});
	});
});
