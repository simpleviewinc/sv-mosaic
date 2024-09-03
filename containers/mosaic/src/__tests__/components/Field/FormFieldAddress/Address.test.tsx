import { FieldDef } from "@root/components/Field";
import {
	render,
	cleanup,
	fireEvent,
	screen,
} from "@testing-library/react";
import * as React from "react";
import { ReactElement } from "react";

// Components
import AddressCard from "@root/components/Field/FormFieldAddress/AddressCard";
import { IAddress, AddressFieldInputSettings } from "@root/components/Field/FormFieldAddress";
import Form, { useForm } from "@root/components/Form";

// Utils
import AddressAutocomplete from "@root/components/Field/FormFieldAddress/AddressAutocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import { StyledClearIcon } from "@root/components/Field/FormFieldAddress/AddressAutocomplete/AddressAutocomplete.styled";

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
