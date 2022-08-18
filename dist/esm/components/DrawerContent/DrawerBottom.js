import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div `
	& {
		flex: 1;
		padding: 12px;
	}
	
	&.background-gray {
		background: #FAFBFC;
	}
`;
function DrawerBottom(props) {
    return (React.createElement(StyledDiv, { className: `
			${props.background ? `background-${props.background}` : ""}
		` }, props.children));
}
export default DrawerBottom;
