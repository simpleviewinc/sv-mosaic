import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

// Components
import TextEditor from './TextEditor';

afterEach(cleanup);

describe('TextEditor component', () => {
	it('should disable text editor', () => {
		const { container } = render(
			<TextEditor
				fieldDef={{
					name: 'disabledTextEditor',
					label: 'Disabled test',
					disabled: true
				}}
			/>
		);
		const editorContent = container.querySelector('.public-DraftEditor-content');

		expect(editorContent).toHaveAttribute('contenteditable', 'false');
	});

	it('should disable text editor', () => {
		const { container } = render(
			<TextEditor
				fieldDef={{
					name: 'disabledTextEditor',
					label: 'Disabled test',
					disabled: true
				}}
			/>
		);
		const editorContent = container.querySelector('.public-DraftEditor-content');

		expect(editorContent).toHaveAttribute('contenteditable', 'false');
	});
});