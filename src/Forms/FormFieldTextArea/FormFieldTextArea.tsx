import * as React from 'react';
import { ReactElement, memo } from 'react';

// Types and styles
import { TextAreaDef } from './FormFieldTextAreaTypes';
import { StyledTextArea } from './FormFieldTextArea.styled';
import { MosaicFieldProps } from '@root/components/Field';

const TextArea = (
	props: MosaicFieldProps<TextAreaDef>
): ReactElement => {
	const {
		fieldDef,
		className,
		error,
		onChange,
		onBlur,
		value,
	} = props;

	const errorWithMessage = error?.trim().length > 0;

	return (
		<StyledTextArea
			id={fieldDef?.inputSettings?.htmlFor}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			onBlur={(e) => onBlur(e.target.value)}
			variant='outlined'
			error={(errorWithMessage || (errorWithMessage && fieldDef?.required))}
			className={className}
			placeholder={fieldDef?.inputSettings?.placeholder}
			disabled={fieldDef?.disabled}
			multiline
			size={fieldDef?.inputSettings?.size}
			inputProps={{ maxLength: fieldDef?.inputSettings?.maxCharacters > 0 ? fieldDef?.inputSettings?.maxCharacters : null }}
			required={fieldDef?.required}
		/>
	);
};

export default memo(TextArea);
