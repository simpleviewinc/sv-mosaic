import * as React from 'react';
import { ReactElement, HTMLAttributes, memo } from 'react';

// Material UI
import { InputAdornment } from '@material-ui/core';

// Types and styles
import { TextFieldProps } from './FormFieldTextTypes';
import { StyledTextField } from './FormFieldText.styled';

const TextField = (
	props: TextFieldProps & HTMLAttributes<HTMLInputElement>
): ReactElement => {
	const {
		name,
		inputSettings,
		className,
		disabled = false,
		error,
		required,
		onChange,
		onBlur,
		value,
	} = props;

	const leadingElement = inputSettings?.prefixElement
		? {
			startAdornment: (
				<InputAdornment position='start'>{inputSettings?.prefixElement}</InputAdornment>
			),
		}
		: null;

	const errorWithMessage = error?.trim().length > 0;

	return (
		<StyledTextField
			id={name}
			value={value}
			// value={inputSettings?.value}
			onChange={(e) => onChange(e.target.value)}
			onBlur={(e) => onBlur(e.target.value)}
			variant='outlined'
			error={(errorWithMessage || (errorWithMessage && required))}
			className={className}
			placeholder={inputSettings?.placeholder}
			disabled={disabled}
			multiline={inputSettings?.multiline}
			size={inputSettings?.size}
			inputProps={{ maxLength: inputSettings?.maxCharacters > 0 ? inputSettings?.maxCharacters : null }}
			InputProps={leadingElement}
			required={required}
			type={inputSettings?.type}
		/>
	);
};

export default memo(TextField);
