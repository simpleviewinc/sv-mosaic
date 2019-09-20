import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.span`
	& > * {
		margin-right: 5px;
	}
	
	& > *:last-child {
		margin-right: 0px;
	}
`;

function ButtonRow(props) {
	return (
		<StyledWrapper>
			{props.children}
		</StyledWrapper>
	)
}

export default ButtonRow;