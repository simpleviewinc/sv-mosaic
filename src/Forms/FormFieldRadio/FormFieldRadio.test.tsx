import * as React from 'react';
import { useState } from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

// Components
import FormFieldRadio from './FormFieldRadio';

afterEach(cleanup);

const { getByText, getAllByRole } = screen;

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

const FormFieldRadioExample = () => {
	const [value, setValue] = useState('');

	const handleChange = async (value) => {
		setValue(value);
	};

	return (
		<>
			<span>{value}</span>
			<FormFieldRadio
				fieldDef={{
					name: 'radio',
					label: 'Label',
					inputSettings: {
						options
					}
				}}
				onChange={handleChange}
				value={value}
			/>
		</>
	);
};

describe('FormFieldRadio component', () => {
	let radioButtons = [];
	beforeEach(() => {
		render(<FormFieldRadioExample />);
		radioButtons = getAllByRole('radio') as HTMLInputElement[];
		fireEvent.click(radioButtons[1]);
	});

	it('should display the value of the clicked option', () => {
		expect(getByText('label_2')).toBeDefined();
	});

	it('should check the clicked option', () => {
		expect(radioButtons[0].checked).toEqual(false);
		expect(radioButtons[1].checked).toEqual(true);
		expect(radioButtons[2].checked).toEqual(false);
	});
});
