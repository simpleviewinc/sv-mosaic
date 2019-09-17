import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsvalidator from "jsvalidator";

import theme from "../internal/theme.js";

const style = {
	fontSize: "18px"
}

const borderStyle = {
	border : "1px solid #ccc",
	borderRadius : "4px",
	padding: "6px"
}

function Button(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "name",
				type : "string",
				required : true
			},
			{
				name : "label",
				type : "string"
			},
			{
				name : "faIcon",
				type : "object"
			},
			{
				name : "color",
				type : "string"
			},
			{
				name : "border",
				type : "boolean"
			}
		],
		allowExtraKeys : false
	});
	
	const myStyle = { ...style };
	if (props.border === true) {
		Object.assign(myStyle, borderStyle);
	}
	
	return (
		<FontAwesomeIcon
			icon={props.faIcon}
			color={props.color}
			style={myStyle}
			onClick={props.onClick}
		></FontAwesomeIcon>
	);
}

export default Button;