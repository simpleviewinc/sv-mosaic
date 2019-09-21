import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import ButtonRow from "../ButtonRow.jsx";
import Button from "../Button.jsx";

const StyledWrapper = styled.div`
	display: inline-flex;
	align-items: center;
	
	& > *:last-child {
		margin-right: 0px;
	}
	
	& > h1 {
		font-size: 20px;
		font-weight: 500;
		margin-right: 20px;
	}
`;

function TitleBar(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{ name : "title", type : "string" },
			{ name : "buttons", type : "array" }
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	return (
		<StyledWrapper>
			{ props.title && <h1>{props.title}</h1> }
			{ props.buttons && <ButtonRow buttons={props.buttons}/> }
		</StyledWrapper>
	)
}

export default TitleBar;