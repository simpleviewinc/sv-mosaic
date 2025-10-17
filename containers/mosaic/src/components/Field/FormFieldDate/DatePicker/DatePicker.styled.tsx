import styled from "styled-components";
import theme from "@root/theme";
import { StyledTextField } from "../../FormFieldText/FormFieldText.styled";

export const popperSx = {
	"& .MuiPaper-root": {
		borderRadius: theme.rounded.md,
		border: "none",
		boxShadow: `var(--mos-border-light),
			0 34px 60px 0 rgba(0, 0, 0, 0.15),
			var(--mos-shadow-xl);`,
	},

	"& .MuiPickersDay-today": {
		fontWeight: theme.weight.medium,
		borderColor: theme.color.gray[200],
	},

	"& .MuiPickersDay-root": {
		background: "none",
		width: 34,
		height: 34,
		margin: "1px 3px",

		"&:hover": {
			backgroundColor: theme.color.gray[100],
		},

		"&:focus-visible": {
			outline: `2px solid ${theme.color.gray[700]}`,
			outlineOffset: "1px",
		},
	},

	"& .MuiPickersDay-root.Mui-selected" : {
		backgroundColor: theme.color.gold[400],
		color: "inherit",
		fontWeight: theme.weight.medium,

		"&:focus": {
			backgroundColor: theme.color.gold[300],
		},
	},
};

export const DatePickerTextField = styled(StyledTextField)`
	width: 100%;
`;
