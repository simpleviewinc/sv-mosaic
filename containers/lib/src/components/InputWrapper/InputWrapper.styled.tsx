import theme from "@root/theme";
import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  & .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] {
    padding: ${theme.fieldSpecs.inputText.padding};
  }

  &
    .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']
    .MuiAutocomplete-input:first-child,
  & .MuiAutocomplete-input,
  & .MuiOutlinedInput-inputAdornedEnd,
  & .MuiOutlinedInput-input,
  & .MuiInputBase-input {
    padding: 0px;
  }

  & .MuiOutlinedInput-input {
    height: ${theme.fieldSpecs.inputText.height};
  }
`;
