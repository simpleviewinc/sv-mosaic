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
  margin-top: 8px;
`;

export const StyledErrorIcon = styled(MUIErrorOutlineIcon)`
  &.MuiSvgIcon-root {
    font-size: 16px;
    color: ${theme.newColors.darkRed["100"]};
    margin-right: 8px;
  }
`;

export const StyledText = styled(MUIFormHelperText)`
  &.MuiFormHelperText-root {
    color: ${theme.newColors.grey3["100"]};
    font-family: ${theme.fontFamily};
    font-size: 12px;
    margin-top: 8px;
  }

  &.MuiFormHelperText-root.Mui-error {
    color: ${theme.newColors.darkRed["100"]};
    margin: 0;
  }
`;
