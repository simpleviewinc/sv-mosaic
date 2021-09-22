import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { StyledFieldContainer, StyledFieldWrapper } from './Field.styled';

import { default as Label } from './Label';
import { default as HelperText } from './HelperText';
import { default as InstructionText } from './InstructionText';
import { FieldProps } from '.';

interface FieldWrapperProps extends FieldProps {
	children: ReactNode;
}

const Field = ({
	children,
	error = false,
	disabled,
	required,
	label,
	helperText,
	errorText,
	instructionText,
}: FieldWrapperProps): ReactElement => {
	const errorWithMessage = error && errorText.trim().length > 0;

	const renderBottomText = () => {
		if((errorWithMessage || (errorWithMessage && required))) {
			return <HelperText error={error}>{errorText}</HelperText>;
		} else if (helperText) {
			console.log(helperText);
			return <HelperText>{helperText}</HelperText>;
		}
	}

	return (
		<StyledFieldContainer>
			<StyledFieldWrapper error={errorWithMessage || (errorWithMessage && required)}>
				<Label disabled={disabled} required={required}>
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
