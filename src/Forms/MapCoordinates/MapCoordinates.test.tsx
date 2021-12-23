import * as React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

// Components
import MapCoordinates, {
	getAddressStringFromAddressObject,
} from './MapCoordinates';


const { getByLabelText, getByRole, getByText, getByTestId, getAllByText, queryByText } = screen;

const addressObj = {
	address: '8950 N Oracle Rd',
	city: 'Oro Valley',
	country: {
		title: 'United States',
		value: {},
	},
	postalCode: '85704',
	state: {
		title: 'AZ',
		value: {},
	},
	types: ['physical'],
};

const mapPosition = {
	lat: -3.745,
	lng: -40.523,
};

const mockGeoCoder = jest.fn().mockImplementation(() => (
	{ geocode: jest.fn() }
));

/**
 * Mock Google Maps JavaScript API
 */
export const setupGoogleMock = () => {
	const google = {
		maps: {
			places: {
				AutocompleteService: jest.fn(),
				PlacesServiceStatus: {
					INVALID_REQUEST: 'INVALID_REQUEST',
					NOT_FOUND: 'NOT_FOUND',
					OK: 'OK',
					OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
					REQUEST_DENIED: 'REQUEST_DENIED',
					UNKNOWN_ERROR: 'UNKNOWN_ERROR',
					ZERO_RESULTS: 'ZERO_RESULTS',
				},
			},
			Geocoder: mockGeoCoder,
			GeocoderStatus: {
				ERROR: 'ERROR',
				INVALID_REQUEST: 'INVALID_REQUEST',
				OK: 'OK',
				OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
				REQUEST_DENIED: 'REQUEST_DENIED',
				UNKNOWN_ERROR: 'UNKNOWN_ERROR',
				ZERO_RESULTS: 'ZERO_RESULTS',
			},
		},
	};
	global.window.google = google as any;
};

const saveCoordinates = () => {
	const latitudeField = getByLabelText('Latitude');
	const longitudeField = getByLabelText('Longitude');
	const saveCoordinatesButton = getByText('Save Coordinates');

	fireEvent.change(latitudeField, { target: { value: 12 } });
	fireEvent.change(longitudeField, { target: { value: 22 } });
	fireEvent.click(saveCoordinatesButton);
};

beforeAll(() => {
	setupGoogleMock();
});

afterEach(cleanup);

jest.mock("@react-google-maps/api", () => ({
	useLoadScript: () => ({
		isLoaded: true,
		loadError: null
	}),
	// eslint-disable-next-line react/display-name
	GoogleMap: () => <div>Mocked Google Map Component</div>,
	// eslint-disable-next-line react/display-name
	Marker: () => <div />,
}));

describe('MapCoordinates component without an address', () => {
	beforeEach(() => {
		render(<MapCoordinates
			apiKey={'test'}
			mapPosition={mapPosition}
		/>)

		const addCoordinatesButton = getByText('ADD COORDINATES');
		fireEvent.click(addCoordinatesButton);
	});

	it('it should display the elements that are conditionally rendered by the address object', () => {
		expect(getByText('Mocked Google Map Component')).toBeTruthy();
		expect(getByTestId('location-search-input')).toBeTruthy();
	});

	it('should save coordinates', () => {
		saveCoordinates();

		expect(getAllByText('Latitude')).toHaveLength(2);
		expect(getByText('12')).toBeTruthy();
		expect(getAllByText('Longitude')).toHaveLength(2);
		expect(getByText('22')).toBeTruthy();
	});

	it('should remove the saved coordinates', () => {
		saveCoordinates();
		const removeButton = getByText('Remove');
		fireEvent.click(removeButton)

		expect(getByText('ADD COORDINATES')).toBeTruthy();
	});

	it('should edit the saved coordinates', () => {
		saveCoordinates();
		const editButton = getByText('Edit');

		fireEvent.click(editButton)
		fireEvent.change( getByLabelText('Latitude'), { target: { value: 100 } });
		fireEvent.change( getByLabelText('Longitude'), { target: { value: 150 } });
		fireEvent.click(getByText('Save Coordinates'));

		expect(getByText('100')).toBeTruthy();
		expect(getByText('150')).toBeTruthy();
	});

	it('should reset coordinates', () => {
		const latitudeField = getByLabelText('Latitude') as HTMLInputElement;
		const longitudeField = getByLabelText('Longitude') as HTMLInputElement;
		const resetButton = getByText('Reset');

		fireEvent.change(latitudeField, { target: { value: 100 } });
		fireEvent.change(longitudeField, { target: { value: 150 } });
		fireEvent.click(resetButton);

		expect(latitudeField.value).toBe('');
		expect(longitudeField.value).toBe('');
	})
});

describe('MapCoordinates component with an address object (AUTOCOODINATES)', () => {
	beforeEach(() => {
		render(<MapCoordinates
			address={addressObj}
			apiKey={'test'}
			mapPosition={mapPosition}
		/>)
	})

	it('should display the elements that are conditionally rendered by the address object', () => {
		expect(getByText('Use same as address')).toBeTruthy();
		expect(getByText('Edit')).toBeTruthy();
		expect(queryByText('Remove')).toBe(null);
	});

	it('should geocode the address and not display the edit and remove button', () => {
		const toggleSwitch = getByRole('checkbox') as HTMLInputElement;

		fireEvent.click(toggleSwitch);

		expect(mockGeoCoder).toHaveBeenCalled();
		expect(queryByText('Edit')).toBe(null);
		expect(queryByText('Remove')).toBe(null);
	})
});

describe('MapCoordinates getAddressStringFromAddressObject helper function', () => {
	it('should convert an address object into a string', () => {
		const addressString = '8950 N Oracle Rd 85704 Oro Valley AZ United States';

		expect(getAddressStringFromAddressObject(addressObj)).toEqual(
			addressString
		);
	});
});


