import { render, screen, cleanup } from '@testing-library/react';
import * as React from 'react';

// Components
import TextField from './FormFieldText';

afterEach(cleanup);

describe('TextField component', () => {
	it('should should display the placeholder', () => {
		render(<TextField
			label='Label test'
			instructionText='Instruction text'
			inputSettings={{
				htmlFor: 'test',
				placeholder: 'placeholder',
			}}
			onChange={() => jest.fn()}
		/>)
		const placeholderElement = screen.getByPlaceholderText('placeholder');
		expect(placeholderElement).toBeDefined();
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
