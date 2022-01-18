import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import * as React from 'react';
import ColorPicker from './ColorPicker';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('ColorPicker component', () => {
	it('should display the color picker when the selected color element is clicked', () => {
		render(
			<ColorPicker
				value={{
					r: 0,
					g: 71,
					b: 153,
					a: 1,
				}}
				fieldDef={{ label: '', disabled: false }}
				onChange={() => jest.fn()}
			/>
		);

		const selectedColorDiv = screen.getByTestId('colordiv-test');
		fireEvent.click(selectedColorDiv);
		const colorPicker = screen.getByText('hex');

		expect(selectedColorDiv).toBeTruthy();
		expect(colorPicker).toBeTruthy();
		expect(selectedColorDiv).toHaveStyle(`background:rgb(0, 71, 153)`);
	});

	it('should not display the color picker when is disabled', () => {
		render(
			<ColorPicker value='#fff' fieldDef={{ label: '', disabled: true }} onChange={() => jest.fn()} />
		);

		const selectedColorDiv = screen.getByTestId('colordiv-test');
		fireEvent.click(selectedColorDiv);
		const colorPicker = screen.queryByText('hex');

		expect(colorPicker).toBe(null);
	});
});
