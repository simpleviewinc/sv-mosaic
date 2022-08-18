import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";
const StyledH3 = styled.h3 `
	color: ${theme.colors.gray400};
	padding: 8px 16px;
	font-family: ${theme.fontFamily};
	margin: 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 14px;
	font-weight: normal;
	display: flex;
	align-items: center;
	line-height: 24px;

	& > span {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& > .icon {
		margin-right: 16px;
	}
`;
function LeftNavTitle(props) {
    return (React.createElement(StyledH3, { title: props.label },
        props.mIcon &&
            React.createElement(props.mIcon, { className: "icon" }),
        React.createElement("span", null, props.label)));
}
export default LeftNavTitle;
