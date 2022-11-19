import { FieldDef } from "@root/components/Field";
import {
	render,
	cleanup,
	fireEvent,
	screen,
	waitFor,
	act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";
import { ReactElement } from "react";

// Components
import AddressCard from "./AddressCard";
import { IAddress, AddressFieldDef } from ".";
import Form, { useForm } from "@root/components/Form";

// Utils
import { getOptionsCountries, getOptionsStates } from "./utils/optionGetters";
// import { renderButtons } from "@root/utils/storyUtils";

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
			// buttons={renderButtons(dispatch)}
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
	findAllByTestId,
	findAllByRole,
	findByLabelText,
	findByText,
	findByTestId,
} = screen;

const addNewAddress = async () => {
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

	const addAddressButton = await findByText("ADD ADDRESS");
	await act(async () => {
		// fireEvent.click(addAddressButton);
		addAddressButton.dispatchEvent(new MouseEvent("click", {bubbles: true}));
	});
	const address = await findByLabelText("Address");
	const city = await findByLabelText("City");
	const postalCode = await findByLabelText("Postal Code");
	const dropdowns = await findAllByTestId("autocomplete-test-id");
	const inputs = await findAllByRole("combobox") as HTMLInputElement[];
	const addressTypes = await findAllByRole("checkbox") as HTMLInputElement[];
	const modalSaveButton = await findByText("Save");

	// The first dropdown refers to the country selector.


	await act(async () => {
		fireEvent.change(address, { target: { value: "Address test 1" } });
	});
	await act(async () => {
		fireEvent.change(city, { target: { value: "Guadalajara" } });
	});
	await act(async () => {
		fireEvent.change(postalCode, { target: { value: "123" } });
	});

	await act(async () => {
		dropdowns[0].focus();
		fireEvent.change(inputs[0], { target: { value: "México" } });
		fireEvent.keyDown(dropdowns[0], { key: "ArrowDown" });
		fireEvent.keyDown(dropdowns[0], { key: "Enter" });
	});

	await act(async () => {
		// fireEvent.click(addressTypes[0]);
		addressTypes[0].dispatchEvent(new MouseEvent("click", {bubbles: true}));
	});

	await act(async () => {
		// fireEvent.click(modalSaveButton);
		modalSaveButton.dispatchEvent(new MouseEvent("click", {bubbles: true}));
	});

};

afterEach(cleanup);
jest.setTimeout(60000);

describe("Regular Address component", () => {
	beforeEach(() => {
		render(<AddressFormFieldExample inputSettings={{
			getOptionsCountries,
			getOptionsStates,
		}}/>);
	});

	it.only("should add a new address card and then remove it", async () => {
		// expect(await findAllByTestId("address-card-test")).not.toBeInTheDocument();
		await addNewAddress();

		const form = await findAllByTestId("form-test-id");
		screen.debug(form[1]);
		// await act(async () => {
		// 	// fireEvent.click(getByText("Save"));
		// 	const saveButton = await findByText("Save");
		// 	saveButton.dispatchEvent(new MouseEvent("click", {bubbles: true}));
		// });
		await waitFor(() => {
			expect(queryAllByTestId("address-card-test").length).toBe(1);
		});
		await act(async () => {
			// fireEvent.click(getByText("Remove"));
			const removeButton = await findByText("Remove");
			removeButton.dispatchEvent(new MouseEvent("click", {bubbles: true}));
		});

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
			getOptionsCountries,
			getOptionsStates,
		}}/>);

		expect(queryAllByTestId("address-card-test")).toStrictEqual([]);

		await addNewAddress();

		expect(queryByText("Physical")).not.toBeInTheDocument();
		expect(queryByText("Billing")).not.toBeInTheDocument();

		// fireEvent.click(await findByText("Save"));

		await waitFor(() => {
			expect(queryAllByTestId("address-card-test").length).toBe(1);
		});

		await waitFor(() => {
			expect(getByText("ADD ADDRESS")).not.toHaveClass("Mui-disabled");
		});
	});
});
