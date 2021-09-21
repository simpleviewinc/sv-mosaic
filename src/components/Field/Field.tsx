import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { StyledFieldWrapper } from './Field.styled';

import { default as Label } from './Label';
import { default as HelperText } from './HelperText';
import { default as InstructionText } from './InstructionText';

export interface FieldProps {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  label: string;
  helperText?: string;
  errorText?: string;
  instructionText?: string;
}

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
	return (
		<StyledFieldWrapper error={error}>
			<Label disabled={disabled} required={required}>
					{label}
			</Label>
			{children}
			{errorText && required && error && <HelperText error>{errorText}</HelperText> }
			{helperText && <HelperText>{helperText}</HelperText> }
			{instructionText && <InstructionText>{instructionText}</InstructionText>}
		</StyledFieldWrapper>
	);
};

export default Field;
