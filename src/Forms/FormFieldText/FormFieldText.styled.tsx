import * as React from "react";
import styled from "styled-components";

// Material UI
import TextField from "@material-ui/core/TextField";

//Styles & Types
import theme from "@root/theme";
import { Sizes } from "@root/theme/sizes";

export const StyledTextField = styled(({ fieldSize, ...rest }) => (
	<TextField {...rest} />
))`
  width: ${pr => pr.fieldSize ? pr.fieldSize : Sizes.sm};

  &.MuiFormControl-root {
    background-color: ${pr => pr.disabled ? "#fff" : theme.colors.gray100};
    &:hover {
      background-color: ${pr => pr.disabled ? "transparent" : theme.colors.grayHover}
    }
  }

  .MuiOutlinedInput-multiline, input.MuiOutlinedInput-input {
    padding: ${pr => pr.disabled ? 0 : "15.5px 14px"};
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
    margin-top: ${pr => pr.error ? "9px" : "7px"};
    margin-left: 0;
    word-break: break-all;
  }

  .MuiInputBase-input.Mui-disabled {
    background-color: transparent;
    color: ${theme.colors.almostBlack};
  }

  .MuiFormHelperText-root.Mui-error {
    color: ${theme.colors.red}
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
    border-color: ${pr => pr.error && !pr.disabled ? theme.colors.red : "transparent"};
  }
`;
