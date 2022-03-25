import * as React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

// Components
import TextArea from './FormFieldTextArea';

afterEach(cleanup);

describe('TextArea component', () => {
	let result;

	beforeEach(() => {
		result = render(
			<TextArea
				fieldDef={{
					name: 'textArea',
					label: 'Label test',
					instructionText: 'Instructional text',
					inputSettings: {
						htmlFor: 'test',
						placeholder: 'placeholder',
					},
					id: 'test'
				}}

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
