import * as React from "react";
import { memo } from "react";
import styled from "styled-components";
// Components
import ClearIcon from "@mui/icons-material/Clear";
import Button from "../../../components/Button";
import TitleWrapper from "../Utils/TitleWrapper";
import { CheckboxWrapper, Row, } from "../TopComponent.styled";
// Utils
import theme from "../../../theme/theme";
const MobileActionsRow = styled(Row) `
  background-color: ${theme.colors.gray200};
  padding: 12px 20px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1000;

  .button {
    margin-right: 20px;
  }

  .button:last-child {
    margin-right: 0px;
  }

  svg {
    align-self: center;
  }
`;
const StyledClearIcon = styled(ClearIcon) `
  color: ${theme.colors.almostBlack};
`;
const MobileCheckboxHelpIconRow = styled(Row) `
  padding: 0 20px 20px 20px;
`;
const MobileView = (props) => {
    const { buttons, onCancel, title, description, showActive, tooltipInfo, helpIcon, checkbox, view, } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement(MobileActionsRow, null,
            React.createElement(StyledClearIcon, { onClick: onCancel }),
            buttons && (React.createElement("div", null, buttons.map((button, idx) => (React.createElement(Button, { key: `${button.label}-${idx}`, ...button })))))),
        React.createElement(TitleWrapper, { title: title, description: description, view: view }),
        (showActive || tooltipInfo) && (React.createElement(MobileCheckboxHelpIconRow, null,
            showActive && React.createElement(CheckboxWrapper, null, checkbox),
            tooltipInfo && helpIcon))));
};
export default memo(MobileView);
