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
				label='Label'
				helperText='Helper text'
				instructionText='Instruction text'
			>
				<FormFieldText
					label='Label test'
					instructionText='Instruction text'
					onChange={() => jest.fn()}
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

	it('should render a child element an instructional text', () => {
		expect(getByText('Instruction text')).toBeDefined();
	});
});

describe('Field component error text and the helper text', () => {
	it('should, in case of an error, display the error text and not the helper text', () => {
		render(
			<Field label='Label' helperText='Helper text' error='Error text'>
				<FormFieldText
					label='Label test'
					error={'Error text'}
					helperText='Helper text'
					onChange={() => jest.fn()}
				/>
			</Field>
		);

		expect(getByText('Error text')).toBeDefined();
		expect(queryByText('Helper text')).toBe(null);
	});

	it('should should display the helper text in the case of no error', () => {
		render(
			<Field label='Label' helperText='Helper text' error=''>
				<FormFieldText
					label='Label test'
					helperText='Helper text'
					placeholder='placeholder'
					onChange={() => jest.fn()}
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
			const onHandleChange = (val) => {
				setInputValue(val);
			};

			return (
				<Field label='Label' maxCharacters={20} value={inputValue}>
					<FormFieldText
						id='char-test'
						label='Label'
						inputSettings={{
							htmlFor: 'char-test',
							placeholder: 'placeholder',
							maxCharacters: 20,
							value: inputValue,
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
