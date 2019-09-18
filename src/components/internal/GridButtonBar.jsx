import React from "react";
import styled from "styled-components";

import Button from "../Button.jsx";

const Span = styled.span`
	display: flex;
	
	& > * {
		margin-right: 10px;
	}
	
	& > *:last-child {
		margin-right: 0px;
	}
`

function GridButtonBar(props) {
	const buttons = props.buttons.map(button => {
		return (
			<Button key={button.name} {...button}></Button>
		)
	});
	
	return (
		<Span>
			{buttons}
		</Span>
	);
}

export default GridButtonBar;