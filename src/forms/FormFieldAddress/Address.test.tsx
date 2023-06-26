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
import { IAddress, AddressFieldInputSettings } from ".";
import Form, { useForm } from "@root/components/Form";

// Utils
import { getOptionsCountries, getOptionsStates } from "./utils/optionGetters";
import AddressAutocomplete from "./AddressAutocomplete";
import { InputAdornment } from "@mui/material";
import { StyledClearIcon } from "./AddressAutocomplete/AddressAutocomplete.styled";


const mockGeoCoder = jest
	.fn()
	.mockImplementation(() => ({ geocode: jest.fn() }));

/**
 * Mock Google Maps JavaScript API
 */
export const setupGoogleMock = (): void => {
	const google = {
		maps: {
			places: {
				AutocompleteService: function() {
					return { getPlacePredictions: jest.fn() };
				},
				PlacesServiceStatus: {
					INVALID_REQUEST: "INVALID_REQUEST",
					NOT_FOUND: "NOT_FOUND",
					OK: "OK",
					OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
					REQUEST_DENIED: "REQUEST_DENIED",
					UNKNOWN_ERROR: "UNKNOWN_ERROR",
					ZERO_RESULTS: "ZERO_RESULTS",
				},
			},
			Geocoder: mockGeoCoder,
			GeocoderStatus: {
				ERROR: "ERROR",
				INVALID_REQUEST: "INVALID_REQUEST",
				OK: "OK",
				OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
				REQUEST_DENIED: "REQUEST_DENIED",
				UNKNOWN_ERROR: "UNKNOWN_ERROR",
				ZERO_RESULTS: "ZERO_RESULTS",
			},
		},
	};
	// Disabling linter to allow the use of any as type since this is
	// mocking a google maps object.
	// eslint-disable-next-line
  global.window.google = google as any;
};

jest.mock("@react-google-maps/api", () => ({
	useLoadScript: () => ({
		isLoaded: true,
		loadError: null,
	}),
	// eslint-disable-next-line react/display-name
	GoogleMap: () => <div>Mocked Google Map Component</div>,
	// eslint-disable-next-line react/display-name
	Marker: () => <div />,
}));

const address: IAddress = {
	id: 1,
	address1: "8950 N Oracle Rd",
	city: "Oro Valley",
	postalCode: "85704",
	country: {label: "United States", value: "US"},
	state: {label: "Arizona", value: "AZ"},
	types: [{label: "Physical", value: "physical"}, {label: "Billing", value: "billing"}]
};

export const AddressFormFieldExample = (props: { inputSettings?: AddressFieldInputSettings; }): ReactElement => {
	const {
		state,
		dispatch,
	} = useForm();

	const fields: FieldDef[] = [
		{
			disabled: false,
			label: "Address Form Field",
			name: "address",
			type: "address",
			inputSettings: props.inputSettings,
		}
	];

	return (
		<Form
			state={state}
			fields={fields}
			dispatch={dispatch}
		/>
	);
};

const {
	getByText,
	getAllByTestId,
	getAllByRole,
	queryAllByTestId,
	queryByText,
	findAllByTestId,
	findAllByRole,
	findByText,
	getByTestId
} = screen;

const mockOnChange = jest.fn()
const mockOnSelect = jest.fn()
const mockClear = jest.fn();

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
		fireEvent.click(addAddressButton);
	});

	const fields = screen.getAllByRole("textbox");
	const address = fields[0];
	expect(address).toBeInTheDocument();

	const city = fields[3];
	expect(city).toBeInTheDocument();

	const postalCode = fields[4];
	expect(postalCode).toBeInTheDocument();

	const dropdowns = await findAllByTestId("autocomplete-test-id");
	const inputs = await findAllByRole("combobox") as HTMLInputElement[];
	const addressTypes = await findAllByTestId("checkbox-test-id") as HTMLInputElement[];

	await act(async () => {
		dropdowns[0].focus();
		fireEvent.change(inputs[1], { target: { value: "México" } });
		fireEvent.keyDown(dropdowns[0], { key: "ArrowDown" });
		fireEvent.keyDown(dropdowns[0], { key: "Enter" });
	});

	await act(async () => {
		fireEvent.change(fields[0], { target: { value: "Address test 1" } });
	});

	await act(async () => {
		fireEvent.change(fields[3], { target: { value: "Guadalajara" } });
	});

	await act(async () => {
		fireEvent.change(fields[4], { target: { value: "123" } });
	});

	await act(async () => {
		fireEvent.click(addressTypes[0]);
	});
};

beforeAll(() => {
	setupGoogleMock();
});
afterEach(cleanup);

