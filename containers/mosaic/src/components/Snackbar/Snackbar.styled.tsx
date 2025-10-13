import styled from "styled-components";

// Material UI
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

// Utils
import theme, { BREAKPOINTS } from "@root/theme";

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

  @media (min-width: ${BREAKPOINTS.sm}px) {
    &.MuiSnackbar-anchorOriginBottomRight {
      bottom: 40px;
      left: auto;
      right: 40px;
    }
  }
`;

export const ContentWrapper = styled.div`
  align-items: flex-start;
  background-color: ${theme.color.black};
  border-radius: 2px;
  box-shadow: 0px 2px 6px ${theme.color.black};
  display: flex;
  max-width: 400px;
  padding: 16px 16px;

  .MuiSvgIcon-root {
    color: ${theme.color.teal[700]};
    font-size: ${theme.fontSize.text["2xl"]};
  }
`;

export const ActionWrapper = styled.div`
  margin-top: 16px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  &.MuiSvgIcon-root {
    color: ${theme.color.white};
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
