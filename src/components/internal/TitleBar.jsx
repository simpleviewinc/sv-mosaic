import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import GridButtonBar from "./GridButtonBar.jsx";

const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	
	& > * {
		margin-right: 20px;
	}
	
	& > *:last-child {
		margin-right: 0px;
	}
	
	& > h1 {
		font-size: 24px;
		font-weight: 600;
	}
`;

function TitleBar(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{ name : "title", type : "string" },
			{ name : "buttons", type : "array" }
		],
		allowExtraKeys : false
	});
	
	const title = props.title ? <h1>{props.title}</h1> : undefined;
	const buttons = props.buttons ? <GridButtonBar buttons={props.buttons}></GridButtonBar> : undefined;
	
	return (
		<StyledWrapper>
			{title}
			{buttons}
		</StyledWrapper>
	)
}

export default TitleBar;