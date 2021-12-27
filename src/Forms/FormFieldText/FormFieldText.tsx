import * as React from 'react';
import { ReactElement, HTMLAttributes } from 'react';

// Material UI
import { InputAdornment } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// Types and styles
import { TextFieldProps } from './FormFieldTextTypes';
import {
	StyledTextField,
	StyledHelperText,
	StyledWrapper,
	TextFieldWrapper,
	StyledInstructionalText,
} from './FormFieldText.styled';
import { Label } from '@root/components/Typography';

const TextField = (
	props: TextFieldProps & HTMLAttributes<HTMLInputElement>
): ReactElement => {
	const {
		label = '',
		htmlFor,
		icon,
		className,
		disabled = false,
		error = false,
		value,
		onChange,
		placeholder = '',
		size,
		multiline = false,
		helperText = '',
		instructionalText,
		errorText,
		maxCharacters,
		required,
		name,
		type
	} = props;

	const leadingIcon = icon
		? {
			startAdornment: (
				<InputAdornment position='start'>{icon}</InputAdornment>
			),
		}
		: null;

	let renderedHelperText = helperText && !error ? helperText : null;

	if (errorText && error) {
		renderedHelperText = (
			<StyledHelperText>
				<ErrorOutlineIcon style={{ fontSize: 16, marginRight: '8px' }} />
				<span>{errorText}</span>
			</StyledHelperText>
		);
	}

	return (
		<StyledWrapper className={className}>
			<TextFieldWrapper error={error}>
				<Label
					disabled={disabled}
					required={required}
					htmlFor={htmlFor}
					value={value}
					maxCharacters={maxCharacters}
				>
					{label}
				</Label>
				<StyledTextField
					id={htmlFor}
					value={value}
					onChange={onChange}
					variant='outlined'
					error={error}
					name={name}
					helperText={renderedHelperText}
					className={className}
					placeholder={placeholder}
					disabled={disabled}
					multiline={multiline}
					size={size}
					inputProps={{ maxLength: maxCharacters > 0 ? maxCharacters : null }}
					InputProps={leadingIcon}
					required={required}
					type={type}
				/>
			</TextFieldWrapper>
			{instructionalText && <StyledInstructionalText error={error}>{instructionalText}</StyledInstructionalText>}
		</StyledWrapper>
	);
};

export default TextField;
