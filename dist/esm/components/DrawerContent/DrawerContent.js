import React from "react";
import styled from "styled-components";
import DrawerTopBar from "./DrawerTopBar";
import DrawerBottom from "./DrawerBottom";
const StyledDiv = styled.div `
	width: 600px;
`;
function DrawerContent(props) {
    return (React.createElement(StyledDiv, null,
        React.createElement(DrawerTopBar, { title: props.title, onSave: props.onSave, onApply: props.onApply, onClose: props.onClose, onCancel: props.onCancel }),
        React.createElement(DrawerBottom, { background: props.background }, props.children)));
}
export default DrawerContent;
