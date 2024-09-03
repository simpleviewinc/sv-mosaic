import * as React from "react";
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react";

// Components
import Form, { useForm } from "@root/components/Form";
import { ReactElement } from "react";

import { FieldDef } from "@root/components/Field/FieldTypes";
// Utils
import { ButtonProps } from "@root/components/Button";

const {
	getByLabelText,
	getByText,
	getByTestId,
	getAllByText,
	getAllByRole,
} = screen;

const fields: FieldDef[] = [
	{
		name: "map",
		label: "Map",
		type: "mapCoordinates",
		required: false,
		disabled: false,
		inputSettings: {
			googleMapsApiKey: "test",
		},
	},
];

const MapCoordinatesExample = (): ReactElement => {
	const controller = useForm();
	const { handleSubmit } = controller;

	const onSubmit = handleSubmit((data) => alert("Form submitted with the following data: " + JSON.stringify(data, null, " ")));

	const buttons: ButtonProps[] = [
		{
			label: "Save",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained",
		},
	];

	return (
		<Form
			{...controller}
			buttons={buttons}
			title="Form Title"
			description="This is a description example"
			fields={fields}
		/>
	);
};

const mockGeoCoder = jest
	.fn()
	.mockImplementation(() => ({ geocode: vi.fn() }));

/**
 * Mock Google Maps JavaScript API
 */
export const setupGoogleMock = (): void => {
	const google = {
		maps: {
			places: {
				AutocompleteService: vi.fn(),
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

// const setCoordinates = () => {
// 	const latitudeField = getByLabelText("Latitude");
// 	const longitudeField = getByLabelText("Longitude");
// 	act(() => {
// 		fireEvent.change(latitudeField, { target: { value: 12 } });
// 		// fireEvent.change(longitudeField, { target: { value: 22 } });
// 	});
// 	act(() => {
// 		// fireEvent.change(latitudeField, { target: { value: 12 } });
// 		fireEvent.change(longitudeField, { target: { value: 22 } });
// 	});
// };

const mockResizeObserver = vi.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
});
window.ResizeObserver = mockResizeObserver;

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
	GoogleMap: React.forwardRef(() => <div>Mocked Google Map Component</div>),
	// eslint-disable-next-line react/display-name
	Marker: () => <div />,
}));

describe("MapCoordinates component without an address", () => {
	it("it should display the google maps elements", async () => {
		act(() => {
			render(<MapCoordinatesExample />);
		});

		const addCoordinatesButton = getByText("ADD COORDINATES");
		await act(async () => {
			fireEvent.click(addCoordinatesButton);
		});

		await waitFor(() => {
			expect(getByText("Mocked Google Map Component")).toBeTruthy();
			expect(getByTestId("location-search-input")).toBeTruthy();
		});

	});

	it("should remove the saved coordinates", async () => {
		await act(async () => {
			render(<MapCoordinatesExample />);
		});

		const addCoordinatesButton = getByText("ADD COORDINATES");
		await act(async () => {
			fireEvent.click(addCoordinatesButton);
		});

		const saveButtons = await screen.findAllByText("Save");
		const [, saveCoordinatesButton] = saveButtons;

		await act(async () => {
			saveCoordinatesButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		setTimeout(async () => {
			expect(getAllByText("Latitude")).toHaveLength(1);
			expect(getByText("12")).toBeTruthy();
			expect(getAllByText("Longitude")).toHaveLength(1);
			expect(getByText("22")).toBeTruthy();

			const removeButton = await screen.findByText("Remove");
			await act(async () => {
				removeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
			});
			expect(getByText("ADD COORDINATES")).toBeTruthy();
		}, 5000);
	});

	it("should edit the saved coordinates", async () => {
		await act(async () => {
			render(<MapCoordinatesExample />);
		});

		const addCoordinatesButton = getByText("ADD COORDINATES");
		await act(async () => {
			fireEvent.click(addCoordinatesButton);
		});

		const [, saveCoordinatesButton] = getAllByText("Save");

		await act(async () => {
			saveCoordinatesButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		setTimeout(async () => {
			await act(async () => {
				const editButton = getByText("Edit");
				editButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
				fireEvent.change(getByLabelText("Latitude"), { target: { value: 100 } });
				fireEvent.change(getByLabelText("Longitude"), { target: { value: 150 } });
				const saveButton = getByText("Save Coordinates");
				saveButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
			});

			expect(getByText("100")).toBeTruthy();
			expect(getByText("150")).toBeTruthy();
		}, 5000);
	});

	it("should reset coordinates", async () => {
		act(() => {
			render(<MapCoordinatesExample />);
		});

		const addCoordinatesButton = getByText("ADD COORDINATES");
		await act(async () => {
			fireEvent.click(addCoordinatesButton);
		});

		const fields = getAllByRole("textbox");
		const latitudeField = fields[1] as HTMLInputElement;
		const longitudeField = fields[2] as HTMLInputElement;

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
