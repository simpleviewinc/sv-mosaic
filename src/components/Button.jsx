import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsvalidator from "jsvalidator";
import styled from "styled-components";

import theme from "../utils/theme.js";

const StyledWrapper = styled.span`
	color: ${props => props.color};
	font-size: 14px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	font-weight: 600;
	
	& > svg {
		padding-right: 5px;
		font-size: 18px;
	}
	
	& > span {
		position: relative;
		top: -1px;
	}
	
	& > :last-child {
		padding-right: 0px;
	}
`

const BorderWrapper = styled(StyledWrapper)`
	border: 1px solid ${props => props.borderColor || props.color};
	border-radius: 4px;
	padding: 8px;
`

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
			},
			{
				name : "borderColor",
				type : "string"
			}
		],
		allowExtraKeys : false
	});
	
	const Component = props.border === true ? BorderWrapper : StyledWrapper;
	
	const icon = props.faIcon !== undefined ? <FontAwesomeIcon icon={props.faIcon} color={props.color}></FontAwesomeIcon> : undefined;
	const label = props.label !== undefined ? <span>{props.label}</span> : undefined;
	
	return (
		<Component color={props.color} borderColor={props.borderColor} onClick={props.onClick}>
			{icon}
			{label}
		</Component>
	);
}

export default Button;