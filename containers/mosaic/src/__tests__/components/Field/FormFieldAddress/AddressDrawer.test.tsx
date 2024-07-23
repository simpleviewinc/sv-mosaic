import {
	act,
	fireEvent,
	render,
	screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";
import { testArray, TestDef } from "@simpleview/mochalib";

import AddressDrawer from "@root/components/Field/FormFieldAddress/AddressDrawer";
import { getOptionsCountries, getOptionsStates } from "@root/components/Field/FormFieldAddress/utils/optionGetters";
import { AddressAutocompleteProps } from "@root/components/Field/FormFieldAddress/AddressAutocomplete";
import { mockAddressData } from "./mockAddressData";

interface Test {
	query: string;
	address1: string;
	address2: string;
	address3: string;
	country: string;
	city: string;
	state: string;
	postcode: string;
}

const mockOnClose = jest.fn();
const mockOnUnsavedChanges = jest.fn();
const mockOnSave = jest.fn();

function MockAddressAutocomplete({ value, onChange, onSelect }: AddressAutocompleteProps) {
	return (
		<input
			data-testid="autocomplete-mock"
			type="text"
			onChange={({ target: { value } }) => onChange(value)}
			onKeyUp={({ key }) => key === "Enter" && onSelect(value)}
			value={value}
		/>
	);
}

jest.mock("@root/components/Field/FormFieldAddress/AddressAutocomplete", () => {
	return {
		__esModule: true,
		default: MockAddressAutocomplete,
	};
});

jest.mock("react-places-autocomplete", () => {
	return {
		geocodeByAddress: (query: string) => {
			if (!mockAddressData[query]) {
				throw new Error(`Mock address data does not exist for query "${query}"`);
			}

			return mockAddressData[query];
		},
	};
});

const getCommonAddressDrawerProps = () => ({
	getOptionsCountries: getOptionsCountries,
	getOptionsStates: getOptionsStates,
	googleMapsApiKey: "",
	handleClose: mockOnClose,
	handleUnsavedChanges: mockOnUnsavedChanges,
	onSave: mockOnSave,
});

describe("Address API components", () => {
	const tests: TestDef<Test>[] = [
		{
			name: "should place address components correctly for 337 Russell St, Hadley",
			args: {
				query: "337 Russell St, Hadley",
				address1: "337 Russell Street",
				address2: "",
				address3: "",
				country: "United States",
				city: "Hadley",
				state: "Massachusetts",
				postcode: "01035",
			},
		},
		{
			name: "should place address components correctly for Simpleview",
			args: {
				query: "Simpleview",
				address1: "8950 North Oracle Road",
				address2: "",
				address3: "",
				country: "United States",
				city: "Oro Valley",
				state: "Arizona",
				postcode: "85704",
			},
		},
		{
			name: "should place address components correctly for 81 Sussex Gardens, Gloucester",
			args: {
				query: "81 Sussex Gardens, Gloucester",
				address1: "81 Sussex Gardens",
				address2: "Hucclecote",
				address3: "",
				country: "United Kingdom",
				city: "Gloucester",
				state: "Gloucestershire",
				postcode: "GL3 3SP",
			},
		},
	];

	testArray(tests, async ({ query, ...values }) => {
		await act(async () => {
			render(
				<AddressDrawer {...getCommonAddressDrawerProps()} />,
			);
		});

		const textBoxes = screen.getAllByRole("textbox");
		const comboBoxes = screen.getAllByRole("combobox");

		expect(textBoxes.length).toBe(5);
		expect(comboBoxes.length).toBe(2);

		const [address1, address2, address3, city, postcode] = textBoxes;
		const [country, state] = comboBoxes;

		await act(async () => {
			fireEvent.change(address1, { target: { value: query } });
			fireEvent.keyUp(address1, { key: "Enter", code: "Enter", charCode: 13 });
		});

		expect(address1).toHaveValue(values.address1);
		expect(address2).toHaveValue(values.address2);
		expect(address3).toHaveValue(values.address3);
		expect(country).toHaveValue(values.country);
		expect(city).toHaveValue(values.city);
		expect(state).toHaveValue(values.state);
		expect(postcode).toHaveValue(values.postcode);
	});
});

describe("Address drawer country postcode validation", () => {
	it("should not produce an error if a postcode is entered when no country is selected", async () => {
		await act(async () => {
			render(
				<AddressDrawer {...getCommonAddressDrawerProps()} />,
			);
		});

		const postcodeInput = screen.getByLabelText("Postal Code*");

		await act(async () => {
			fireEvent.change(postcodeInput, { target: { value: "12345" } });
			fireEvent.blur(postcodeInput);
		});

		expect(screen.queryByText("This is not a valid postal code in the selected country")).toBeNull();
	});

	it("should not produce an error if a postcode is entered when an unsupported country is selected", async () => {
		await act(async () => {
			render(
				<AddressDrawer
					{...getCommonAddressDrawerProps()}
					addressToEdit={{
						address1: "123 Fake St",
						city: "Malesbury",
						state: { value: "terson", label: "Terson" },
						country: { label: "Afghanistan", value: "AF" },
						postalCode: "12345",
						types: [],
					}}
				/>,
			);
		});

		const postcodeInput = screen.getByLabelText("Postal Code*");

		await act(async () => {
			fireEvent.change(postcodeInput, { target: { value: "gle" } });
			fireEvent.blur(postcodeInput);
		});

		expect(screen.queryByText("This is not a valid postal code in the selected country")).toBeNull();
	});

	it("should produce an error if an invalid postcode is entered for the selected country", async () => {
		await act(async () => {
			render(
				<AddressDrawer
					getOptionsCountries={getOptionsCountries}
					getOptionsStates={getOptionsStates}
					googleMapsApiKey=""
					handleClose={mockOnClose}
					handleUnsavedChanges={mockOnUnsavedChanges}
					onSave={mockOnSave}
					addressToEdit={{
						address1: "123 Fake St",
						city: "Malesbury",
						state: { value: "terson", label: "Terson" },
						country: { label: "United States", value: "US" },
						postalCode: "12345",
						types: [],
					}}
				/>,
			);
		});

		const postcodeInput = screen.getByLabelText("Postal Code*");

		await act(async () => {
			fireEvent.change(postcodeInput, { target: { value: "gl44ab" } });
			fireEvent.blur(postcodeInput);
		});

		expect(screen.queryByText("This is not a valid postal code in the selected country")).not.toBeNull();
	});
});
