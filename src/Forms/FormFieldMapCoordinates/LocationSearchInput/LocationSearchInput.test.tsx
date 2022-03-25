import * as React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';

// Components
import LocationSearchInput from './LocationSearchInput';
import { setupGoogleMock } from '../MapCoordinates.test';

beforeAll(() => {
	setupGoogleMock();
});

afterEach(cleanup);

const { getByTestId } = screen;
const mockHandleCoordinates = jest.fn()

describe('MapCoordinates LocationSearchInput component', () => {
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
