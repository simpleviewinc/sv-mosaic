import * as React from 'react';
import { memo, ReactElement } from 'react';
import { TextEditorProps } from './TextEditorTypes';
import { EditorWrapper } from './TextEditor.styled';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const TextEditor = (props: TextEditorProps): ReactElement => {
	const { disabled, onChange, value } = props;

	return (
		<EditorWrapper>
			<Editor
				readOnly={disabled}
				editorState={value}
				onEditorStateChange={onChange}
			/>
		</EditorWrapper>
	);
};

export default memo(TextEditor);
