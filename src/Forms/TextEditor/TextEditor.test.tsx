import * as React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

// Components
import TextEditor from './TextEditor';
import { useForm } from '../Form/formUtils';
import { ReactElement, useCallback, useMemo } from 'react';
import { FieldDef } from '@root/components/Field';
import Form from '../Form/Form';

afterEach(cleanup);

const fields = [
	{
		label: 'Disabled test',
		name: 'disabledTextEditor',
		type: 'textEditor',
		disabled: false,
	},
] as FieldDef[];

const TextEditorExample = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert('Form submitted with the following data: ' + JSON.stringify(data, null, ' '));
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<Form
			title='Title'
			description='Description'
			state={state}
			fields={fields}
			dispatch={dispatch}
			events={events}
			onSubmit={onSubmit}
		/>
	);
}

describe('TextEditor component', () => {
	// it('should disable text editor', () => {
	// 	const { container } = render(
	// 		<TextEditor
	// 			fieldDef={{
	// 				name: 'disabledTextEditor',
	// 				label: 'Disabled test',
	// 				disabled: true
	// 			}}
	// 		/>
	// 	);
	// 	const editorContent = container.querySelector('.public-DraftEditor-content');

	// 	expect(editorContent).toHaveAttribute('contenteditable', 'false');
	// });

	it('should disable text editor', async () => {
		render(<TextEditorExample />);
		const editorContent = await screen.findByTestId('text-editor-testid');

		screen.debug(editorContent);

		// expect(editorContent).toHaveAttribute('contenteditable', 'false');
	});
});