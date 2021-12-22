import styled from 'styled-components';

// Components
import ClearIcon from '@material-ui/icons/Clear';
import HelpIcon from '@material-ui/icons/Help';

// Utils
import theme, { BREAKPOINTS } from '@root/theme/theme';

const BIG_SCREEN_BREAKPOINT = BREAKPOINTS.topComponent.bigScreenView + 'px';
const RESPONSIVE_BREAKPOINT = BREAKPOINTS.topComponent.responsiveView + 'px';

export const FlexContainer = styled.div`
  display: flex;
`;

export const Row = styled(FlexContainer)`
  justify-content: space-between;

  @media (min-width: ${BIG_SCREEN_BREAKPOINT}) {
    justify-content: flex-start;
  }
`;

export const Column = styled(FlexContainer)`
  flex-direction: column;
`;

export const TitleWrapper = styled(Column)`
  font-family: ${theme.fontFamily};
  margin-right: auto;
`;

export const FormTitle = styled.span`
	@import url("https://use.typekit.net/rvx4ppi.css");
	font-family: 'Museo-Sans';

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
  padding: 24px 20px 0px 20px;
`;

export const StyledColumn = styled(Column)`
  background-color: white;
  box-shadow: 0px 1px 10px #0000001a;
  margin-bottom: 30px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
`;

// Icons

export const StyledHelpIconWrapper = styled.div`
  border-right: ${(pr) =>
		pr.showActive ? `2px solid ${theme.colors.gray200}` : ''};
  padding-right: ${(pr) => (pr.isResponsiveView ? '' : '16px')};

  @media (max-width: ${RESPONSIVE_BREAKPOINT}) {
    border-right: none;
  }
`;

export const StyledHelpIcon = styled(HelpIcon)`
  color: ${theme.colors.almostBlack};
  margin-top: 7px;
`;

export const StyledClearIcon = styled(ClearIcon)`
  color: ${theme.colors.almostBlack};
`;

// Desktop view styles

export const DesktopViewColumn = styled(StyledColumn)`
  justify-content: space-between;
  padding: 24px 20px 0px 20px;
  top: 0;
  z-index: 99999;

  @media (min-width: ${BIG_SCREEN_BREAKPOINT}) {
    box-shadow: 0px 1px 10px #0000001a;
    height: 66px;
    margin-bottom: 0px;
    padding: 24px 20px 16px 20px;
  }
`;

export const DesktopActionsRow = styled(FlexContainer)`
  align-items: flex-start;

  button:last-child {
    margin-left: 20px;
  }

  .MuiFormControlLabel-root {
    margin-right: 20px;
  }
`;

export const DesktopTitleActionsRow = styled(FlexContainer)`
  margin-bottom: 30px;
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

export const ResponsiveViewColumn = styled(StyledColumn)`
  padding: 20px 20px 0px 20px;
  z-index: 9999;
`;

export const ResponsiveActionsRow = styled(Row)`
  align-self: ${(pr) => (pr.showActive ? '' : 'flex-end')};
  margin-top: 16px;
  margin-bottom: 37px;
`;

export const ResponsiveButtonsWrapper = styled.div`
  display: flex;

  button:first-child {
    margin-right: 20px;
  }
`;
