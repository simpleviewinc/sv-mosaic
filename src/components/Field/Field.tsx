import * as React from 'react';
import { ReactElement } from 'react';
import { StyledFieldContainer, StyledFieldWrapper } from './Field.styled';

import { default as Label } from './Label';
import { default as HelperText } from './HelperText';
import { default as InstructionText } from './InstructionText';
import { FieldDefProps } from '.';

const Field = ({
	children,
	error = false,
	disabled,
	required,
	label,
	helperText,
	errorText,
	instructionText,
	htmlFor,
	value,
	maxCharacters,
	name
}: FieldDefProps): ReactElement => {
	const errorWithMessage = error && errorText?.trim().length > 0;

	const renderBottomText = () => {
		if ((errorWithMessage || (errorWithMessage && required))) {
			return <HelperText error={error}>{errorText}</HelperText>;
		} else if (helperText) {
			console.log(helperText);
			return <HelperText>{helperText}</HelperText>;
		}
	}

	return (
		<StyledFieldContainer>
			<StyledFieldWrapper error={errorWithMessage || (errorWithMessage && required)}>
				<Label
					disabled={disabled}
					required={required}
					htmlFor={name}
					maxCharacters={maxCharacters}
					value={value}
				>
					{label}
				</Label>
				{children}
				{renderBottomText()}
			</StyledFieldWrapper>
			{instructionText && <InstructionText>{instructionText}</InstructionText>}
		</StyledFieldContainer>
	);
};

export default Field;
