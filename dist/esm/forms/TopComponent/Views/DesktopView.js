import * as React from "react";
import { memo } from "react";
// Components
import FormNav from "../../FormNav";
import Button from "../../../components/Button";
// Styled components
import styled from "styled-components";
import theme from "../../../theme";
import { FlexContainer, StyledColumn } from "../TopComponent.styled";
// Utils
import { BREAKPOINTS } from "../../../theme/theme";
import TitleWrapper from "../Utils/TitleWrapper";
const BIG_SCREEN_BREAKPOINT = BREAKPOINTS.topComponent.bigScreenView + "px";
const DesktopViewColumn = styled(StyledColumn) `
	justify-content: space-between;
	padding: ${pr => pr.sections ? "24px 20px 0px 20px" : "24px 20px 20px 20px"};
	top: 0;
	z-index: 1000;

	& .form-nav-wrapper {
		margin-top: 30px;
	}

	@media (min-width: ${BIG_SCREEN_BREAKPOINT}) {
		border-bottom: 2px solid ${theme.colors.gray200};
		margin-bottom: 0px;
		padding: 24px 20px 20px 20px;
	}
`;
const DesktopActionsRow = styled(FlexContainer) `
  align-items: flex-start;

  button:last-child {
    margin-left: 20px;
  }

  .MuiFormControlLabel-root {
    margin-right: 20px;
  }
`;
const DesktopView = (props) => {
    const { title, description, tooltipInfo, buttons, helpIcon, showActive, sections, checkbox, view, sectionsRefs } = props;
    return (React.createElement(DesktopViewColumn, { sections: sections },
        React.createElement(FlexContainer, null,
            React.createElement(TitleWrapper, { title: title, description: description, view: view }),
            React.createElement(DesktopActionsRow, null,
                tooltipInfo && helpIcon,
                showActive && checkbox,
                buttons && buttons.map((button, idx) => (React.createElement(Button, { key: `${button.label}-${idx}`, ...button }))))),
        (view !== "BIG_DESKTOP" && sections) && (React.createElement(FlexContainer, null,
            React.createElement(FormNav, { sectionsRefs: sectionsRefs, sections: sections })))));
};
export default memo(DesktopView);
