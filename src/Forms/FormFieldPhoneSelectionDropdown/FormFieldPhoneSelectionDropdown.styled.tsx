import styled from 'styled-components';

// Theme
import theme from '@root/theme';

export const PhoneInputWrapper = styled.div`
  .react-tel-input {
    .form-control {
      background-color: #FAFAFA;
      border-radius: 0px;
      font-family: ${theme.fontFamily};
      height: 51px;
      width: 280px;
      &:focus {
        border-color: #bebebe;
        box-shadow: none;
      }
    }

    .flag-dropdown {
      &:focus-within {
        border: 1px solid #0A1323;        
      }
    }

    .selected-flag {
      border: 1px solid #bebebe;
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
        color: #0a1323;
        font-family: ${theme.fontFamily};
        font-weight: 600;
      }
    }
  }
`;
