/* eslint @typescript-eslint/no-empty-interface: 0 */ // --> OFF

/**
 * According to https://material-ui-pickers.dev/guides/css-overrides#typescript
 * to override styles it is  required to extend default material-ui theme typings
 * with pickers controls. That is why the no-empty-interface
 * linter rule is disabled for this file.
 */

import styled from "styled-components";
import theme from "@root/theme";
import { createTheme } from "@material-ui/core/styles";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersOverrides } from "@material-ui/pickers/typings/overrides";
import { Sizes } from "@root/theme/sizes";

type overridesNameToClassKey = {
  [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P];
};

type CustomType = {
  MuiPickersBasePicker: any;
};

declare module "@material-ui/core/styles/overrides" {
  interface ComponentNameToClassKey extends overridesNameToClassKey {}
  export interface ComponentNameToClassKey extends CustomType {}
}

export const customTheme = createTheme({
	overrides: {
		MuiPaper: {
			elevation8: {
				boxShadow: "0px 1px 5px #1A1A1A29",
				width: Sizes.sm,
			},
		},

		MuiPickersBasePicker: {
			pickerView: {
				justifyContent: "none",
				width: Sizes.sm,
				minWidth: "0",
				minHeight: "322px",
				border: `2px solid ${theme.colors.gray200}`,
			},
		},

		MuiPickersCalendarHeader: {
			switchHeader: {
				color: theme.colors.gray600,
				fontFamily: theme.fontFamily,
				marginBottom: "16px",
				marginTop: "16px",
			},

			daysHeader: {
				justifyContent: "none",
			},

			dayLabel: {
				margin: "0",
				textTransform: "uppercase",
				position: "relative",
				width: "auto",

				"&:nth-child(1)": {
					visibility: "hidden",

					"&:after": {
						content: "'S'",
						display: "block",
						visibility: "visible",
						position: "absolute",
						top: 0,
						left: "20px",
					},
				},

				"&:nth-child(2)": {
					visibility: "hidden",
					"&:after": {
						content: "'M'",
						display: "block",
						visibility: "visible",
						position: "absolute",
						top: 0,
						left: "37px",
					},
				},

				"&:nth-child(3)": {
					visibility: "hidden",
					"&:after": {
						content: "'T'",
						display: "block",
						visibility: "visible",
						position: "absolute",
						top: 0,
						left: "54px",
					},
				},

				"&:nth-child(4)": {
					visibility: "hidden",
					"&:after": {
						content: "'W'",
						display: "block",
						visibility: "visible",
						position: "absolute",
						top: 0,
						left: "72px",
					},
				},

				"&:nth-child(5)": {
					visibility: "hidden",
					"&:after": {
						content: "'T'",
						display: "block",
						visibility: "visible",
						position: "absolute",
						top: 0,
						left: "90px",
					},
				},

				"&:nth-child(6)": {
					visibility: "hidden",
					"&:after": {
						content: "'F'",
						display: "block",
						visibility: "visible",
						position: "absolute",
						top: 0,
						left: "109px",
					},
				},

				"&:nth-child(7)": {
					visibility: "hidden",
					"&:after": {
						content: "'S'",
						display: "block",
						visibility: "visible",
						position: "absolute",
						top: 0,
						left: "128px",
					},
				},
			},
		},

		MuiTypography: {
			body1: {
				fontSize: "14px",
			},

			body2: {
				fontSize: "12px",
			},
		},

		MuiPickersCalendar: {
			transitionContainer: {
				marginTop: "16px",
			},

			week: {
				marginBottom: "24px",
				justifyContent: "space-between",
				margin: "0 16px 0 12px",

				"&:last-of-type": {
					marginBottom: "16px",
				},

				"& div:last-of-type .MuiPickersDay-day": {
					marginRight: "0",
				},
			},
		},

		MuiPickersDay: {
			day: {
				color: theme.colors.almostBlack,
				fontFamily: theme.fontFamily,
				height: "24px",
				width: "24px",
				margin: "0 12px 0 0",

				"&:hover": {
					backgroundColor: theme.colors.blueTealOpacity,
				},
			},

			daySelected: {
				backgroundColor: theme.colors.blueTeal,

				"&:hover": {
					backgroundColor: theme.colors.blueTeal,
				},
			},

			current: {
				color: theme.colors.blueTeal,
			},
		},

		MuiFormControl: {
			marginNormal: {
				margin: 0,
			},
		},
	},
});

export const StyledInputPicker = `
  font-family: ${theme.fontFamily};
  width: ${Sizes.sm};

  &.MuiFormControl-marginNormal {
    margin: 0;
  }

  .MuiOutlinedInput-input {
    padding-left: 16px;
  }

  .MuiIconButton-root {
    padding: 8px;
  }

  input,
  .MuiOutlinedInput-adornedEnd {
    background-color: ${theme.colors.gray100};

    &:hover {
      background-color: ${theme.colors.gray200};
    }
  }

  .MuiOutlinedInput-adornedEnd {
    padding-right: 6px;
    &:hover input {
      background-color: ${theme.colors.gray200};
    }
  }

  input.MuiOutlinedInput-input {
    height: 14px;
  }

  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.colors.red};
  }
`;

export const StyledDatePicker = styled(KeyboardDatePicker)`
  ${StyledInputPicker}
`;

export const DisabledDateTimeValue = styled.span`
  color: ${theme.colors.almostBlack};
  font-family: ${theme.fontFamily};
  font-size: 16px;
`;

export const DatePickerWrapper = styled.div`
  input,
  .MuiOutlinedInput-adornedEnd {
    background-color: ${pr => pr.isPickerOpen ? theme.colors.gray200 : theme.colors.gray100};

    &:hover {
      background-color: ${theme.colors.gray200};
    }
  }

  .MuiOutlinedInput-root {
    &:hover {
      background-color: ${theme.colors.gray200};
    }

    & fieldset {
      border-radius: 0;
      border: ${pr => pr.isPickerOpen ? `1px solid ${theme.colors.almostBlack}` : `1px solid ${theme.colors.simplyGray}`};
    }

    &.Mui-focused fieldset {
      border-color: ${theme.colors.almostBlack};
      border-width: 2px;
    }
  }

  .MuiIconButton-root {
    color: ${pr => pr.isPickerOpen ? theme.colors.almostBlack : theme.colors.gray600};
  }
`;
