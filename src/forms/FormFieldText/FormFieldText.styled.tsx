import * as React from "react";
import styled from "styled-components";

// Material UI
import TextField from "@mui/material/TextField";

//Styles & Types
import theme, { Sizes } from "@root/theme";

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
    padding: ${pr => pr.disabled ? 0 : theme.inputText.padding};
  }

  input.MuiOutlinedInput-input {
    height: ${theme.inputText.height};
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
