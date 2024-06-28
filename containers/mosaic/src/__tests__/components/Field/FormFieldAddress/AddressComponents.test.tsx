import {
	act,
	fireEvent,
	render,
	screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";

import AddressDrawer from "@root/components/Field/FormFieldAddress/AddressDrawer";
import { getOptionsCountries, getOptionsStates } from "@root/components/Field/FormFieldAddress/utils/optionGetters";
import { AddressAutocompleteProps } from "@root/components/Field/FormFieldAddress/AddressAutocomplete";
import { addressQueryComponentMap } from "./geocodeAddressData";
import testArray from "@root/utils/testArray";

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
			if (!addressQueryComponentMap[query]) {
				throw new Error(`Address components are not defined for query "${query}"`);
			}

			return addressQueryComponentMap[query];
		},
	};
});

describe("Address API components", () => {
	const tests = [
		{
			name: "should place the components returned from the API in the correct drawer fields",
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
	];

	testArray(tests, async ({ query, ...values }) => {
		await act(async () => {
			render(
				<AddressDrawer
					getOptionsCountries={getOptionsCountries}
					getOptionsStates={getOptionsStates}
					googleMapsApiKey=""
					handleClose={mockOnClose}
					handleUnsavedChanges={mockOnUnsavedChanges}
					onSave={mockOnSave}
				/>,
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
