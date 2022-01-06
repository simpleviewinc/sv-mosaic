import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';

// Components
import Field from '@root/components/Field';
import TextField from './FormFieldText';

afterEach(cleanup);

describe('TextField component', () => {
	beforeEach(() => {
		render(
			<Field
				label='Label'
				helperText='Helper text'
				instructionText='Instruction text'
			>
				<TextField
					label='Label test'
					instructionText='Instruction text'
					inputSettings={{
						htmlFor: 'test',
						placeholder: 'placeholder',
					}}
					onChange={() => jest.fn()}
				/>
			</Field>
		);
	});

	it('should should display the label', () => {
		const labelElement = screen.getByText('Label');
		expect(labelElement).toBeDefined();
	});

	it('should should display the instruction text', () => {
		const instructionTextElement = screen.getByText('Instruction text');
		expect(instructionTextElement).toBeDefined();
	});

	it('should should display the placeholder', () => {
		const placeholderElement = screen.getByPlaceholderText('placeholder');
		expect(placeholderElement).toBeDefined();
	});
});

describe('TextField behaviour of the error text and the helper text', () => {
	it('should, in case of an error, display the error text and not the helper text', () => {
		render(
			<Field
				label='Label'
				helperText='Helper text'
				error='Error text'
			>
				<TextField
					label='Label test'
					error={'Error text'}
					helperText='Helper text'
					onChange={() => jest.fn()}
				/>
			</Field>
		);
		const errorTextElement = screen.getByText('Error text');
		const helperText = screen.queryByText('Helper text');

		expect(errorTextElement).toBeDefined();
		expect(helperText).toBe(null);
	});

	it('should should display the helper text in the case of no error', () => {
		render(
			<Field
				label='Label'
				helperText='Helper text'
				error=''
			>
				<TextField
					label='Label test'
					helperText='Helper text'
					placeholder='placeholder'
					onChange={() => jest.fn()}
				/>
			</Field>
		);
		const helperTextElement = screen.getByText('Helper text');
		const errorTextElement = screen.queryByText('Error text');

		expect(helperTextElement).toBeDefined();
		expect(errorTextElement).toBe(null);
	});
});

describe('TextField multiline behaviour', () => {
	it('should render an input element when multiline is off', () => {
		render(
			<TextField
				inputSettings={{
					htmlFor: 'input-test',
					placeholder: 'placeholder',
					multiline: false
				}}
				onChange={() => jest.fn()}
				id='input-test'
				label='Label test'
			/>
		);
		const textField = screen.getByPlaceholderText('placeholder');

		expect(textField.nodeName).toBe('INPUT');
	});

	it('should render a text area element when the multiline prop is present', () => {
		render(
			<TextField
				inputSettings={{
					htmlFor: 'multiline-test',
					placeholder: 'placeholder',
					multiline: true,
				}}
				id='multiline-test'
				label='Label test'
				onChange={() => jest.fn()}
			/>
		);

		const textField = screen.getByPlaceholderText('placeholder');

		expect(textField.nodeName).toBe('TEXTAREA');
	});
});

describe('TextField char counter behaviour', () => {
	it('should render the char counter', () => {
		const WithCharCounter = () => {
			const [inputValue, setInputValue] = useState('');
			const onHandleChange = (val) => {
				setInputValue(val);
			};

			return (
				<Field
					label='Label'
					maxCharacters={20}
					value={inputValue}
				>
					<TextField
						id='char-test'
						label='Label'
						inputSettings={{
							htmlFor: 'char-test',
							placeholder: 'placeholder',
							maxCharacters: 20,
							value: inputValue
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
