import styled from "styled-components";

// Theme
import theme from "@root/theme";
import Autocomplete from "@mui/material/Autocomplete";
import { StyledTextField } from "../FormFieldText/FormFieldText.styled";
import Popper from "@mui/material/Popper";

export const PhoneInputWrapper = styled.div<{ $error?: boolean; $disabled?: boolean }>`
  .react-tel-input {
    .form-control {
      border-radius: 0px;
      border-color: ${theme.newColors.simplyGrey["100"]};
      font-family: ${theme.fontFamily};
      height: ${theme.fieldSpecs.inputText.totalHeight};
      padding: 12px 16px 12px 70px;
      outline: 0;
      width: 100%;
      box-shadow: none;
      transition: none;

      border-width: 1px;
      border-style: solid;

      ${({ $error }) => $error ? `
        border-color: ${theme.newColors.darkRed["100"]};
      ` : `
        border-color: ${theme.newColors.simplyGrey["100"]};
      `}

      ${({ $disabled }) => !$disabled ? `
			  background-color: ${theme.newColors.grey1["100"]};
        color: ${theme.newColors.almostBlack["100"]};
        &:hover {
          border-color: ${theme.colors.disabledBorderFocus};
        }
      ` : `
        background-color: ${theme.colors.disableBackground};
        border-color: ${theme.colors.disableBorder};
        color: ${theme.colors.disabledTextColor};
      `}

      &:focus {
        color: ${theme.newColors.almostBlack["100"]};
        border-color: ${theme.newColors.almostBlack["100"]};
        box-shadow: ${theme.fieldSpecs.inputText.shadow};
      }
    }

    .flag-dropdown {
      border: 1px solid transparent;
    }

    .selected-flag {
      &::after{
        background: none;
        content: "";
        display: block;
        position: absolute;
        top: 10px;
        right: -15px;
        bottom: 10px;
        border-right: 1px solid #CCCCCC;
      }

      border-radius: 0;
      width: 100%;
      padding: 15px 30px 15px 15px;

      &:focus:before {
        border-color: transparent;
        box-shadow: none;
      }

      .flag{
        border-radius: 2px;
      }

      ${({ $disabled }) => $disabled && `
        .flag{
          opacity: 0.25;
        }
      `}
    }
    .selected-flag.open {
      &:before {
        border-color: transparent;
        box-shadow: none;
      }
    }

    .country {
      font-size: 14px;
    }

    .country-list {
      border-radius: 0px;
      margin: 1px 0px 10px -1px;
      width: 280px;
      .country.highlight,
      .country.highlight .dial-code {
        color: ${theme.colors.black};
        font-family: ${theme.fontFamily};
        font-weight: 600;
      }
    }
  }
`;

export const StyledPhoneContainer = styled.div`
	display: flex;
	flex-grow: 1;
`;

export const StyledPhoneTextField = styled(StyledTextField)`
	fieldset {
		border-left: 0;
	}
`;

export const StyledFlagSelect = styled.div`
	display: flex;
	flex-grow: 1;
`;

export const StyledFlagSelectButton = styled.button<{ $hasFocus?: boolean }>`
	all: unset;
	background-color: ${theme.newColors.grey1["100"]};
	border: 1px solid ${({ disabled, $hasFocus }) =>
		disabled ? theme.colors.disableBorder :
		$hasFocus ? theme.newColors.almostBlack["100"] : theme.newColors.simplyGrey["100"]};
	border-right: 0;
	color: ${({ disabled }) => disabled ? theme.colors.disabledTextColor : theme.newColors.almostBlack["100"]};
	cursor: pointer;
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 0 16px;
	position: relative;

	&::after{
		background: none;
		content: "";
		display: block;
		position: absolute;
		top: 10px;
		right: 0;
		bottom: 10px;
		border-right: 1px solid #CCCCCC;
	}
`;

export const StyledPopper = styled(Popper)<{$width?: number}>`
	${({ $width }) => $width && `
		width: ${$width}px;
	`}
`;

export const StyledAutocomplete = styled(Autocomplete)`
	flex-grow: 1;

	&& .MuiInputBase-root{
		padding-top: 0;
		padding-bottom: 0;

		.MuiAutocomplete-input {
			padding-top: 10px;
			padding-bottom: 10px;
		}
	}
`;

export const StyledAutocompletePaper = styled.div`
	background: white;
	border: 1px solid ${theme.newColors.simplyGrey["100"]};
	border-top: 0;

	& .MuiAutocomplete-listbox .MuiAutocomplete-option {
		display: flex;
		gap: 8px;
		font-family: ${theme.fontFamily};
		font-size: 14px;
		min-height: 40px;
		color: ${theme.newColors.grey4["100"]};

		&[aria-selected='true'] {
			color: ${theme.colors.black};
			font-weight: ${theme.fontWeight.semiBold};
			background-color: white;

			&.Mui-focused {
				background-color: ${theme.newColors.grey2["100"]};
			}
		}
	}
`;

export const StyledFlagIcon = styled.img`
	height: auto;
	width: 1.5rem;
	display: block;
	box-shadow: 0 0 2px 0 rgba(0,0,0,.5);
`;
