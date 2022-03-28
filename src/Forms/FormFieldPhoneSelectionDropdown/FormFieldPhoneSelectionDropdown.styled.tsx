import styled from "styled-components";

// Theme
import theme from "@root/theme";

export const PhoneInputWrapper = styled.div`
  .react-tel-input {
    .form-control {
	  ${(pr) => pr.error && `border: 1px solid ${theme.colors.red}`}
      background-color: ${theme.colors.gray100};
      border-radius: 0px;
      font-family: ${theme.fontFamily};
      height: 51px;
      padding: 15px 15px 15px 98px;
      width: 280px;
      &:focus {
        color: ${theme.colors.almostBlack};
        border-color: ${theme.colors.simplyGray};
        box-shadow: none;
      }
      &:focus + .flag-dropdown {
        border: ${theme.borders.black};
		border-radius: 0px;
      }
    }

    .flag-dropdown {
      border-right: 1px solid ${theme.colors.simplyGray};
      &:focus-within {
        border: ${theme.borders.black};
        border-radius: 0px;
      }
    }

    .selected-flag {
      border-radius: 0;
      width: 100%;
      padding: 15px 56px 15px 16px;
      &:focus:before {
        border-color: transparent;
        box-shadow: none;
      }
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

export const StyledDisabledText = styled.p`
  color: ${theme.colors.assistiveText};
  font-family: ${theme.fontFamily};
`;
