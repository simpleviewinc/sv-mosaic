import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
	
`

function Dropdown(props) {
	return (
		<StyledWrapper>
			<h1>WHAT IS THIS!</h1>
			{props.children}
		</StyledWrapper>
	)
}

export default Dropdown;