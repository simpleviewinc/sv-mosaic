// BUG TO BE FIXED
import * as React from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';
import { ReactElement/*, useState*/ } from 'react';
import { /*boolean, text,*/ boolean, text, withKnobs } from '@storybook/addon-knobs';
import JoditEditor from "jodit-react";
import TextEditor from './TextEditor';
import Form from '../Form/Form';
import { FieldDef } from '@root/components/Field';
import { useForm } from '../Form/formUtils';
// import { EditorState } from "draft-js";

// Components
// import TextEditor from './TextEditor';
// import Field from '../../components/Field';

export default {
	title: 'Forms|TextEditor',
	decorators: [withKnobs],
};

export const JoditExample = (): ReactElement => {
	const editor = useRef(null)
	const [content, setContent] = useState('')

	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => { }}
		/>
	);
};

export const Playground = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean('Disabled', false);
	const label = text('Label', 'Label');
	const helperText = text('Helper text', 'Helper Text');
	const instructionText = text('Instruction text', 'Instruction text');
	const required = boolean('Required', false);
	const toggleLabel = text('Toggle label', 'Toggle label');

	const fields = useMemo(
		() =>
			[
				{
					name: "textEditor",
					label,
					type: "textEditor",
					required,
					disabled,
					helperText,
					instructionText,
				},
			] as FieldDef[],
		[required, disabled, toggleLabel, label, helperText, instructionText]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert('Cancelling form, going back to previous site');
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};
