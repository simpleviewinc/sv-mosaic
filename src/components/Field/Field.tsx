import * as React from 'react';
import { ReactElement, ReactNode, useMemo } from 'react';
import { StyledFieldContainer, StyledFieldWrapper } from './Field.styled';

import { default as Label } from './Label';
import { default as HelperText } from './HelperText';
import { default as InstructionText } from './InstructionText';
import { FieldProps } from '.';

interface FieldWrapperProps extends FieldProps {
	className?: string;
  children: ReactNode;
}

const Field = ({
	className,
	children,
	error = false,
	disabled,
	required,
	label,
	helperText,
	errorText,
	instructionText,
	type,
}: FieldWrapperProps): ReactElement => {
	const errorWithMessage = error && errorText.trim().length > 0;

	const renderBottomText = () => {
		if (errorWithMessage || (errorWithMessage && required)) {
			return <HelperText error={error}>{errorText}</HelperText>;
		} else if (helperText) {
			return <HelperText>{helperText}</HelperText>;
		}
	};

	const labelMargin = useMemo(() => {
		let labelMargin = '8px';
		if (type === 'linkSetup' || type === 'advancedSelection') {
			return labelMargin = '16px';
		}

		return labelMargin
	}, [type]);

	return (
		<StyledFieldContainer className={className}>
			<StyledFieldWrapper
				error={errorWithMessage || (errorWithMessage && required)}
			>
				<Label
					labelMargin={labelMargin}
					disabled={disabled}
					required={required}
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
