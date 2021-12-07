import * as React from 'react';
import { ReactElement, useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { EditorState } from "draft-js";

// Components
import TextEditor from './TextEditor';
import Field from '../../components/Field';

export default {
	title: 'Forms|TextEditor',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const errorText = text('Error text', '');
	const error = boolean('Error', false);
	const isError = error && errorText.length > 0;

	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);
	};

	return (
		<>
			<Field
				label={text('Label', 'Label')}
				error={isError}
				errorText={text('Error text', '')}
				required={boolean('Required', false)}
				disabled={disabled}
				instructionText={text('Instruction text', 'Instruction text')}
				helperText={text('Helper text', 'Helper text')}
				type='TextEditor'
			>
				<TextEditor
					disabled={disabled}
					error={isError}
					onChange={onEditorStateChange}
					placeholder={text('Placeholder', 'Placeholder')}
					value={editorState}
				/>
			</Field>
			<textarea
				disabled
				value={JSON.stringify(editorState.getCurrentContent(), null, 4)}
				style={{marginTop: '10px', width: '600px', height: '450px'}}
			/>
		</>
	);
};
