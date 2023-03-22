import styled from "styled-components";
import { default as MUICheckbox } from "@mui/material/Checkbox";
import { default as MUIFormControlLabel } from "@mui/material/FormControlLabel";
import theme from "@root/theme";

export const StyledFormControlLabel = styled(MUIFormControlLabel)`
  &.MuiFormControlLabel-root {
    margin-left: 0px;
    margin-right: 0px;
    align-items: flex-start;
    color: ${theme.newColors.grey4["100"]};
  }

  & > span.checked,
  & > span.MuiCheckbox-indeterminate {
    color: ${theme.newColors.simplyGold["100"]};
    opacity: ${(pr) => (pr.disabled ? "50%" : "100%")};
  }

  & .MuiFormControlLabel-label {
    font-family: ${theme.fontFamily};
    max-width: 414px;
    align-self: center;
  }
`;

export const StyledCheckbox = styled(MUICheckbox)`
  &.MuiCheckbox-colorPrimary {
    color: ${theme.newColors.almostBlack["100"]};

    &.Mui-checked {
      color: ${theme.newColors.simplyGold["100"]};
    }
  }

  &.MuiCheckbox-colorPrimary,
  &.MuiCheckbox-colorPrimary.Mui-checked {
    &:hover {
      background-color: ${theme.newColors.grey2["100"]};
    }
  }

  &.custom-checkbox {
    padding: 10px;
    margin-right: 2px;
  }

  & svg {
    height: ${theme.fieldSpecs.selectors.dimentions};
    width: ${theme.fieldSpecs.selectors.dimentions};
  }
`;
