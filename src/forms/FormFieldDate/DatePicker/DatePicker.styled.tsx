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
		color: theme.colors.almostBlack,
		fontFamily: theme.fontFamily,

		"&:hover": {
			color: theme.newColors.realTeal["100"],
			backgroundColor: theme.colors.tealOpacity,
			fontWeight: theme.fontWeight.bold,
		},
	},

	"& .MuiIconButton-edgeStart, .MuiIconButton-edgeEnd" : {
		color: theme.colors.gray700
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
	color: ${theme.colors.almostBlack};
	font-family: ${theme.fontFamily};
	font-size: 16px;
`;

export const DatePickerWrapper = styled.div`
  	.MuiOutlinedInput-root {
		background-color: ${theme.colors.gray100};
		width: ${Sizes.sm};
		padding-right: 16px;

		&:hover {
			background-color: ${theme.colors.gray200};
			& fieldset {
				border-color: ${theme.colors.simplyGray};
			}
		}

		& fieldset {
			border-radius: 0;
			border: ${pr => pr.isPickerOpen ? `1px solid ${theme.colors.almostBlack}` : `1px solid ${theme.colors.simplyGray}`};
		}

			.MuiOutlinedInput-input {
				height: ${theme.fieldSpecs.inputText.height};
				padding: ${theme.fieldSpecs.inputText.padding};
			}

		&.Mui-focused fieldset {
			border-color: ${theme.colors.almostBlack};
			border-width: 1px;
		}
  	}

	.MuiIconButton-root {
		color: ${pr => pr.isPickerOpen ? theme.colors.almostBlack : theme.colors.gray600};
	}
`;
