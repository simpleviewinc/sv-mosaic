import * as React from 'react';
import { ReactElement } from 'react';
import {
  ErrorTextWrapper,
  StyledErrorIcon,
  StyledText,
} from './HelperText.styled';

const HelperText = ({ children, error = false }): ReactElement => {
  return error ? (
    <ErrorTextWrapper>
      <StyledErrorIcon />
      <StyledText error={error}>{children}</StyledText>
    </ErrorTextWrapper>
  ) : (
    <StyledText error={error}>{children}</StyledText>
  );
};

export default HelperText;
