import styled from 'styled-components';

// Theme
import theme from '@root/theme';

export const PhoneInputWrapper = styled.div`
  .react-tel-input {
    .form-control {
      background-color: ${theme.colors.gray100};
      border-radius: 0px;
      font-family: ${theme.fontFamily};
      height: 51px;
      width: 280px;
      &:focus {
        border-color: ${theme.colors.simplyGray};
        box-shadow: none;
      }
    }

    .flag-dropdown {
      &:focus-within {
        border: ${theme.borders.black};        
      }
    }

    .selected-flag {
      border: ${theme.borders.simplyGray};
      &:focus:before {
        border-color: transparent;
        box-shadow: 0px 0px 5px #1A1A1A26;
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
`
