import * as React from "react";
import styled from "styled-components";
import LeftNavTitle from "./LeftNavTitle";
import LeftNavItems from "./LeftNavItems";
import theme from "../../theme";
const StyledDiv = styled.div `
	border-top: 1px solid ${theme.colors.gray700};
`;
function LeftNavGroup(props) {
    return (React.createElement(StyledDiv, null,
        React.createElement(LeftNavTitle, { label: props.item.label, mIcon: props.item.mIcon }),
        React.createElement(LeftNavItems, { items: props.item.items, onOpen: props.onOpen, openName: props.openName })));
}
export default LeftNavGroup;
