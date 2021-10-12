import styled from 'styled-components';

// Material UI
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

// Utils
import theme from '@root/theme';

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
  background-color: ${theme.colors.almostBlack};
  border-radius: 2px;
  box-shadow: 0px 2px 6px #1a1a1a40;
  display: flex;
  font-family: ${theme.fontFamily};
  max-width: 400px;
  padding: 16px 16px;

  .MuiSvgIcon-root {
    color: ${theme.colors.blueTeal};
    font-size: 20px;
  }
`;

export const ActionWrapper = styled.div`
  margin-top: 16px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  &.MuiSvgIcon-root {
    color: ${theme.colors.simplyGray};
    font-size: 16px;
  }
`;

export const MessageWrapper = styled.div`
  margin-left: 8px;

  p {
    color: white;
    margin: 0;
  }
`;
