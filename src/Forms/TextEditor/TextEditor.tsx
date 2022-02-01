//BUG TO BE FIXED
// import * as React from 'react';
// import { memo, ReactElement, useState } from 'react';
// import { TextEditorProps } from './TextEditorTypes';
// import { EditorWrapper } from './TextEditor.styled';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// const TextEditor = (props: TextEditorProps): ReactElement => {
// 	const { disabled, error, onChange, placeholder, value } = props;

// 	// State variables
// 	const [hasFocus, setHasFocus] = useState(false);

// 	return (
// 		<EditorWrapper hasFocus={hasFocus} error={error}>
// 			<Editor
// 				editorState={value}
// 				onEditorStateChange={onChange}
// 				onFocus={() => setHasFocus(true)}
// 				onBlur={() => setHasFocus(false)}
// 				placeholder={placeholder}
// 				readOnly={disabled}
// 			/>
// 		</EditorWrapper>
// 	);
// };

// export default memo(TextEditor);

import * as React from 'react';
import { memo, ReactElement, useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import { MosaicFieldProps } from '@root/components/Field';

const TextEditor = (props: MosaicFieldProps<unknown, string>): ReactElement => {
	const {
		fieldDef,
		onChange,
		onBlur,
		value,
	} = props;

	const editor = useRef(null);

	const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
		disabled: fieldDef?.disabled,
	}

	const updateValue = (e: string) => {
		if (onChange)
			onChange(e);

		if (onBlur)
			onBlur(e);
	}

	return (
		<JoditEditor
			ref={editor}
			value={value}
			config={config}
			onBlur={(e) => updateValue(e)}
		// onChange={(e) => onChange && onChange(e)}
		/>
	);
};

export default memo(TextEditor);