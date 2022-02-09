import * as React from 'react';
import { memo, ReactElement, useState, useRef } from 'react';
import { MosaicFieldProps } from '@root/components/Field';
import { EditorWrapper } from './TextEditor.styled';
import JoditEditor from 'jodit-react';
import { TextEditorDef } from './TextEditorTypes';

const TextEditor = (props: MosaicFieldProps<TextEditorDef, string>): ReactElement => {
	const {
		fieldDef,
		onChange,
		onBlur,
		value,
		error,
	} = props;

	const editor = useRef(null);

	const buttonList = [
		'source',
		'|',
		'bold',
		'italic',
		'underline',
		'strikethrough',
		'superscript',
		'subscript',
		'paragraph',
		'fontsize',
		'font',
		'ul',
		'ol',
		'indent',
		'outdent',
		'left',
		'center',
		'right',
		'justify',
		'link',
		'image',
		'eraser',
		'undo',
		'redo',
	];

	const config = {
		namespace: '',
		disabled: fieldDef?.disabled,
		buttonsXS: buttonList,
		buttons: buttonList,
		buttonsSM: buttonList,
		buttonsMD: buttonList,
		buttonsLG: buttonList,
		spellcheck: fieldDef?.inputSettings?.spellcheck ? fieldDef?.inputSettings?.spellcheck : false,
		direction: fieldDef?.inputSettings?.direction ? fieldDef?.inputSettings?.direction : 'ltr',
		language: fieldDef?.inputSettings?.language ? fieldDef?.inputSettings?.language : 'en',
		limitChars: fieldDef?.inputSettings?.maxCharacters ? fieldDef?.inputSettings?.maxCharacters : undefined,
	}

	const updateValue = async (e: string) => {
		await onChange(e);
		await onBlur(e);
	}

	return (
		<EditorWrapper error={error}>
			<JoditEditor
				ref={editor}
				value={value}
				config={config}
				onBlur={(e) => updateValue(e)}
			/>
		</EditorWrapper>
	);
};

export default memo(TextEditor);