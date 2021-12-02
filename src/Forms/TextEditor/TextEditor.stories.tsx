import * as React from 'react';
import { ReactElement, useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { EditorState } from 'draft-js';

// Components
import TextEditor from './TextEditor';
import Field from '@root/components/Field';

export default {
	title: 'Forms|TextEditor',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const disabled = boolean('Disabled', false);

	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const onEditorStateChange = (editorState) => {
		setEditorState(editorState);
	};

	return (
		<Field
			label={text('Label', 'Label')}
			error={boolean('Error', false)}
			errorText={text('Error text', '')}
			required={boolean('Required', false)}
			disabled={disabled}
			instructionText={text('Instruction text', 'Instruction text')}
			helperText={text('Helper text', 'Helper text')}
			type='TextEditor'
		>
			<TextEditor
				disabled={disabled}
				onChange={onEditorStateChange}
				value={editorState}
			/>
		</Field>
	);
};
