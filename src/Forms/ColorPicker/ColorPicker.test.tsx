import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import * as React from 'react';
import ColorPicker from './ColorPicker';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('ColorPicker component', () => {
	it('should display the color picker when the selected color element is clicked', () => {
		render(
			<ColorPicker color='#fff' disabled={false} onChange={() => jest.fn()} />
		);

		const selectedColorDiv = screen.getByTestId('colordiv-test');
		fireEvent.click(selectedColorDiv);
		const colorPicker = screen.getByText('hex');

		expect(selectedColorDiv).toBeTruthy();
		expect(colorPicker).toBeTruthy();
		expect(selectedColorDiv).toHaveStyle(`background: #fff`);
	});

	it('should not display the color picker when is disabled', () => {
		render(
			<ColorPicker color='#fff' disabled={true} onChange={() => jest.fn()} />
		);

		const selectedColorDiv = screen.getByTestId('colordiv-test');
		fireEvent.click(selectedColorDiv);
		const colorPicker = screen.queryByText('hex');

		expect(colorPicker).toBe(null);
	});
});
