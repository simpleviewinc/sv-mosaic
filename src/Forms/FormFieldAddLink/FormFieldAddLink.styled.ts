import styled from 'styled-components';
import theme from '@root/theme';

// Components
import TextField from '@root/forms/FormFieldText';

export const StyledSpan = styled.span`
  color: ${theme.colors.almostBlack};
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontWeight.bold};
  font-size: 16px;
`;

export const StyledTextField = styled(TextField)`
  .MuiInputAdornment-positionStart {
    margin-right: 0;
  }

  input.MuiOutlinedInput-input {
    padding-left: 12px;
  }
`;
