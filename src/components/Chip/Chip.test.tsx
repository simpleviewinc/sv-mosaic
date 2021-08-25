import { render, screen, cleanup } from '@testing-library/react';
import * as React from 'react';
import Chip from './Chip';

afterEach(cleanup);

describe('Text field component', () => {
	beforeEach(() => {
		render(
			<Chip
				label='Label test'
				disabled={false}
				selected={false}
			/>
		);
	});

	it('should display text field component', () => {
		const labelElement = screen.getByText('Label test');

		expect(labelElement).toBeDefined();
	});
});
