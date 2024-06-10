import * as React from "react";
import styled from "styled-components";

// Material UI
import TextField from "@mui/material/TextField";

//Styles & Types
import theme from "@root/theme";

export const StyledTextField = styled(({ fieldSize, ...rest }) => (
	<TextField {...rest} />
))`
	&.MuiFormControl-root {
		${({ disabled }) => !disabled ? (`
			background-color: ${theme.newColors.grey1["100"]};
			&:hover {
				& fieldset {
					border-color: ${theme.colors.disabledBorderFocus};
				}
			}
		`) : (`
			background-color: ${theme.colors.disableBackground};
		`)}

		& svg {
			color: ${theme.newColors.almostBlack["100"]};
		}
	}

	fieldset {
		border-radius: 0px;
		border-color: ${theme.newColors.simplyGrey["100"]};
	}

	& :not(.MuiInputBase-multiline) .MuiOutlinedInput-input,
	& .MuiInputBase-multiline{
		padding: 10px 16px;
	}

	.MuiOutlinedInput-input {
		font-family: ${theme.fontFamily};

		${({ disabled }) => !disabled ? `
			color: ${theme.newColors.almostBlack["100"]};
		` : `
			color: ${theme.colors.disabledTextColor};
		`};

		::placeholder {
			font-weight: ${theme.fontWeight.normal};
			color: ${theme.newColors.grey3["100"]};
			opacity: 1;
		}
	}

	.MuiFormHelperText-contained {
		font-family: ${theme.fontFamily};
		margin-top: ${pr => pr.error ? "9px" : "7px"};
		margin-left: 0;
		word-break: break-all;
	}

	.MuiFormHelperText-root.Mui-error {
		color: ${theme.newColors.darkRed["100"]}
	}

	& .Mui-disabled fieldset.MuiOutlinedInput-notchedOutline{
		border-color: ${theme.colors.disableBorder};
	}

	& .MuiOutlinedInput-root {
		&.Mui-focused fieldset {
			border-color: ${theme.newColors.almostBlack["100"]};
			border-width: 1px;
			box-shadow: ${theme.fieldSpecs.inputText.shadow};
		}
	}

	.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
		border-color: ${pr => pr.error ? theme.newColors.darkRed["100"] : "transparent"};
	}
`;
