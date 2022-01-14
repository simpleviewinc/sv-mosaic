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

describe('FormFieldCheckbox component', () => {
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
					fieldDef={{
						label: 'test',
						inputSettings: {
							options,
							onChange: onChange
						}
					}}
					value={checked}	
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
