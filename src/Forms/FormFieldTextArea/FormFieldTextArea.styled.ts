import styled from 'styled-components';

// Material UI
import TextField from '@material-ui/core/TextField';

//Styles & Types
import {
	StyledTextAreaProps,
} from './FormFieldTextAreaTypes';
import theme from '../../utils/theme.js';

export const TextAreaWrapper = styled.div`
  font-family: ${theme.fontFamily};
  width: ${pr => pr.size};
  padding: 20px;
  background-color: ${pr => pr.error ? theme.colors.lightRed : 'transparent'};
`;

export const StyledTextArea = styled<StyledTextAreaProps>(TextField)`
  width: ${pr => pr.size};

  .MuiOutlinedInput-multiline {
    align-items: start;
    background-color: ${pr => pr.disabled && !pr.error ? 'transparent' : theme.colors.gray100};
    min-height: ${pr => pr.disabled ? 'fit-content' : '150px'};
    padding: ${pr => pr.disabled && 0};

    &:hover {
      background-color: ${pr => pr.disabled ? '#FFF' : theme.colors.grayHover}
    }
  }

  .MuiOutlinedInput-multiline {
    font-family: ${theme.fontFamily};
  }

  .MuiFormHelperText-contained {
    font-family: inherit;
    margin-top: ${pr => pr.error ? '9px' : '7px'};
    margin-left: 0;
    word-wrap: break-word;
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

export const StyledHelperText = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledInstructionalText = styled.div`
  font-family:  ${theme.fontFamily};
  padding-left: 40px;
  max-width: 300px;
  word-wrap: break-word;
  align-self: stretch;
  display: flex;
  align-items: center;
  background: ${pr => pr.error ? theme.colors.lightRed : 'transparent'};
  padding-right: 20px;
`;
