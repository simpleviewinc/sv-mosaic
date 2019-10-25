import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import Button from "./Button.jsx";

const StyledWrapper = styled.span`
	${/* ensures that the NEXT button spaces itself, if it isn't an icon button */""}
	& > .button + .normalButton {
		margin-left: 5px;
	}
`;

function ButtonRow(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{ name : "buttons", type : "array" },
			{ name : "children", type : "object" },
			{ name : "className", type : "string" }
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	return (
		<StyledWrapper className={props.className}>
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