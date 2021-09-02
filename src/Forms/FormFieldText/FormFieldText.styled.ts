import styled from 'styled-components';

// Material UI
import TextField from '@material-ui/core/TextField';

//Styles & Types
import {
	StyledWrapperProps,
	StyledTextInputProps,
} from './FormFieldTextTypes';
import theme from '../../utils/theme.js';

export const TextFieldWrapper = styled.div<StyledWrapperProps>`
  padding: 20px;
  background: ${pr => pr.error ? theme.colors.errorBackground : 'transparent'};
`;

export const StyledTextField = styled<StyledTextInputProps>(TextField)`
  width: ${pr => pr.size};

  input,
  .MuiOutlinedInput-adornedStart,
  .MuiOutlinedInput-multiline {
    background-color: #fafafa;

    &:hover {
      background-color: ${pr => pr.disabled ? 'transparent' : theme.colors.grayHover}
    }
  }

  .MuiOutlinedInput-multiline, input.MuiOutlinedInput-input {
	padding: ${pr => pr.disabled ? 0 : '15.5px 14px'};
  }

  input.MuiOutlinedInput-input {
    height: 20px;
  }

  input,
  .MuiOutlinedInput-multiline {
    font-family: ${theme.fontFamily};
  }

  .MuiInputBase-root {
    line-height: 1.3em;
  }

  .MuiFormHelperText-contained {
    font-family: ${theme.fontFamily};
    margin-top: ${pr => pr.error ? '9px' : '7px'};
    margin-left: 0;
    word-break: break-all;
  }

  .MuiInputBase-input.Mui-disabled {
    background-color: transparent;
    color: #1A1A1A;
  }

  .MuiFormHelperText-root.Mui-error {
    color: #B10000
  }

  fieldset {
    border-radius: 0px;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #1A1A1A;
    }
  }

  .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: ${pr => pr.error && !pr.disabled ? theme.colors.red : 'transparent'};
  }

  .MuiOutlinedInput-adornedStart {
    background-color: ${pr => pr.disabled ? '#fff' : '#fafafa'};
	padding: ${pr => pr.disabled && 0};
  }
`;

export const StyledHelperText = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  display: flex;
`
export const StyledInstructionalText = styled.span`
  font-family:  ${theme.fontFamily};
  padding-left: 40px;
  max-width: 300px;
  word-break: break-all;
  align-self: stretch;
  display: flex;
  align-items: center;
  background: ${pr => pr.error ? '#B100000D' : 'transparent'};
  padding-right: 20px;
`
