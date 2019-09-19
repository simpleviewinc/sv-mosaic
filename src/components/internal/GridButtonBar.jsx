import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import Button from "../Button.jsx";

const Span = styled.span`
	display: inline-flex;
	
	& > * {
		margin-right: 10px;
	}
	
	& > *:last-child {
		margin-right: 0px;
	}
`

function GridButtonBar(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "buttons",
				type : "array",
				required : true
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
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