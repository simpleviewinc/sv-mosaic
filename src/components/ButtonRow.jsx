import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import Button from "./Button.jsx";

const StyledWrapper = styled.span`
	& > * {
		margin-right: 5px;
	}
	
	& > *:last-child {
		margin-right: 0px;
	}
`;

function ButtonRow(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{ name : "buttons", type : "array" },
			{ name : "children", type : "object" }
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	return (
		<StyledWrapper>
			{ props.children }
			{ props.buttons && 
				props.buttons.map((button, i) => {
					return (
						<Button key={i} {...button}/>
					)
				})
			}
		</StyledWrapper>
	)
}

export default ButtonRow;