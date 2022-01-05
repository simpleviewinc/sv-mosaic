import * as React from 'react';
import styled from 'styled-components';

// Material UI
import TextField from '@material-ui/core/TextField';

//Styles & Types
import theme from '@root/theme';
import { Sizes } from '@root/theme/sizes';

export const StyledTextArea = styled(({ fieldSize, ...rest }) => (
	<TextField {...rest} />
))`
  width: ${pr => pr.fieldSize ? pr.fieldSize : Sizes.sm};

  .MuiOutlinedInput-multiline {
    align-items: start;
    background-color: ${pr => pr.disabled ? 'transparent' : theme.colors.gray100};
    min-height: ${pr => pr.disabled ? 'fit-content' : '150px'};
    padding: ${pr => pr.disabled && 0};

    &:hover {
      background-color: ${pr => pr.disabled ? 'transparent' : theme.colors.grayHover}
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
    background-color: transparent;
    color: ${theme.colors.almostBlack};
  }

  .MuiFormHelperText-root {
    color: ${pr => pr.error ? theme.colors.red : theme.colors.assistiveText};
  }

  fieldset {
    border-radius: 0px;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${theme.colors.almostBlack};
    }
  }

  .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: ${pr => pr.error && !pr.disabled ? theme.colors.red : 'transparent'};
  }
`;
