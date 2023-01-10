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
    background-color: ${pr => pr.disabled ? "#fff" : theme.newColors.grey1["100"]};
    &:hover {
    	background-color: ${pr => pr.disabled ? "transparent" : theme.colors.grayHover};
		& fieldset {
			border-color: ${theme.newColors.simplyGrey["100"]};
		}
    }

	& svg {
		color: ${theme.newColors.almostBlack["100"]};
	}
  }

  .MuiOutlinedInput-multiline, input.MuiOutlinedInput-input {
    padding: ${pr => pr.disabled ? 0 : theme.fieldSpecs.inputText.padding};
  }

  input.MuiOutlinedInput-input {
    color: ${theme.newColors.almostBlack["100"]};
    height: ${theme.fieldSpecs.inputText.height};
	font-weight: 400;
	::placeholder {
		font-weight: ${theme.fontWeight.normal};
		font-size: 16px;
		color: ${theme.newColors.grey3["100"]};
		opacity: 1;
	}
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
    color: ${theme.newColors.almostBlack["100"]};
  }

  .MuiFormHelperText-root.Mui-error {
    color: ${theme.newColors.darkRed["100"]}
  }

  fieldset {
    border-radius: 0px;
	border-color: ${theme.newColors.simplyGrey["100"]};
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${theme.newColors.almostBlack["100"]};
	  border-width: 1px;
	  box-shadow: ${theme.fieldSpecs.inputText.shadow};
    }
  }

  .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: ${pr => pr.error && !pr.disabled ? theme.newColors.darkRed["100"] : "transparent"};
  }
`;
