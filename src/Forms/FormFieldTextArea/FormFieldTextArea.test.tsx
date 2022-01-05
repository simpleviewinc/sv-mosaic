import * as React from 'react';
import { useState } from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

// Components
import TextArea from './FormFieldTextArea';
import Field from '@root/components/Field';

afterEach(cleanup);

describe('TextArea component', () => {
	let result;

	beforeEach(() => {
		result = render(
			<TextArea
				label='Label test'
				inputSettings={{
					htmlFor: 'test',
					placeholder: 'placeholder',
				}}
				id='test'
				onChange={() => jest.fn()}
			/>
		);
	});

	it('should render a text area element', () => {
		const textAreaElement = result.container.querySelector('#test');

		expect(textAreaElement.nodeName).toBe('TEXTAREA');
	});

	it('should display the placeholder', () => {
		const placeholderElement = screen.getByPlaceholderText('placeholder');

		expect(placeholderElement).toBeDefined();
	});
});

describe('TextArea behaviour of the error text and the helper text', () => {
	it('should, in case of an error, display the error text and not the helper text', () => {
		render(
			<Field
				label='Label'
				helperText='Helper text'
				error='Error text'
			>
				<TextArea
					label='Label test'
					inputSettings={{
						placeholder: 'placeholder',
					}}
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

	it('should display the helper text in the case of no error', () => {
		render(
			<Field
				label='Label'
				helperText='Helper text'
				error=''
			>
				<TextArea
					label='Label test'
					inputSettings={{
						placeholder: 'placeholder',
					}}
					helperText='Helper text'
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

describe('TextArea char counter behaviour', () => {
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
					<TextArea
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

		const { container } = render(<WithCharCounter />);
		const textArea = container.querySelector('#char-test');

		fireEvent.change(textArea, { target: { value: '233' } });

		const charCounter = screen.getByText('3/20');

		expect(charCounter).toBeDefined();
	});
});
