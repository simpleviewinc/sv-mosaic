import * as React from 'react';
import { ReactElement, HTMLAttributes, memo } from 'react';

// Material UI
import { InputAdornment } from '@material-ui/core';

// Types and styles
import { TextFieldProps } from './FormFieldTextTypes';
import { StyledTextField } from './FormFieldText.styled';
import Field from '@root/components/Field';

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

	const leadingIcon = inputSettings?.icon
		? {
			startAdornment: (
				<InputAdornment position='start'>{inputSettings?.icon}</InputAdornment>
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
			InputProps={leadingIcon}
			required={required}
		/>
	);
};

export default memo(TextField);
