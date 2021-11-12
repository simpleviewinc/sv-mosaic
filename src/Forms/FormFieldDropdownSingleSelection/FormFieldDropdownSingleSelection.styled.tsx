import styled from 'styled-components';
import { default as MUIAutocomplete } from '@material-ui/lab/Autocomplete';
import { default as MUIFormHelperText } from '@material-ui/core/FormHelperText';
import { default as MUIErrorOutlineIcon } from '@material-ui/icons/ErrorOutline';
import theme from '../../utils/theme.js';
import { Sizes } from '../../theme/sizes';

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

export const StyledHelperText = styled(MUIFormHelperText)`
  &.MuiFormHelperText-root {
    font-size: 12px;
    color: ${theme.colors.assistiveText};
    margin-top: 16px;
  }
`;

export const StyledInstructionText = styled.p`
  font-size: 14px;
  color: ${theme.colors.assistiveText};
  margin-top: 0px;
  margin-bottom: 0px;
  max-width: 400px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledDisabledDropdownText = styled.p`
  font-size: 16px;
  color: ${theme.colors.assistiveText};
  margin-top: 15px;
`;

export const StyledErrorWrapper = styled.div`
  background-color: ${(pr) =>
		pr.error ? theme.colors.errorBackground : 'transparent'};
  padding: 20px;
  width: fit-content;
  font-family: ${theme.fontFamily};

  .MuiAutocomplete-option:active {
    font-weight: bold;
  }
`;

export const StyledErrorIcon = styled(MUIErrorOutlineIcon)`
  &.MuiSvgIcon-root {
    font-size: 16px;
    color: ${theme.colors.red};
    margin-right: 8px;
  }
`;

export const StyledErrorText = styled(MUIFormHelperText)`
  &.MuiFormHelperText-root {
    font-size: 12px;
    color: ${theme.colors.red};
  }
`;

export const StyledErrorMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  width: fit-content;
`;

export const SingleDropdownWrapper = styled.div`
  margin: 0;
  padding: 0;

  .MuiFormControl-fullWidth {
    height: 51px;
    margin-right: 60px;
    width: ${pr => (pr.innerWidth ? pr.innerWidth : Sizes.sm)};
  }

  .MuiAutocomplete-paper {
    width: ${pr => pr.innerWidth === Sizes.xs ? Sizes.sm : pr.innerWidth } 
  }
`;
