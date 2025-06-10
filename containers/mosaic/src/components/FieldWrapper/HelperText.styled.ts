import styled from "styled-components";

// Material UI
import { default as MUIErrorOutlineIcon } from "@mui/icons-material/ErrorOutline";
import { default as MUIFormHelperText } from "@mui/material/FormHelperText";

// Theme
import theme from "@root/theme";

export const ErrorTextWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: ${theme.fieldSpecs.inputSpacing.helperText.marginTop};
`;

export const StyledErrorIcon = styled(MUIErrorOutlineIcon)<{ $error?: boolean }>`
  &.MuiSvgIcon-root {
    font-size: ${theme.fontSize.text.lg};
    color: ${({ $error }) => $error ? theme.newColors.darkRed["100"] : "transparent"};
	margin-right: 8px;
  }
`;

export const StyledText = styled(MUIFormHelperText)`
  &.MuiFormHelperText-root {
    color: ${theme.newColors.grey3["100"]};
    font-size: ${theme.fontSize.text.sm};
    margin-top: ${theme.fieldSpecs.inputSpacing.helperText.marginTop};
  }

  &.MuiFormHelperText-root.Mui-error {
    color: ${theme.newColors.darkRed["100"]};
    margin: 0;
  }
`;
