import * as React from "react";
import { memo } from "react";
import styled from "styled-components";
// Components
import { ButtonsWrapper, Row, StyledColumn } from "../TopComponent.styled";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../../../components/Button";
import { FormTitle } from "../Utils/TitleWrapper";
// Utils
import theme from "../../../theme/theme";
const DrawerViewColumn = styled(StyledColumn) `
  background-color: ${theme.colors.grayHover};
  box-shadow: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  z-index: 9999;
`;
const DrawerView = (props) => {
    const { buttons, onCancel, view, title, tooltipInfo, helpIcon, } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement(DrawerViewColumn, { type: view },
            React.createElement(Row, null,
                onCancel && (React.createElement(IconButton, { "data-testid": "close-icon", "aria-label": "close", disableRipple: true, onClick: onCancel, style: { marginRight: "8px" }, size: "large" },
                    React.createElement(CloseIcon, null))),
                React.createElement(FormTitle, { type: view, "data-testid": "drawer-title-test" }, title),
                tooltipInfo && helpIcon),
            buttons && (React.createElement(ButtonsWrapper, { style: { alignItems: "center" } }, buttons.map((button, idx) => (React.createElement(Button, { key: `${button.label}-${idx}`, ...button }))))))));
};
export default memo(DrawerView);
