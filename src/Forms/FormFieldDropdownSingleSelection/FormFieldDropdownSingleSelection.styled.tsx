import styled from 'styled-components';
import theme from '@root/theme';
import { Sizes } from '@root/theme/sizes';

// Components
import { default as MUIAutocomplete } from '@material-ui/lab/Autocomplete';
import Popper from '@material-ui/core/Popper';

export const StyledAutocomplete = styled(MUIAutocomplete)`
  & .MuiFormControl-root .MuiInputBase-root {
    background-color: ${theme.colors.gray100};
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
    color: ${pr => (pr.error ? theme.colors.red : theme.colors.almostBlack)};

    &:before {
      background: none;
      content: "";
      display: block;
      position: absolute;
      top: 4px;
      left: -12px;
      right: -12px;
      bottom: 4px;
      border-right: ${pr => pr.open ? theme.borders.fieldGray : ''};
      border-left: ${pr => !pr.open ? theme.borders.fieldGray : ''};
    }
  }
`;

export const StyledDisabledDropdownText = styled.p`
  font-size: 16px;
  color: ${theme.colors.assistiveText};
  margin-top: 15px;
`;

export const SingleDropdownWrapper = styled.div`
  margin: 0;
  padding: 0;

  .MuiFormControl-fullWidth {
    height: 51px;
    width: ${pr => (pr.innerWidth ? pr.innerWidth : Sizes.sm)};
  }

  .MuiAutocomplete-paper {
    width: ${pr => pr.innerWidth === Sizes.xs ? Sizes.sm : pr.innerWidth } 
  }
`;

export const StyledPopper = styled(Popper)`
  z-index: 999999999 !important;
  .MuiAutocomplete-option {
    font-family: ${theme.fontFamily};
    font-size: 14px;
    min-height: 40px;
    color: ${theme.colors.gray700};

    &[aria-selected='true'] {
      color: ${theme.colors.black};
      font-weight: ${theme.fontWeight.semiBold};
    }

    &:hover {
      background-color: ${theme.colors.grayHover};
    }
  }
`;
