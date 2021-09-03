import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { StyledInputWrapper } from './InputWrapper.styled';

interface InputWrapperProps {
  children: ReactNode;
}

const InputWrapper = ({ children }: InputWrapperProps): ReactElement => {
	return <StyledInputWrapper>{children}</StyledInputWrapper>;
};

export default InputWrapper;
