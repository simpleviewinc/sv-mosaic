import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

// Components
import TextEditor from './TextEditor';

afterEach(cleanup);

describe('TextEditor component', () => {
	it('should display placeholder', () => {
		const { getByText } = render(
			<TextEditor
				onChange={() => jest.fn()}
				placeholder='Placeholder test'
				value={null}
			/>
		);

		expect(getByText('Placeholder test')).toBeTruthy();
	});

	it('should disable text editor', () => {
		const { container } = render(
			<TextEditor
				disabled={true}
				onChange={() => jest.fn()}
				placeholder='Placeholder test'
				value={null}
			/>
		);
		const editorContent = container.querySelector('.public-DraftEditor-content');

		expect(editorContent).toHaveAttribute('contenteditable', 'false');
	});
});
