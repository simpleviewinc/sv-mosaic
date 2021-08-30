import * as React from 'react';
import { useState, useCallback } from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

import FormFieldCheckbox from './FormFieldCheckbox';

afterEach(cleanup);

const options = [
	{
		label: 'Label 1',
		value: 'label_1',
	},
	{
		label: 'Label 2',
		value: 'label_2',
	},
	{
		label: 'Label 3',
		value: 'label_3',
	},
];

describe('The FormFieldCheckbox behavior', () => {
	it('should check the clicked option', () => {
		const FormFieldCheckboxExample = () => {
			const [checked, setChecked] = useState([]);

			const onChange = useCallback(
				(checked) => {
					setChecked(checked);
				},
				[setChecked]
			);

			return (
				<FormFieldCheckbox
					label='Label'
					error={false}
					helperText='Helper text'
					errorText='Error text'
					checked={checked}
					options={options}
					onChange={onChange}
				/>
			);
		};

		render(<FormFieldCheckboxExample />);

		const checkboxElements = screen.getAllByRole(
			'checkbox'
		) as HTMLInputElement[];
		fireEvent.click(checkboxElements[0]);

		expect(checkboxElements[0].checked).toEqual(true);
		expect(checkboxElements[1].checked).toEqual(false);
		expect(checkboxElements[2].checked).toEqual(false);
	});
});

describe('The helperText and the errorText behavior', () => {
	it('should display the helper text and the error text', () => {
		render(
			<FormFieldCheckbox
				label='Label'
				error={true}
				helperText='Helper text'
				errorText='Error text'
				checked={[]}
				options={options}
				onChange={jest.fn()}
			/>
		);
		const helperTextElement = screen.getByText('Helper text');
		const errorTextElement = screen.getByText('Error text');

		expect(helperTextElement).toBeDefined();
		expect(errorTextElement).toBeDefined();
	});

	it('should display only the helper text since there is no error', () => {
		render(
			<FormFieldCheckbox
				label='Label'
				error={false}
				helperText='Helper text'
				errorText='Error text'
				checked={[]}
				options={options}
				onChange={jest.fn()}
			/>
		);
		const helperTextElement = screen.getByText('Helper text');
		const errorTextElement = screen.queryByText('Error text');

		expect(helperTextElement).toBeDefined();
		expect(errorTextElement).toBe(null);
	});
});
