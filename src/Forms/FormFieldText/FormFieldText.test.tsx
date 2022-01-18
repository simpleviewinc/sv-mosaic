import { render, screen, cleanup } from '@testing-library/react';
import * as React from 'react';

// Components
import TextField from './FormFieldText';

afterEach(cleanup);

describe('TextField component', () => {
	it('should should display the placeholder', () => {
		render(<TextField
			fieldDef={{
				label: 'Label test',
				instructionText: 'Instruction text',
				inputSettings: {
					placeholder: 'placeholder',
				}
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
				fieldDef={{
					label: 'Label test',
					helperText: 'Helper text',
					inputSettings: {
						htmlFor: 'input-test',
						placeholder: 'placeholder',
						multiline: false
					},
				}}
				onChange={() => jest.fn()}
			/>
		);
		const textField = screen.getByPlaceholderText('placeholder');

		expect(textField.nodeName).toBe('INPUT');
	});

	it('should render a text area element when the multiline prop is present', () => {
		render(
			<TextField
				fieldDef={{
					label: 'Label test',
					helperText: 'Helper text',
					inputSettings: {
						htmlFor: 'multiline-tes',
						placeholder: 'placeholder',
						multiline: true,
					},
				}}
				onChange={() => jest.fn()}
			/>
		);

		const textField = screen.getByPlaceholderText('placeholder');

		expect(textField.nodeName).toBe('TEXTAREA');
	});
});
