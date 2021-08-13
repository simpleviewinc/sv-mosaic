import * as React from 'react';
import { ReactElement, HTMLAttributes } from 'react';

// Material UI
import { InputAdornment, InputLabel } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// Types and styles
import { TextFieldProps } from './TextFieldTypes';
import {
	CharCounterWrapper,
	StyledMUITextField,
	StyledHelperText,
	StyledWrapper,
	LabelWrapper,
} from './TextField.styled';

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
		width = '100%',
		multiline = false,
		helperText = '',
		maxCharacters,
		required,
	} = props;

	const leadingIcon = icon
		? {
			startAdornment: (
				<InputAdornment position='start'>{icon}</InputAdornment>
			),
		}
		: null;

	let renderedHelperText = helperText ? helperText : null;

	if (helperText && error) {
		renderedHelperText = (
			<StyledHelperText>
				<ErrorOutlineIcon style={{ fontSize: 16, marginRight: '8px' }} />
				<span>{helperText}</span>
			</StyledHelperText>
		);
	}

	return (
		<StyledWrapper error={error} width={width}>
			<LabelWrapper width={width}>
				<InputLabel required={required} shrink htmlFor={htmlFor}>
					{label}
				</InputLabel>
				<CharCounterWrapper width={width}>
					{maxCharacters > 0 ? `${value.length}/${maxCharacters}` : null}
				</CharCounterWrapper>
			</LabelWrapper>
			<StyledMUITextField
				id={htmlFor}
				value={value}
				onChange={onChange}
				variant='outlined'
				error={error}
				helperText={renderedHelperText}
				className={className}
				placeholder={placeholder}
				disabled={disabled}
				multiline={multiline}
				width={width ? width : '100%'}
				inputProps={{ maxLength: maxCharacters > 0 ? maxCharacters : null }}
				InputProps={leadingIcon}
				required={required}
			/>
		</StyledWrapper>
	);
};

export default TextField;
