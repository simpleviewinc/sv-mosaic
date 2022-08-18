import * as React from "react";
import styled from "styled-components";
const StyledDiv = styled.div `
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-track {
		background-color: #26262a;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #7a7a7d;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #5b5b5d;
	}
`;
function LeftNavScroller(props) {
    const { attrs = {} } = props;
    return (React.createElement(StyledDiv, { ...attrs, className: props.className }, props.children));
}
export default LeftNavScroller;
