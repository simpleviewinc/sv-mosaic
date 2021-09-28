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
import Field from '@root/components/Field';

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
		instructionText,
		errorText,
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

	// let renderedHelperText = helperText && !error ? helperText : null;

	// if (errorText && error) {
	// 	renderedHelperText = (
	// 		<StyledHelperText>
	// 			<ErrorOutlineIcon style={{ fontSize: 16, marginRight: '8px' }} />
	// 			<span>{errorText}</span>
	// 		</StyledHelperText>
	// 	);
	// }

	const errorWithMessage = error && errorText?.trim().length > 0;

	return (
		// <StyledWrapper>
		// 	<TextFieldWrapper error={error}>
		// 		<Label
		// 			disabled={disabled}
		// 			required={required}
		// 			htmlFor={htmlFor}
		// 			value={value}
		// 			maxCharacters={maxCharacters}
		// 		>
		// 			{label}
		// 		</Label>
		// 		<StyledTextField
		// 			id={htmlFor}
		// 			value={value}
		// 			onChange={onChange}
		// 			variant='outlined'
		// 			error={error}
		// 			helperText={renderedHelperText}
		// 			className={className}
		// 			placeholder={placeholder}
		// 			disabled={disabled}
		// 			multiline={multiline}
		// 			size={size}
		// 			inputProps={{ maxLength: maxCharacters > 0 ? maxCharacters : null }}
		// 			InputProps={leadingIcon}
		// 			required={required}
		// 		/>
		// 	</TextFieldWrapper>
		// 	{instructionText && <StyledInstructionalText error={error}>{instructionText}</StyledInstructionalText>}
		// </StyledWrapper>
		<Field
			label={label}
			required={required}
			disabled={disabled}
			error={error}
			errorText={errorText}
			helperText={helperText}
			instructionText={instructionText}
		>
			<StyledTextField
				id={htmlFor}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				variant='outlined'
				error={(errorWithMessage || (errorWithMessage && required))}
				// helperText={renderedHelperText}
				className={className}
				placeholder={placeholder}
				disabled={disabled}
				multiline={multiline}
				size={size}
				inputProps={{ maxLength: maxCharacters > 0 ? maxCharacters : null }}
				InputProps={leadingIcon}
				required={required}
			/>
		</Field>
	);
};

export default TextField;
