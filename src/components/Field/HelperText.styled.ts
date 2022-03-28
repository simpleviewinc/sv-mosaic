import styled from "styled-components";

// Material UI
import { default as MUIErrorOutlineIcon } from "@material-ui/icons/ErrorOutline";
import { default as MUIFormHelperText } from "@material-ui/core/FormHelperText";

// Theme
import theme from "../../utils/theme.js";

export const ErrorTextWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 18px;
`;

export const StyledErrorIcon = styled(MUIErrorOutlineIcon)`
  &.MuiSvgIcon-root {
    font-size: 16px;
    color: ${theme.colors.red};
    margin-right: 8px;
  }
`;

export const StyledText = styled(MUIFormHelperText)`
  &.MuiFormHelperText-root {
    color: ${theme.colors.assistiveText};
    font-family: ${theme.fontFamily};
    font-size: 12px;
    margin-top: 18px;
  }

  &.MuiFormHelperText-root.Mui-error {
    color: ${theme.colors.red};
    margin: 0;
  }
`;
