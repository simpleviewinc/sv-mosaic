import * as React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import DropdownSingleSelection from './FormFieldDropdownSingleSelection';

const topFilms = [
	{ title: 'The Shawshank Redemption', year: 1994 },
	{ title: 'The Godfather', year: 1972 },
	{ title: 'The Godfather: Part II', year: 1974 },
	{ title: 'The Dark Knight', year: 2008 },
];

const { getByText, getByTestId, getByRole } = screen;

afterEach(cleanup);

describe('DropdownSingleSelection component', () => {
	it('should render on the screen', () => {
		render(
			<DropdownSingleSelection
				fieldDef={{
					label: 'Label test',
					inputSettings: {
						options: topFilms,
						placeholder: 'Placeholder test',
					}
				}}
				value={topFilms[0]}
			/>
		);

		/**
	 * Since the textfield is the inner-most component, looking if this
	 * is getting rendered will tell us by default if the dropdown is
	 * getting rendered too.
	 */

		const textfield = getByTestId('textfield-test-id');
		expect(textfield).toBeTruthy();
	});
});

describe('DropdownSingleSelection disabled state', () => {
	it('should render a dropdown disabled with no option selected by default', () => {
		render(
			<DropdownSingleSelection
				fieldDef={{
					label: 'Label test',
					disabled: true,
					inputSettings: {
						options: topFilms,
						placeholder: 'placeholder',
					}
				}}
				value={null}
			/>
		);

		expect(getByText('placeholder')).toBeDefined();
	});
});

describe('DropdownSingleSelection component as a form field', () => {
	beforeEach(() => {
		render(
			<DropdownSingleSelection
				fieldDef={{
					label: 'Label test',
					inputSettings: {
						options: topFilms,
						placeholder: 'Placeholder test',
					}
				}}
				value={null}
			/>
		);
	});

	it('should render a dropdown with a placeholder', () => {
		const input = getByRole('textbox') as HTMLInputElement;

		expect(input.placeholder).toEqual('Placeholder test');
	});
});
