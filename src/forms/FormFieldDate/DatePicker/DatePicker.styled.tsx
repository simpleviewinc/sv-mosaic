import styled from "styled-components";
import theme from "@root/theme";
import { Sizes } from "@root/theme";

export const popperSx = {
	"& .MuiPaper-root": {
		border: `2px solid ${theme.colors.gray200}`,
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
		color: theme.newColors.grey4["100"]
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
	}
};

export const DisabledDateTimeValue = styled.span`
	color: ${theme.newColors.almostBlack["100"]};
	font-family: ${theme.fontFamily};
	font-size: 16px;
`;

export const DatePickerWrapper = styled.div`
  	.MuiOutlinedInput-root {
		background-color: ${theme.newColors.grey1["100"]};
		width: ${Sizes.sm};
		padding-right: 16px;

		&:hover {
			background-color: ${theme.colors.gray200};
			& fieldset {
				border-color: ${theme.newColors.simplyGrey["100"]};
			}
		}

		& fieldset {
			border-radius: 0;
			border: ${pr => pr.isPickerOpen ? `1px solid ${theme.newColors.almostBlack["100"]}` : theme.borders.simplyGrey};
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
		color: ${pr => pr.isPickerOpen ? theme.newColors.almostBlack["100"] : theme.newColors.grey3["100"]};
	}
`;
