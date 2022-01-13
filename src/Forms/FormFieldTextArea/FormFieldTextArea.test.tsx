import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';
import TextArea from './FormFieldTextArea';

afterEach(cleanup);

describe('Text field component', () => {
	beforeEach(() => {
		render(
			<TextArea
				fieldDef={{
					label: 'Label test',
					instructionText: 'Instructional text',
					inputSettings: {
						htmlFor: 'test',
						placeholder: 'placeholder',
					},
				}}
				onChange={() => jest.fn()}
			/>
		);
	});

	it('should display text field component', () => {
		const labelElement = screen.getByText('Label test');

		expect(labelElement).toBeDefined();
	});

	it('should display the instructional text', () => {
		const instructionalTextElement = screen.getByText('Instructional text');

		expect(instructionalTextElement).toBeDefined();
	});

	it('should display the placeholder', () => {
		const placeholderElement = screen.getByPlaceholderText('placeholder');

		expect(placeholderElement).toBeDefined();
	});

	it('should render a text area element', () => {
		const textAreaElement = screen.getByLabelText('Label test');

		expect(textAreaElement.nodeName).toBe('TEXTAREA');
	});
});

describe('The behaviour of the error text and the helper text', () => {
	it('should, in case of an error, display the error text and not the helper text', () => {
		render(
			<TextArea
				fieldDef={{
					label: 'Label test',
					helperText: 'Helper text',
					inputSettings: {
						placeholder: 'placeholder',
					},
				}}
				error='Error text'
				onChange={() => jest.fn()}
			/>
		);
		const errorTextElement = screen.getByText('Error text');
		const helperText = screen.queryByText('Helper text');

		expect(errorTextElement).toBeDefined();
		expect(helperText).toBe(null);
	});

	it('should display the helper text in the case of no error', () => {
		render(
			<TextArea
				fieldDef={{
					label: 'Label test',
					helperText: 'Helper text',
					inputSettings: {
						placeholder: 'placeholder',
					},
				}}
				error=''
				onChange={() => jest.fn()}
			/>
		);
		const helperTextElement = screen.getByText('Helper text');
		const errorTextElement = screen.queryByText('Error text');

		expect(helperTextElement).toBeDefined();
		expect(errorTextElement).toBe(null);
	});
});

describe('The char counter behaviour', () => {
	it('should render the char counter', () => {
		const WithCharCounter = () => {
			const [inputValue, setInputValue] = useState('');
			const onHandleChange = (event) => {
				setInputValue(event.target.value);
			};

			return (
				<TextArea
					fieldDef={{
						label: 'Label',
						inputSettings: {
							htmlFor: 'char-test',
							placeholder: 'placeholder',
							maxCharacters: 20,
							value: inputValue
						},
					}}
					onChange={onHandleChange}
				/>
			);
		};

		render(<WithCharCounter />);
		const inputElement = screen.getByLabelText('Label');

		fireEvent.change(inputElement, { target: { value: '233' } });
		const charCounter = screen.getByText('3/20');

		expect(charCounter).toBeDefined();
	});
});
