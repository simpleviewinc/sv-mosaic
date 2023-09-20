import styled from "styled-components";

// Components
import HelpIcon from "@mui/icons-material/Help";

// Utils
import theme, { Views } from "@root/theme/theme";

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
  ${({ isBigDesktopWithSections }) => isBigDesktopWithSections && `
    display: flex;
  `}

  justify-content: space-between;

  &.BIG_DESKTOP {
    flex: 1 1 auto;
    justify-content: flex-start;
    min-height: 0;
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
  border-bottom: 2px solid ${theme.newColors.grey2["100"]};
  justify-content: space-between;
	padding: ${pr => pr.sections ? "24px 24px 0px 24px" : "24px 24px 16px 24px"};
	top: 0;
	z-index: 100;

	& .form-nav-wrapper {
		margin-top: 24px;
	}

	&.BIG_DESKTOP {
		margin-bottom: 0px;
		padding: 24px 24px 16px 24px;
	}
`;

// Icons
export const StyledHelpIconWrapper = styled.div`
  border-right: ${(pr) =>
		pr.showActive ? `2px solid ${theme.newColors.grey2["100"]}` : ""};
  padding-right: 16px;

  &.RESPONSIVE {
    border-right: none;
  }
`;

export const StyledHelpIcon = styled(HelpIcon)`
  color: ${theme.newColors.almostBlack["100"]};
  margin-top: 7px;
`;
