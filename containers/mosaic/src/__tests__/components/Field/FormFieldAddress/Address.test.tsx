import type { ReactElement } from "react";

import {
	render,
	cleanup,
	fireEvent,
	screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";

import type { IAddress, AddressFieldInputSettings } from "@root/components/Field/FormFieldAddress";
import type { FieldDef } from "@root/components/Field";

// Components
import AddressCard from "@root/components/Field/FormFieldAddress/AddressCard";
import Form, { useForm } from "@root/components/Form";

// Utils
import AddressAutocomplete from "@root/components/Field/FormFieldAddress/AddressAutocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import { StyledClearIcon } from "@root/components/Field/FormFieldAddress/AddressAutocomplete/AddressAutocomplete.styled";
import AddressDrawer from "@root/components/Field/FormFieldAddress/AddressDrawer";
import { getOptionsCountries, getOptionsStates } from "@root/components/Field/FormFieldAddress/utils/optionGetters";

const commonInputSettings = {
	getOptionsCountries,
	getOptionsStates,
	googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
};

const mockGeoCoder = vi
	.fn()
	.mockImplementation(() => ({ geocode: vi.fn() }));

/**
 * Mock Google Maps JavaScript API
 */
export const setupGoogleMock = (): void => {
	const google = {
		maps: {
			places: {
				AutocompleteService: function() {
					return { getPlacePredictions: vi.fn() };
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

vi.mock("@react-google-maps/api", () => ({
	useLoadScript: () => ({
		isLoaded: true,
		loadError: null,
	}),

	GoogleMap: () => <div>Mocked Google Map Component</div>,

	Marker: () => <div />,
}));

const address: IAddress = {
	id: 1,
	address1: "8950 N Oracle Rd",
	city: "Oro Valley",
	postalCode: "85704",
	country: { label: "United States", value: "US" },
	state: { label: "Arizona", value: "AZ" },
	types: [{ label: "Physical", value: "physical" }, { label: "Billing", value: "billing" }],
};

export const AddressFormFieldExample = (props: { inputSettings?: AddressFieldInputSettings }): ReactElement => {
	const controller = useForm();

	const fields: FieldDef[] = [
		{
			disabled: false,
			label: "Address Form Field",
			name: "address",
			type: "address",
			inputSettings: props.inputSettings,
		},
	];

	return (
		<Form
			{...controller}
			fields={fields}
		/>
	);
};

const {
	getByText,
	getByTestId,
} = screen;

const mockOnChange = vi.fn();
const mockOnSelect = vi.fn();
const mockClear = vi.fn();

beforeAll(() => {
	setupGoogleMock();
});
afterEach(cleanup);

const mockResizeObserver = vi.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
});
window.ResizeObserver = mockResizeObserver;
// jest.setTimeout(60000);

const mockScrollIntoView = vi.fn();
window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

describe("AddressCard component", () => {
	it("should render an address card with the given address", () => {
		render(<AddressCard address={address} disabled={false} />);

		expect(getByText("8950 N Oracle Rd")).toBeTruthy();
		expect(getByText("Physical and Billing Address")).toBeTruthy();
		expect(getByText("Oro Valley, Arizona 85704")).toBeTruthy();
		expect(getByText("United States")).toBeTruthy();
	});
});

describe("Address drawer", () => {
	it("Address drawer should preserve extra address object properties", async () => {
		const user = userEvent.setup();
		const onSaveMock = vi.fn();

		const addressData = {
			id: 1,
			address1: "137 Teaticket Highway",
			address2: "",
			city: "Falmouth",
			state: {
				label: "Massachusetts",
				value: "MA",
			},
			postalCode: "02536",
			country: {
				label: "United States",
				value: "US",
			},
			types: [
				{
					label: "Physical",
					value: "physical",
				},
			],
		};

		const addressTypes = [{ value: "physical", label: "Physical" }];

		render(
			<AddressDrawer
				{...commonInputSettings}
				handleClose={() => null}
				onSave={onSaveMock}
				addressToEdit={addressData}
				addressTypes={addressTypes}
			/>,
		);

		await user.click(await screen.findByText("Save"));

		expect(onSaveMock).toBeCalledWith(expect.objectContaining(addressData));
	});
});

describe("AddressAutocomplete component", () => {
	it("it should render a default value and execute callbacks", () => {
		render(
			<AddressAutocomplete
				googleMapsApiKey=""
				value="Test"
				onChange={mockOnChange}
				onSelect={mockOnSelect}
				textField={{
					InputProps: {
						endAdornment: (
							<InputAdornment position="end">
								<StyledClearIcon onClick={mockClear} />
							</InputAdornment>
						),
					},
				}}
			/>,
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
