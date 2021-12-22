import * as React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';

// Components
import LocationSearchInput from './LocationSearchInput';

const setupGoogleMock = () => {
	/*** Mock Google Maps JavaScript API ***/
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
			Geocoder: jest.fn(),
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

beforeAll(() => {
	setupGoogleMock();
});

afterEach(cleanup);

const { getByTestId } = screen;
const mockHandleCoordinates = jest.fn()

describe('LocationSearchInput component', () => {
	it('it should clear the enter value', () => {
		render(<LocationSearchInput handleCoordinates={mockHandleCoordinates}/>)

		const inputElement = getByTestId('location-search-input') as HTMLInputElement;
		const clearIcon = getByTestId('location-search-clear-icon');

		fireEvent.change(inputElement, { target: { value: 'Monterrey' } });
		expect(inputElement.value).toBe('Monterrey')

		fireEvent.click(clearIcon);
		expect(inputElement.value).toBe('')
	});
});
