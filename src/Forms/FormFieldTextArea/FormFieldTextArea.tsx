import * as React from 'react';
import { ReactElement, HTMLAttributes } from 'react';

// Material UI
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// Types and styles
import { TextAreaProps } from './FormFieldTextAreaTypes';
import {
	StyledTextArea,
	StyledHelperText,
	StyledWrapper,
	TextAreaWrapper,
	StyledInstructionalText,
} from './FormFieldTextArea.styled';
import { Sizes } from '../../theme/sizes';
import { Label } from '@root/components/Typography';


const TextArea = (
	props: TextAreaProps & HTMLAttributes<HTMLInputElement>
): ReactElement => {
	const {
		label,
		htmlFor,
		placeholder,
		required,
		disabled,
		helperText,
		maxCharacters,
		instructionalText,
		error,
		errorText,
		value,
		className,
		size = Sizes.lg,
		onChange
	} = props;

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
		<StyledWrapper>
			<TextAreaWrapper error={error} size={size}>
				<Label
					disabled={disabled}
					required={required}
					htmlFor={htmlFor}
					value={value}
					maxCharacters={maxCharacters}
				>
					{label}
				</Label>
				<StyledTextArea
					id={htmlFor}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					variant='outlined'
					error={error}
					helperText={renderedHelperText}
					className={className}
					placeholder={placeholder}
					disabled={disabled}
					multiline
					size={size}
					inputProps={{ maxLength: maxCharacters > 0 ? maxCharacters : null }}
					required={required}
				/>
			</TextAreaWrapper>
			{instructionalText && <StyledInstructionalText error={error}>{instructionalText}</StyledInstructionalText>}
		</StyledWrapper>
	);
};

export default TextArea;
