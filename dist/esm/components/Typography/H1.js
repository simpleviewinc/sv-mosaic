import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";
const Styled = styled.h1 `
	font-family: ${theme.fontFamily};
	font-size: 20px;
	font-weight: normal;
	letter-spacing: -.5px;
	color: ${theme.colors.black};
	margin-top: 0px;
	margin-bottom: .67em;
`;
export default function H1(props) {
    const { children, attrs = {}, ...remaining } = props;
    return (React.createElement(Styled, { ...attrs, ...remaining }, children));
}
