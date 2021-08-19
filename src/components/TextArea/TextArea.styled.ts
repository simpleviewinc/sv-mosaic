import styled from 'styled-components';

// Material UI
import TextField from '@material-ui/core/TextField';

//Styles & Types
import {
	StyledTextAreaProps,
} from './TextAreaTypes';
import theme from '../../utils/theme.js';

export const TextAreaWrapper = styled.div`
  width: ${pr => pr.width};
  padding: 20px;
  background: ${pr => pr.error ? theme.colors.lightRed : 'transparent'};
`;

export const StyledTextArea = styled<StyledTextAreaProps>(TextField)`
  width: ${pr => pr.width};

  .MuiOutlinedInput-multiline {
    background-color: ${pr => pr.disabled && !pr.error ? 'transparent' : theme.colors.gray100};
    min-height: 150px;
    &:hover {
      background-color: ${pr => pr.disabled ? theme.colors.gray100 : theme.colors.grayHover}
    }
  }

  .MuiOutlinedInput-multiline {
    font-family: ${theme.fontFamily};
  }

  .MuiFormHelperText-contained {
    font-family: ${theme.fontFamily};
    margin-top: ${pr => pr.error ? '9px' : '7px'};
    margin-left: 0;
    word-break: break-all;
  }

  .MuiInputBase-input.Mui-disabled {
    background-color: 'transparent';
    color: ${theme.colors.almostBlack};
  }

  .MuiFormHelperText-root.Mui-error {
    color: ${theme.colors.red};
  }

  fieldset {
    border-radius: 0px;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${theme.colors.almostBlack};
    }
  }

  .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
    border-color: ${pr => pr.error ? theme.colors.red : 'transparent'}
  }

  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.colors.red};
  }
`;

export const CharCounterWrapper = styled.div`
  color: ${theme.colors.gray600};
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
    color:  ${pr => pr.disabled ? theme.colors.labelDisabled : theme.colors.almostBlack};
    word-break: break-all;
  }

  .MuiFormLabel-asterisk {
    color: ${theme.colors.red};;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
`

export const StyledInstructionalText = styled.div`
  font-family:  ${theme.fontFamily};
  padding-left: 40px;
  max-width: 300px;
  word-break: break-all;
  align-self: stretch;
  display: flex;
  align-items: center;
  background: ${pr => pr.error ? theme.colors.lightRed : 'transparent'};
  padding-right: 20px;
`
