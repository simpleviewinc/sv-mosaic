import styled from "styled-components";

// Theme
import theme from "@root/theme";

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
