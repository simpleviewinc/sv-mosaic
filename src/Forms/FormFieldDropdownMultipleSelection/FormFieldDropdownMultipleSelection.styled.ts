import styled from "styled-components";

// Material UI
import Autocomplete from "@material-ui/lab/Autocomplete";
import Popper from "@material-ui/core/Popper";

// Theme
import theme from "../../utils/theme.js";

export const ChipsWrapper = styled.div`
  width: ${pr => pr.size};

  & > :not(:last-child) {
    margin-right: 12px;
  }

  & > * {
    margin-top: 8px;
  }
`;

export const FieldWrapper = styled.div`
  background-color: ${pr =>
		pr.error ? theme.colors.lightRed : "transparent"};
  padding: 20px;
  width: fit-content;
`;

export const StyledAutocomplete = styled(Autocomplete)`
  & .MuiFormControl-fullWidth {
    width: ${pr => pr.size};
    height: 51px;
    margin-right: 60px;
  }

  & .MuiFormControl-root .MuiInputBase-root {
    background-color: ${theme.colors.gray100};
  }

  & .MuiInputBase-root {
    border-radius: 0px;
    font-family: ${theme.fontFamily};
    border: ${(pr) =>
		pr.error ? theme.borders.error : theme.borders.fieldGray};
  }

  &
    .MuiFormControl-root
    .MuiInputBase-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border: solid 1px ${theme.colors.gray800};
  }

  .MuiAutocomplete-popupIndicator {
    color: ${(pr) => (pr.error ? theme.colors.red : theme.colors.almostBlack)};
  }
`;

export const StyledPopper = styled(Popper)`
  .MuiAutocomplete-option {
    font-family: ${theme.fontFamily};
    font-size: 14px;
    min-height: 40px;
    padding: 0;
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

export const StyledInstructionText = styled.p`
  color: ${theme.colors.assistiveText};
  font-family: ${theme.fontFamily};
  font-size: 14px;
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
  color: ${theme.colors.assistiveText};
  margin-top: 15px;
  font-family: ${theme.fontFamily};
`;
