import * as React from "react";
import { memo } from "react";
// Components
import Button from "../../../components/Button";
import FormNav from "../../FormNav";
// Styled components
import styled from "styled-components";
import { CheckboxWrapper, ButtonsWrapper, Row, StyledColumn } from "../TopComponent.styled";
import TitleWrapper from "../Utils/TitleWrapper";
const ResponsiveViewColumn = styled(StyledColumn) `
	padding: ${pr => pr.sections ? "24px 20px 0px 20px" : "24px 20px 20px 20px"};
  	z-index: 1000;
`;
const ResponsiveActionsRow = styled(Row) `
	align-self: ${(pr) => (pr.showActive ? "" : "flex-end")};
	margin-top: 16px;
	margin-bottom: 37px;
`;
const ResponsiveDrawer = (props) => {
    const { title, description, tooltipInfo, helpIcon, showActive, buttons, sections, checkbox, sectionsRefs, view } = props;
    return (React.createElement(ResponsiveViewColumn, { sections: sections },
        React.createElement(Row, null,
            React.createElement(TitleWrapper, { title: title, description: description, view: view }),
            tooltipInfo && helpIcon),
        React.createElement(ResponsiveActionsRow, { showActive: showActive },
            showActive && React.createElement(CheckboxWrapper, null, checkbox),
            buttons && (React.createElement(ButtonsWrapper, null, buttons.map((button, idx) => (React.createElement(Button, { key: `${button.label}-${idx}`, ...button })))))),
        sections &&
            React.createElement(FormNav, { sectionsRefs: sectionsRefs, sections: sections })));
};
export default memo(ResponsiveDrawer);
