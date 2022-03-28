import styled from "styled-components";
import theme from "@root/theme"

// Material UI
import Menu from "@material-ui/core/Menu";

export const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    border: 1px solid ${theme.colors.gray200};
    box-shadow: 0px 1px 3px #1a1a1a26;
    color: ${theme.colors.label};

    & .MuiMenuItem-root {
      font-family: ${theme.fontFamily};
      font-size: 14px;
      padding-bottom: 8px;
      padding-top: 8px;
    }
  }
`;
