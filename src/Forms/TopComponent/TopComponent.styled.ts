import styled from 'styled-components';

// Components
import HelpIcon from '@material-ui/icons/Help';

// Utils
import theme from '@root/theme';


// Common styles

export const FlexContainer = styled.div`
  display: flex;
`;

export const Row = styled(FlexContainer)`
  justify-content: space-between;
  display: flex;
`;

export const Column = styled(FlexContainer)`
  flex-direction: column;
`;

// Desktop view styles

export const DesktopViewColumn = styled(Column)`
  background-color: white;
  box-shadow: 0px 1px 10px #0000001A;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 24px 20px 0px 20px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  @media (min-width: 1718px) {
    box-shadow: 0px 1px 10px #0000001a;
    height: 66px;
    margin-bottom: 0px;
    padding: 24px 20px 30px 20px;
  }
`;

export const DesktopActionsRow = styled.div`
  align-items: flex-start;
  display: flex;

  button:last-child {
    margin-left: 20px;
  }

  .MuiFormControlLabel-root {
    margin-right: 20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${theme.fontFamily};
  margin-right: auto;
 /*  @media (min-width:1076) and ( max-width: 1717px) {
    margin-right: auto;
  } */
`;

export const FormTitle = styled.span`
  color: ${theme.colors.almostBlack};
  font-size: 28px;
  margin-bottom: 8px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin: 0;
  }
`;

export const Description = styled.span`
  color: ${theme.colors.gray600};
  font-size: 14px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    align-self: center;
  }
`;

export const CheckboxWrapper = styled.div`
  margin-left: -10px;
`;

export const NavSectionsWrapper = styled.div`
  //display: flex;
  padding: 24px 20px 0px 20px;

 /*  @media (max-width: 1718px) {
    flex-direction: column;
  } */
`;

export const StyledHelpIcon = styled(HelpIcon)`
  border-right: ${(pr) =>
		pr.showActive ? `2px solid ${theme.colors.gray200}` : ''};
  margin-top: 7px;
  padding-right: ${(pr) => (pr.isResponsiveView ? '' : '16px')};

  @media (max-width: 1075px) {
    border-right: none;
  }
`;

// Mobile view styles

export const MobileColumn = styled(Column)`
  border-bottom: 2px solid ${theme.colors.gray200};
  font-family: ${theme.fontFamily};
`;

export const MobileActionsRow = styled(Row)`
  background-color: ${theme.colors.gray200};
  padding: 12px 20px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 9999;

  svg {
    align-self: center;
  }
`;

export const MobileTitleRow = styled(Row)`
  padding: 20px 20px;
`;

export const MobileCheckboxHelpIconRow = styled(Row)`
  padding: 0 20px 20px 20px;
`;

// Responsive view styles

export const ResponsiveViewColumn = styled(Column)`
  background-color: white;
  box-shadow: 0px 1px 10px #0000001A;
  margin-bottom: 30px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  padding: 20px 20px 0px 20px;
`;

export const ResponsiveActionsRow = styled(Row)`
  align-self: ${(pr) => (pr.showActive ? '' : 'flex-end')};
  margin-top: 16px;
  margin-bottom: 30px;
`;

export const ResponsiveButtonsWrapper = styled.div`
  display: flex;

  button:first-child {
    margin-right: 20px;
  }
`;
