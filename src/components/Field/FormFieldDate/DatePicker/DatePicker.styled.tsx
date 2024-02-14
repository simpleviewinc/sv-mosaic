import styled from "styled-components";
import theme from "@root/theme";
import TextField from "@mui/material/TextField";

export const popperSx = {
	"& .MuiPaper-root": {
		border: `2px solid ${theme.newColors.grey2["100"]}`,
		boxShadow: "0px 1px 5px rgba(26, 26, 26, 0.161)",
	},

	"& .MuiPickersDay-today": {
		color: `${theme.newColors.realTeal["100"]} !important`,
		border: "none !important",
		fontFamily: theme.fontFamily,
		fontWeight: theme.fontWeight.bold,
		backgroundColor: "transparent !important",

		"&:hover": {
			color: theme.newColors.realTeal["100"],
			backgroundColor: `${theme.colors.tealOpacity} !important`,
		},
	},

	"& .MuiPickersDay-dayWithMargin": {
		color: theme.newColors.almostBlack["100"],
		fontFamily: theme.fontFamily,

		"&:hover": {
			color: theme.newColors.realTeal["100"],
			backgroundColor: theme.colors.tealOpacity,
			fontWeight: theme.fontWeight.bold,
		},
	},

	"& .MuiIconButton-edgeStart, .MuiIconButton-edgeEnd" : {
		color: theme.newColors.grey4["100"],
	},

	"& .MuiPickersDay-root.Mui-selected" : {
		backgroundColor: `${theme.newColors.realTeal["100"]} !important`,
		color: "#FFFF !important",
		fontWeight: theme.fontWeight.bold,

		"&:hover": {
			color: "#FFFF !important",
			backgroundColor: `${theme.newColors.realTeal["100"]} !important`,
		},
	},

	"& .MuiCalendarPicker-root > div:first-of-type" : {
		marginBottom: "16px",
		paddingLeft: "16px",
		paddingRight: "16px",
	},
};

export const DatePickerWrapper = styled.div<{ $isPickerOpen?: boolean; $disabled?: boolean }>`
	min-width: 0;

  	.MuiOutlinedInput-root {
		padding-right: 16px;

		& fieldset {
			border-radius: 0;
			border: ${({ $isPickerOpen }) => $isPickerOpen ? `1px solid ${theme.newColors.almostBlack["100"]}` : theme.borders.simplyGrey};
		}

		${({ $disabled }) => !$disabled ? `
			background-color: ${theme.newColors.grey1["100"]};
			&:hover {
				& fieldset {
					border-color: ${theme.newColors.simplyGrey["100"]};
				}
			}
		` : `
			background-color: ${theme.colors.disableBackground};
		`}

		&.Mui-disabled fieldset.MuiOutlinedInput-notchedOutline{
			border-color: ${theme.colors.disableBorder};
		}

		.MuiOutlinedInput-input {
			height: ${theme.fieldSpecs.inputText.height};
			padding: ${theme.fieldSpecs.inputText.padding};
		}

		&.Mui-focused fieldset {
			border-color: ${theme.newColors.almostBlack["100"]};
			border-width: 1px;
		}
  	}

	.MuiIconButton-root {
		color: ${({ $isPickerOpen }) => $isPickerOpen ? theme.newColors.almostBlack["100"] : theme.newColors.grey3["100"]};
	}
`;

export const DatePickerTextField = styled(TextField)`
	width: 100%;
`;
