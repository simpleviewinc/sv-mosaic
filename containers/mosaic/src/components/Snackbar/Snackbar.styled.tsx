import styled from "styled-components";

// Material UI
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

// Utils
import theme from "@root/theme";

export const StyledSnackbar = styled(Snackbar)`
  .MuiIconButton-root {
    height: 24px;
    width: 24px;
  }

  &.MuiSnackbar-anchorOriginBottomRight {
    bottom: 10px;
  }

  &.MuiSnackbar-root {
    left: 10px;
    right: 10px;
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    &.MuiSnackbar-anchorOriginBottomRight {
      bottom: 40px;
      left: auto;
      right: 40px;
    }
  }
`;

export const ContentWrapper = styled.div`
  align-items: flex-start;
  background-color: ${theme.newColors.almostBlack["100"]};
  border-radius: 2px;
  box-shadow: 0px 2px 6px ${theme.newColors.almostBlack["20"]};
  display: flex;
  max-width: 400px;
  padding: 16px 16px;

  .MuiSvgIcon-root {
    color: ${theme.newColors.realTeal["100"]};
    font-size: ${theme.fontSize.text["2xl"]};
  }
`;

export const ActionWrapper = styled.div`
  margin-top: 16px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  &.MuiSvgIcon-root {
    color: ${theme.newColors.simplyGrey["100"]};
    font-size: ${theme.fontSize.text.lg};
  }
`;

export const MessageWrapper = styled.div`
  margin-left: 8px;

  p {
    color: white;
    margin: 0;
  }
`;
