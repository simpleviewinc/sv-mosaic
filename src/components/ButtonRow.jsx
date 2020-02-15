import React, { useMemo, memo } from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import Button from "./Button";

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
	
	if (props.children && props.buttons) {
		throw new Error("ButtonRow cannot receive both children and a buttons prop");
	}
	
	const buttons = useMemo(() => {
		if (props.buttons === undefined) { return null; }
		
		return props.buttons.map((button, i) => {
			return (
				<Button key={i} {...button}/>
			)
		});
	}, [props.buttons]);
	
	return (
		<StyledWrapper className={props.className}>
			{ props.children || buttons }
		</StyledWrapper>
	)
}

export default memo(ButtonRow);