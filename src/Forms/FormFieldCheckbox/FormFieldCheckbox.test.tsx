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
					inputSettings={{
						checked,
						options
	
					}}
					error={false}
					instructionText='Instruction text'
					errorText='Error text'
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

describe('The instructionText and the errorText behavior', () => {
	it('should display the instruction text and the error text', () => {
		render(
			<FormFieldCheckbox
				label='Label'
				inputSettings={{
					checked: [],
					options

				}}
				error={true}
				required={true}
				instructionText='Instruction text'
				errorText='Error text'
				onChange={jest.fn()}
			/>
		);
		const instructionTextElement = screen.getByText('Instruction text');
		const errorTextElement = screen.getByText('Error text');

		expect(instructionTextElement).toBeDefined();
		expect(errorTextElement).toBeDefined();
	});

	it('should display only the instruction text since there is no error', () => {
		render(
			<FormFieldCheckbox
				label='Label'
				inputSettings={{
					checked: [],
					options

				}}
				error={false}
				instructionText='Instruction text'
				errorText='Error text'
				onChange={jest.fn()}
			/>
		);
		const instructionTextElement = screen.getByText('Instruction text');
		const errorTextElement = screen.queryByText('Error text');

		expect(instructionTextElement).toBeDefined();
		expect(errorTextElement).toBe(null);
	});
});
