import styled from "styled-components";
import { default as MUICheckbox } from "@mui/material/Checkbox";
import { default as MUIFormControlLabel } from "@mui/material/FormControlLabel";
import { default as MUIFormHelperText } from "@mui/material/FormHelperText";
import theme from "@root/theme";

export const StyledFormControlLabel = styled(MUIFormControlLabel)`
  &.MuiFormControlLabel-root {
    margin-left: 0px;
    margin-right: 0px;
    align-items: flex-start;
	color:  ${pr => pr.disabled ? theme.colors.labelDisabled : theme.colors.almostBlack};
  }

  & > span.checked,
  & > span.MuiCheckbox-indeterminate {
    color: ${theme.colors.simplyGold};
    opacity: ${(pr) => (pr.disabled ? "50%" : "100%")};
  }

  & .MuiFormControlLabel-label {
    font-family: ${theme.fontFamily};
    max-width: 414px;
    align-self: center;
  }
`;

export const StyledCheckbox = styled(MUICheckbox)`
  &.custom-checkbox {
    padding: 10px;
    margin-right: 2px;
  }

  & > span > svg {
    font-size: 20px;
    border-color: ${theme.colors.almostBlack};
  }
`;

export const StyledHelperText = styled(MUIFormHelperText)`
  &.MuiFormHelperText-root {
    margin-top: 16px;
    margin-left: 42px;
    color: ${theme.colors.assistiveText};
    font-size: 14px;
  }
`;
