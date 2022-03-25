import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';

// Components
import Field from '@root/components/Field';
import FormFieldText from '@root/forms/FormFieldText';

const { getByText, queryByText } = screen;

afterEach(cleanup);

describe('Field component label, helper text and instructional text', () => {
	beforeEach(() => {
		render(
			<Field
				fieldDef={{
					name: 'fieldTest',
					label: 'Label',
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				}}
				colsInRow={1}
			>
				<FormFieldText
					fieldDef={{
						name: 'fieldTest',
						label: 'Label',
						helperText: 'Helper text',
						instructionText: 'Instruction text',
					}}
				/>
			</Field>
		);
	});

	it('should render a child element with a label', () => {
		expect(getByText('Label')).toBeDefined();
	});

	it('should render a child element with a helper text', () => {
		expect(getByText('Helper text')).toBeDefined();
	});
});

describe('Field component error text and the helper text', () => {
	it('should, in case of an error, display the error text and not the helper text', () => {
		render(
			<Field
				fieldDef={{
					name: 'fieldTest',
					label: 'Label',
					helperText: 'Helper text',
				}}
				error='Error text'
				colsInRow={1}
			>
				<FormFieldText
					fieldDef={{
						name: 'fieldTest',
						label: 'Label',
						helperText: 'Helper text',
					}}
					error={'Error text'}

				/>
			</Field>
		);

		expect(getByText('Error text')).toBeDefined();
		expect(queryByText('Helper text')).toBe(null);
	});

	it('should should display the helper text in the case of no error', () => {
		render(
			<Field
				fieldDef={{
					name: 'fieldTest',
					label: 'Label',
					helperText: 'Helper text',
				}}
				error=''
				colsInRow={1}
			>
				<FormFieldText
					fieldDef={{
						name: 'fieldTest',
						label: 'Label test',
						helperText: 'Helper text',
						inputSettings: {
							placeholder: 'placeholder'
						}
					}}

				/>
			</Field>
		);

		expect(getByText('Helper text')).toBeDefined();
		expect(queryByText('Error text')).toBe(null);
	});
});

describe('Field char counter', () => {
	it('should render the char counter', () => {
		const WithCharCounter = () => {
			const [inputValue, setInputValue] = useState('');
			const onHandleChange = async (val) => {
				setInputValue(val);
			};

			return (
				<Field
					fieldDef={{
						name: 'fieldTest',
						label: 'Label',
						maxCharacters: 20,
					}}
					value={inputValue}
					colsInRow={1}
				>
					<FormFieldText
						fieldDef={{
							name: 'fieldTest',
							label: 'Label',
							id: 'char-test',
							inputSettings: {
								placeholder: 'placeholder',
								maxCharacters: 20,
							}
						}}
						onChange={onHandleChange}
					/>
				</Field>
			);
		};

		render(<WithCharCounter />);
		const inputElement = screen.getByPlaceholderText('placeholder');
		fireEvent.change(inputElement, { target: { value: '233' } });
		const charCounter = screen.getByText('3/20');

		expect(charCounter).toBeDefined();
	});
});
