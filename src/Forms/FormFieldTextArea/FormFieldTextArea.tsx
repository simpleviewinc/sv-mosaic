import * as React from 'react';
import { ReactElement, HTMLAttributes, memo } from 'react';

// Types and styles
import { TextAreaProps } from './FormFieldTextAreaTypes';
import { StyledTextArea } from './FormFieldTextArea.styled';
import Field from '@root/components/Field';


const TextArea = (
	props: TextAreaProps & HTMLAttributes<HTMLInputElement>
): ReactElement => {
	const {
		inputSettings,
		className,
		disabled = false,
		error,
		required,
		onChange,
		onBlur,
		value,
	} = props;

	const errorWithMessage = error?.trim().length > 0;

	return (
		<StyledTextArea
			id={inputSettings?.htmlFor}
			value={value}
			// value={inputSettings?.value}
			onChange={(e) => onChange(e.target.value)}
			onBlur={(e) => onBlur(e.target.value)}
			variant='outlined'
			error={(errorWithMessage || (errorWithMessage && required))}
			className={className}
			placeholder={inputSettings?.placeholder}
			disabled={disabled}
			multiline
			size={inputSettings?.size}
			inputProps={{ maxLength: inputSettings?.maxCharacters > 0 ? inputSettings?.maxCharacters : null }}
			required={required}
		/>
		// </Field>
	);
};

export default memo(TextArea);
