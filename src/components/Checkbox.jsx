import React from "react";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../internal/theme.js";

function FAIcon(props) {
	const icon = props.checked ? faCheckSquare : faSquare;
	const color = props.checked ? theme.colors.blue : undefined;
	
	return (
		<FontAwesomeIcon icon={props.icon} color={color}></FontAwesomeIcon>
	);
}

export default FAIcon;