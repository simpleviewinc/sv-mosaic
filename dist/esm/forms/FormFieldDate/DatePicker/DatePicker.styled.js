import styled from "styled-components";
import theme from "../../../theme";
import { Sizes } from "../../../theme";
export const popperSx = {
    "& .MuiPaper-root": {
        border: `2px solid ${theme.colors.gray200}`,
        boxShadow: "0px 1px 5px rgba(26, 26, 26, 0.161)",
    },
    "& .MuiPickersDay-dayWithMargin": {
        color: theme.colors.almostBlack,
        fontFamily: theme.fontFamily,
        "&:hover": {
            color: theme.colors.blueTeal,
            backgroundColor: theme.colors.blueTealOpacity,
        },
    },
    "& .MuiIconButton-edgeStart, .MuiIconButton-edgeEnd": {
        color: theme.colors.gray700
    },
    "& .MuiPickersDay-root.Mui-selected": {
        backgroundColor: `${theme.colors.blueTeal} !important`,
        "&:hover": {
            color: "#FFFF",
            backgroundColor: `${theme.colors.blueTeal} !important`,
        },
    }
};
export const DisabledDateTimeValue = styled.span `
  color: ${theme.colors.almostBlack};
  font-family: ${theme.fontFamily};
  font-size: 16px;
`;
export const DatePickerWrapper = styled.div `
  .MuiOutlinedInput-root {
		background-color: ${theme.colors.gray100}
		height: 51px;
		width: ${Sizes.sm};

    &:hover {
      background-color: ${theme.colors.gray200};
    }

    & fieldset {
      border-radius: 0;
      border: ${pr => pr.isPickerOpen ? `1px solid ${theme.colors.almostBlack}` : `1px solid ${theme.colors.simplyGray}`};
    }

		.MuiOutlinedInput-input {
			padding-left: 16px;
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
