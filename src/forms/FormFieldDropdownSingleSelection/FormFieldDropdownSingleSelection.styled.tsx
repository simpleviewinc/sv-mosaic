import styled from "styled-components";
import theme from "@root/theme";
import { Sizes } from "@root/theme";

// Components
import { default as MUIAutocomplete } from "@mui/material/Autocomplete";
import Popper from "@mui/material/Popper";

export const StyledAutocomplete = styled(MUIAutocomplete)`
  & .MuiFormControl-root .MuiInputBase-root {
    background-color: ${theme.newColors.grey1["100"]};
	font-family: ${theme.fontFamily};
	color: ${theme.newColors.almostBlack["100"]};
    &:hover {
      background-color: ${theme.newColors.grey2["100"]}
    }
  }

  & .MuiFormControl-root .MuiInputBase-root .MuiOutlinedInput-notchedOutline {
    border: ${(pr) =>
		pr.error ? theme.borders.error : theme.borders.fieldGray};
    border-radius: 0px;
  }

  &
    .MuiFormControl-root
    .MuiInputBase-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: solid 1px ${theme.colors.gray800};
  }

  .MuiAutocomplete-clearIndicator {
    margin-right: 20px;
  }

  &.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
    padding-right: 88px;
  }

  .MuiAutocomplete-popupIndicator, .MuiAutocomplete-popupIndicatorOpen {
    color: ${pr => (pr.error ? theme.newColors.darkRed["100"] : theme.newColors.almostBlack["100"])};

    &:before {
      background: none;
      content: "";
      display: block;
      position: absolute;
      top: 4px;
      left: -12px;
      right: -12px;
      bottom: 4px;
      border-right: ${pr => pr.open ? theme.borders.fieldGray : ""};
      border-left: ${pr => !pr.open ? theme.borders.fieldGray : ""};
    }
  }
`;

export const StyledDisabledDropdownText = styled.p`
  font-size: 16px;
  color: ${theme.newColors.grey3["100"]};
  margin-top: 15px;
`;

export const SingleDropdownWrapper = styled.div`
  margin: 0;
  padding: 0;

  .MuiFormControl-fullWidth {
    height: ${theme.fieldSpecs.inputText.totalHeight};
    width: ${pr => (pr.innerWidth ? pr.innerWidth : Sizes.sm)};
  }

  .MuiAutocomplete-paper {
    width: ${pr => pr.innerWidth === Sizes.xs ? Sizes.sm : pr.innerWidth }
  }
`;

export const StyledPopper = styled(Popper)`
  z-index: 999999999 !important;
  .MuiAutocomplete-listbox .MuiAutocomplete-option {
    font-family: ${theme.fontFamily};
    font-size: 14px;
    min-height: 40px;
    color: ${theme.newColors.grey4["100"]};
		background-color: white;

    &[aria-selected='true'] {
			color: ${({ value }) => value ? theme.newColors.grey4["100"] : theme.colors.black };
			font-weight: ${({ value }) => value ? null : theme.fontWeight.semiBold};
			background-color: white;
    }

		&[aria-selected="true"].Mui-focused {
			background-color: ${theme.newColors.grey2["100"]};
		}
  }
`;
