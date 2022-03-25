import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { StyledFieldWrapper } from './FieldWrapper.styled';

interface FieldWrapperProps {
  children: ReactNode;
  error?: boolean;
}

const FieldWrapper = ({
	children,
	error = false,
}: FieldWrapperProps): ReactElement => {
	return <StyledFieldWrapper error={error}>{children}</StyledFieldWrapper>;
};

export default FieldWrapper;
