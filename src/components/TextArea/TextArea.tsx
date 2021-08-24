import * as React from 'react';
import { ReactElement, HTMLAttributes } from 'react';

// Material UI
import { InputLabel } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// Types and styles
import { TextAreaProps } from './TextAreaTypes';
import {
	CharCounterWrapper,
	StyledTextArea,
	StyledHelperText,
	StyledWrapper,
	LabelWrapper,
	TextAreaWrapper,
	StyledInstructionalText,
} from './TextArea.styled';
import { Sizes } from '../../theme/sizes';


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
				<LabelWrapper size={size} disabled={disabled}>
					<InputLabel required={required} shrink htmlFor={htmlFor}>
						{label}
					</InputLabel>
					<CharCounterWrapper>
						{maxCharacters > 0 && `${value.length}/${maxCharacters}`}
					</CharCounterWrapper>
				</LabelWrapper>
				<StyledTextArea
					id={htmlFor}
					value={value}
					onChange={onChange}
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
