import styled from "styled-components";
import theme from "@root/theme";
import { Sizes } from "@root/theme";

// Components
import { default as MUIAutocomplete } from "@mui/material/Autocomplete";
import Popper from "@mui/material/Popper";
import type { FieldDef } from "@root/components/Field";

export const StyledAutocomplete = styled(MUIAutocomplete)<{ $error?: boolean }>`
  & .MuiFormControl-root .MuiInputBase-root {
    color: ${theme.newColors.almostBlack["100"]};

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
  }

  & .MuiFormControl-root .MuiInputBase-root .MuiOutlinedInput-notchedOutline {
    ${({ disabled, $error }) => disabled ? `
      border-color: ${theme.colors.disableBorder};
    ` : $error ? `
      ${theme.borders.error};
    ` : `
      ${theme.borders.fieldGray};
    `}

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

  .MuiInputBase-input {
    padding: ${theme.fieldSpecs.inputText.padding} !important;
  }

  & .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    padding-left: 0 !important;
  }

  &.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
    padding-right: 88px;
  }

  .MuiAutocomplete-popupIndicator, .MuiAutocomplete-popupIndicatorOpen {
    color: ${({ $error }) => ($error ? theme.newColors.darkRed["100"] : theme.newColors.almostBlack["100"])};

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

export const SingleDropdownWrapper = styled.div<{ $innerWidth: FieldDef["size"] }>`
  margin: 0;
  padding: 0;

  .MuiFormControl-fullWidth {
    height: ${theme.fieldSpecs.inputText.totalHeight};
    width: ${({ $innerWidth }) => ($innerWidth ? $innerWidth : Sizes.sm)};
  }

  .MuiAutocomplete-paper {
    width: ${({ $innerWidth }) => $innerWidth === Sizes.xs ? Sizes.sm : $innerWidth }
  }
`;

export const StyledPopper = styled(Popper)`
  z-index: 999999999 !important;
  .MuiAutocomplete-listbox .MuiAutocomplete-option {
    font-size: 14px;
    min-height: 40px;
    color: ${theme.newColors.grey4["100"]};
		background-color: white;

    &[aria-selected='true'] {
			color: ${theme.newColors.grey4["100"]};
			font-weight: ${theme.weight.medium};
			background-color: white;
    }

		&[aria-selected="true"].Mui-focused {
			background-color: ${theme.newColors.grey2["100"]};
		}
  }
`;
