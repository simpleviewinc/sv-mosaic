import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import * as React from 'react';
import RadioButton from './RadioButton';

afterEach(cleanup);

describe('RadioButton component', () => {
	it('should check the RadioButton', () => {
		render(
			<RadioButton label='Label test' disabled={false} required={false} />
		);
		const radioButton = screen.getByRole('radio') as HTMLInputElement;

		expect(radioButton.checked).toEqual(false);

		fireEvent.click(radioButton);

		expect(radioButton.checked).toBe(true);
	});

	it('should test the disabled state', () => {
		render(<RadioButton label='Label test' disabled={true} required={false} />);

		const radioButton = screen.getByRole('radio') as HTMLInputElement;

		expect(radioButton.disabled).toBe(true);
	});

	it('should test that the RadioButton is required', () => {
		render(<RadioButton label='Label test' disabled={false} required={true} />);

		const radioButton = screen.getByRole('radio') as HTMLInputElement;

		expect(radioButton.required).toBe(true);
	});
});
