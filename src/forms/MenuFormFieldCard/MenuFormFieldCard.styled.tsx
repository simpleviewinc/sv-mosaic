import styled from "styled-components";
import theme from "@root/theme";

// Material UI
import Menu from "@mui/material/Menu";

export const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    border: 1px solid ${theme.newColors.grey2["100"]};
    box-shadow: 0px 1px 3px ${theme.newColors.almostBlack["20"]};
    color: ${theme.newColors.grey4["100"]};


    & .MuiMenuItem-root {
      font-family: ${theme.fontFamily};
      font-size: 14px;
      padding-bottom: 8px;
      padding-top: 8px;
    }
  }
`;
