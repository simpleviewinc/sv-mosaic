import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";
const Styled = styled.span `
	font-family: ${theme.fontFamily};
	font-size: 14px;
	color: ${props => props.color === "teal" ? theme.colors.blueTeal : theme.colors.black};
`;
export default function BodyText(props) {
    const { children, attrs = {}, ...remaining } = props;
    return (React.createElement(Styled, { ...attrs, ...remaining }, children));
}
