import styled from "styled-components";

// Components
import HelpIcon from "@mui/icons-material/Help";

// Utils
import theme, { BREAKPOINTS, Views } from "@root/theme/theme";

const BIG_SCREEN_BREAKPOINT = BREAKPOINTS.topComponent.bigScreenView + "px";
const RESPONSIVE_BREAKPOINT = BREAKPOINTS.topComponent.responsiveView + "px";

export const FormContent = styled.div`
	& .layout {
		padding: ${pr => pr.view === Views.mobile ? "0px" :  "24px"};
	}
	overflow-y: auto;
	width: 100%;
	height: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  .button {
    margin-right: 20px;
  }

  .button:last-child {
    margin-right: 0px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const Row = styled(FlexContainer)`
  justify-content: space-between;

  @media (min-width: ${BIG_SCREEN_BREAKPOINT}) {
    justify-content: flex-start;
    height: ${props => props.topComponentHeight ? `calc(100% - ${props.topComponentHeight}px)` : "100%"};
  }
`;

export const Column = styled(FlexContainer)`
  flex-direction: column;
`;

export const CheckboxWrapper = styled.div`
  margin-left: -10px;
`;

export const StyledColumn = styled(Column)`
  background-color: white;
  border-bottom: 2px solid ${theme.colors.gray200};
  justify-content: space-between;
	padding: ${pr => pr.sections ? "24px 24px 0px 24px" : "24px 24px 16px 24px"};
	top: 0;
	z-index: 100;

	& .form-nav-wrapper {
		margin-top: 24px;
	}

	@media (min-width: ${BIG_SCREEN_BREAKPOINT}) {
		margin-bottom: 0px;
		padding: 24px 24px 16px 24px;
	}
`;

// Icons
export const StyledHelpIconWrapper = styled.div`
  border-right: ${(pr) =>
		pr.showActive ? `2px solid ${theme.colors.gray200}` : ""};
  padding-right: ${(pr) => (pr.isResponsiveView ? "" : "16px")};

  @media (max-width: ${RESPONSIVE_BREAKPOINT}) {
    border-right: none;
  }
`;

export const StyledHelpIcon = styled(HelpIcon)`
  color: ${theme.newColors.almostBlack["100"]};
  margin-top: 7px;
`;
