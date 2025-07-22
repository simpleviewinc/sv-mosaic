import styled from "styled-components";
import theme from "@root/theme";
import { StyledTextField } from "../../FormFieldText/FormFieldText.styled";

export const popperSx = {
	"& .MuiPaper-root": {
		border: `2px solid ${theme.newColors.grey2["100"]}`,
		boxShadow: "0px 1px 5px rgba(26, 26, 26, 0.161)",
	},

	"& .MuiPickersDay-today": {
		color: `${theme.newColors.realTeal["100"]} !important`,
		border: "none !important",
		fontWeight: theme.fontWeight.bold,
		backgroundColor: "transparent !important",

		"&:hover": {
			color: theme.newColors.realTeal["100"],
			backgroundColor: `${theme.colors.tealOpacity} !important`,
		},
	},

	"& .MuiPickersDay-dayWithMargin": {
		color: theme.newColors.almostBlack["100"],

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

export const DatePickerTextField = styled(StyledTextField)`
	width: 100%;
`;
