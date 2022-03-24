import * as React from "react";
import {
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react";
import { getAddressStringFromAddressObject } from "./MapCoordinatesUtils";

// Components
import Form from "../Form/Form";
import MapCoordinates from "./FormFieldMapCoordinates";
import { ReactElement, useCallback, useMemo } from "react";

import { FieldDef } from "@root/components/Field/FieldTypes";
import { MapCoordinatesDef } from "./MapCoordinatesTypes";
// Utils
import { address, defaultMapPosition } from "./MapCoordinatesUtils";
import { useForm } from "../Form/formUtils";

const {
	getByLabelText,
	getByRole,
	getByText,
	getByTestId,
	getAllByText,
	queryByText,
} = screen;

const fields = [
	{
		name: "map",
		label: "Map",
		type: "mapCoordinates",
		required: false,
		disabled: false,
		inputSettings: {
			apiKey: "test",
		},
	},
] as FieldDef<MapCoordinatesDef>[];

const MapCoordinatesExample = (): ReactElement => {
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

	const onSubmit = useCallback(
		(data) => {
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
			title="Form Title"
			description="This is a description example"
			state={state}
			fields={fields}
			dispatch={dispatch}
			events={events}
			onSubmit={onSubmit}
		/>
	);
};

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
				AutocompleteService: jest.fn(),
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

const setCoordinates = () => {
	const latitudeField = getByLabelText("Latitude");
	const longitudeField = getByLabelText("Longitude");

	fireEvent.change(latitudeField, { target: { value: 12 } });
	fireEvent.change(longitudeField, { target: { value: 22 } });
};

beforeAll(() => {
	setupGoogleMock();
});

afterEach(cleanup);

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

describe("MapCoordinates component without an address", () => {
	beforeEach(() => {
		render(<MapCoordinatesExample />);

		const addCoordinatesButton = getByText("ADD COORDINATES");
		fireEvent.click(addCoordinatesButton);
	});

	it("it should display the google maps elements", () => {
		expect(getByText("Mocked Google Map Component")).toBeTruthy();
		expect(getByTestId("location-search-input")).toBeTruthy();
	});

	it("should remove the saved coordinates", async () => {
		setCoordinates();
		const saveCoordinatesButton = getByText("Save Coordinates");

		await waitFor(() => {
			fireEvent.click(saveCoordinatesButton);
		});

		setTimeout(() => {
			expect(getAllByText("Latitude")).toHaveLength(1);
			expect(getByText("12")).toBeTruthy();
			expect(getAllByText("Longitude")).toHaveLength(1);
			expect(getByText("22")).toBeTruthy();
			screen.debug();
			const removeButton = getByText("Remove");
			fireEvent.click(removeButton);
			expect(getByText("ADD COORDINATES")).toBeTruthy();
		}, 5000);
	});

	it("should edit the saved coordinates", async () => {
		render(<MapCoordinatesExample />);
		setCoordinates();

		const saveCoordinatesButton = getByText("Save Coordinates");
		await waitFor(() => {
			fireEvent.click(saveCoordinatesButton);
		});

		setTimeout(() => {
			const editButton = getByText("Edit");

			fireEvent.click(editButton);
			fireEvent.change(getByLabelText("Latitude"), { target: { value: 100 } });
			fireEvent.change(getByLabelText("Longitude"), { target: { value: 150 } });
			fireEvent.click(getByText("Save Coordinates"));

			expect(getByText("100")).toBeTruthy();
			expect(getByText("150")).toBeTruthy();
		}, 5000);
	});

	it("should reset coordinates", async () => {
		const latitudeField = getByLabelText("Latitude") as HTMLInputElement;
		const longitudeField = getByLabelText("Longitude") as HTMLInputElement;

		fireEvent.change(latitudeField, { target: { value: 100 } });
		fireEvent.change(longitudeField, { target: { value: 150 } });

		const resetButton = getByText("Reset");
		fireEvent.click(resetButton);

		await waitFor(() => {
			expect(latitudeField.value).toBe("");
			expect(longitudeField.value).toBe("");
		});
	});
});

describe("MapCoordinates component with an address object (AUTOCOODINATES)", () => {
	beforeEach(() => {
		render(
			<MapCoordinates
				fieldDef={{
					name: "mapCoordinates",
					label: "",
					inputSettings: {
						apiKey: "test",
						mapPosition: defaultMapPosition,
						address,
					},
				}}
			/>
		);
	});

	it("should display the elements that are conditionally rendered by the address object", () => {
		expect(getByText("Use same as address")).toBeTruthy();
		expect(getByText("Edit")).toBeTruthy();
		expect(queryByText("Remove")).toBe(null);
	});

	it("should geocode the address and not display the edit and remove button", () => {
		const toggleSwitch = getByRole("checkbox") as HTMLInputElement;

		fireEvent.click(toggleSwitch);

		expect(mockGeoCoder).toHaveBeenCalled();
		expect(queryByText("Edit")).toBe(null);
		expect(queryByText("Remove")).toBe(null);
	});
});

describe("MapCoordinates getAddressStringFromAddressObject helper function", () => {
	it("should convert an address object into a string", () => {
		const addressString = "8950 N Oracle Rd 85704 Oro Valley AZ United States";

		expect(getAddressStringFromAddressObject(address)).toEqual(addressString);
	});
});
