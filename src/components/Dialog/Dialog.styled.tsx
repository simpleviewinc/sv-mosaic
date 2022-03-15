import styled from 'styled-components';

// Material UI
import Dialog from '@material-ui/core/Dialog';

// Utils
import theme from '@root/theme';

export const StyledDialog = styled(Dialog)`
z-index: 99999 !important;
  font-family: ${theme.fontFamily};

  .MuiDialogContent-root {
    border-bottom: 2px solid ${theme.colors.gray200};
  }

  .MuiPaper-rounded {
    border-radius: 0;
  }

  .MuiDialogContent-root {
    padding: 0 80px 40px 80px;
  }

  .MuiDialogActions-root {
    padding: 40px 40px;
  }

  .MuiDialogActions-spacing > :not(:first-child) {
    margin-left: 20px;
  }
`;

export const StyledDialogTitle = styled.div`
  color: ${theme.colors.almostBlack};
  font-size: 20px;
  font-weight: ${theme.fontWeight.medium};
  padding: 80px 80px 32px 80px;  
`;