const mockResizeObserver = jest.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null
});
window.ResizeObserver = mockResizeObserver;
jest.setTimeout(60000);

describe("Regular Address component", () => {
	return;
	beforeEach(async () => {
		await act(() => {
			render(
				<AddressFormFieldExample
					inputSettings={{
						getOptionsCountries,
						getOptionsStates,
						googleMapsApiKey: "test",
					}}
				/>
			)
		});
	});

	it("should add a new address card and then remove it", async () => {
		await(waitFor(() => {
			expect(queryAllByTestId("address-card-test").length).toBe(0);
		}));

		await addNewAddress();

		const saveButton = getByText("Save");
		fireEvent.click(saveButton);
		await(waitFor(() => {
			expect(queryAllByTestId("address-card-test").length).toBe(1);
		}));

		const removeButton = getByText("Remove");
		await act(async () => {
			fireEvent.click(removeButton);
		});

		await(waitFor(() => {
			expect(queryAllByTestId("address-card-test").length).toBe(0);
		}));
	});

	it("should edit an address card and disable ADD ADDRESS button", async () => {
		await addNewAddress();

		const saveButton = getByText("Save");
		fireEvent.click(saveButton);

		await waitFor(() => {
			expect(queryAllByTestId("address-card-test").length).toBe(1);
		});

		await act(async () => {
			fireEvent.click(getByText("Edit"));
		});

		const fields = screen.getAllByRole("textbox");
		const address = fields[0];
		const city = fields[3];
		const postalCode = fields[4];
		const dropdowns = getAllByTestId("autocomplete-test-id");
		const countryDropdown = dropdowns[0].querySelector(
			".MuiAutocomplete-input"
		);
		const addressTypes = getAllByRole("checkbox") as HTMLInputElement[];

		await act(async () => {
			fireEvent.change(address, { target: { value: "Address edited" } });
		});

		await act(async () => {
			fireEvent.change(city, { target: { value: "City edited" } });
		});

		await act(async () => {
			fireEvent.change(postalCode, { target: { value: "456" } });
		});

		await act(async () => {
			fireEvent.change(countryDropdown, { target: { value: "Argentina" } });
			fireEvent.click(getByText("Argentina"));
		});

		await act(async () => {
			fireEvent.click(addressTypes[1]);
		});

		await act(async () => {
			fireEvent.click(addressTypes[2]);
		});


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
	return;
	it("should render an address card with the given address", () => {
		render(<AddressCard address={address} disabled={false} />);

		expect(getByText("8950 N Oracle Rd")).toBeTruthy();
		expect(getByText("Physical, Billing Address")).toBeTruthy();
		expect(getByText("Oro Valley, Arizona 85704")).toBeTruthy();
		expect(getByText("United States")).toBeTruthy();
	});
});

describe("Address field with specific amount per type", () => {
	return;
	it("should add a new address card with shipping address type", async () => {
		await act(() => {
			render(<AddressFormFieldExample inputSettings={{
				googleMapsApiKey: "test",
				amountPerType: 2,
				amountShipping: 1,
				amountPhysical: 0,
				amountBilling: 0,
				getOptionsCountries,
				getOptionsStates,
			}}/>);
		});

		expect(queryAllByTestId("address-card-test")).toStrictEqual([]);

		await addNewAddress();

		expect(queryByText("Physical")).not.toBeInTheDocument();
		expect(queryByText("Billing")).not.toBeInTheDocument();

		const saveButton = getByText("Save");
		fireEvent.click(saveButton, {bubbles: true});


		await waitFor(() => {
			expect(queryAllByTestId("address-card-test").length).toBe(1);
		});

		await waitFor(() => {
			expect(getByText("ADD ADDRESS")).not.toHaveClass("Mui-disabled");
		});
	});
});

describe("AddressAutocomplete component", () => {
	return;
	it("it should render a default value and execute callbacks", () => {
		render(
			<AddressAutocomplete
				value="Test"
				onChange={mockOnChange}
				onSelect={mockOnSelect}
				textField={{
					InputProps: {
						endAdornment: (
							<InputAdornment position='end'>
								<StyledClearIcon onClick={mockClear} />
							</InputAdornment>
						),
					}
				}}
			/>
		);

		const inputElement = getByTestId("location-search-input") as HTMLInputElement;
		expect(inputElement).toHaveValue("Test");

		const clearIcon = getByTestId("ClearIcon");

		fireEvent.change(inputElement, { target: { value: "Monterrey" } });
		expect(mockOnChange).toHaveBeenCalled();

		fireEvent.click(clearIcon);
		expect(mockClear).toHaveBeenCalled();
	});
});
