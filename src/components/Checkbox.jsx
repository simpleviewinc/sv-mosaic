import React from "react";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../internal/theme.js";

const style = {
	fontSize: "18px"
}

function Checkbox(props) {
	const icon = props.checked ? faCheckSquare : faSquare;
	const color = props.checked ? theme.colors.blue : "#999";
	
	return (
		<FontAwesomeIcon icon={icon} color={color} onClick={props.onClick} style={style}></FontAwesomeIcon>
	);
}

export default Checkbox;