import * as React from 'react';
import { memo, ReactElement, useState } from 'react';
import { TextEditorProps } from './TextEditorTypes';
import { EditorWrapper } from './TextEditor.styled';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const TextEditor = (props: TextEditorProps): ReactElement => {
	const { disabled, error, onChange, placeholder, value } = props;

	// State variables
	const [hasFocus, setHasFocus] = useState(false);

	return (
		<EditorWrapper hasFocus={hasFocus} error={error}>
			<Editor
				editorState={value}
				onEditorStateChange={onChange}
				onFocus={() => setHasFocus(true)}
				onBlur={() => setHasFocus(false)}
				placeholder={placeholder}
				readOnly={disabled}
			/>
		</EditorWrapper>
	);
};

export default memo(TextEditor);
