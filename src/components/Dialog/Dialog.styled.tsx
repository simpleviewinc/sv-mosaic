import styled from "styled-components";

// Material UI
import Dialog from "@mui/material/Dialog";

// Utils
import theme from "@root/theme";

export const StyledDialog = styled(Dialog)`
z-index: 99999 !important;
  font-family: ${theme.fontFamily};

  .MuiDialogContent-root {
    border-bottom: 2px solid ${theme.newColors.grey2["100"]};
  }

  .MuiPaper-rounded {
    border-radius: 0;
  }

  .MuiDialogContent-root {
    padding: 0px 30px 40px 30px;
  }

  .MuiDialogActions-root {
    padding: 20px 20px;
  }

  .MuiDialogActions-spacing > :not(:first-child) {
    margin-left: 20px;
  }
`;

export const StyledDialogTitle = styled.div`
  color: ${theme.newColors.almostBlack["100"]};
  font-size: 20px;
  font-weight: ${theme.fontWeight.medium};
  padding: 40px 30px 24px 30px;
`;
