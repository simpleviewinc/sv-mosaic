import styled from 'styled-components';

// Material UI
import TextField from '@material-ui/core/TextField';

//Styles & Types
import {
	StyledWrapperProps,
	StyledTextInputProps,
} from './TextFieldTypes';
import theme from '../../utils/theme.js';

export const TextFieldWrapper = styled.div<StyledWrapperProps>`
  width: ${pr => pr.width};
  padding: 20px;
  background: ${pr => pr.error ? '#B100000D' : 'transparent'};
`;

export const StyledTextField = styled<StyledTextInputProps>(TextField)`
  width: ${pr => pr.width};

  input,
  .MuiOutlinedInput-adornedStart,
  .MuiOutlinedInput-multiline {
    background-color: #fafafa;
    &:hover {
      background-color: ${pr => pr.disabled ? '#fff' : '#f0f2f5'}
    }
  }

  .MuiOutlinedInput-multiline, input.MuiOutlinedInput-input {
    padding: 15.5px 14px;
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
    background-color: #fff;
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

  .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
    border-color: ${pr => pr.error ? '#B10000' : 'transparent'}
  }

  .MuiOutlinedInput-adornedStart {
    background-color: ${pr => pr.disabled ? '#fff' : '#fafafa'};
  }

  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #B10000;
  }
`;

export const CharCounterWrapper = styled.div`
  color: #6b6f7c;
  font-family: ${theme.fontFamily};
  align-self: flex-end;
  font-size: 12px;
`;

export const StyledHelperText = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
  width: ${pr => pr.width};

  .MuiInputLabel-root {
    font-family: ${theme.fontFamily};
    font-size: 16px;
    color:  ${pr => pr.disabled ? '#838791' : '#1a1a1a'};
    word-break: break-all;
  }

  .MuiFormLabel-asterisk {
    color: #B10000;
  }
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
