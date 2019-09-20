import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsvalidator from "jsvalidator";
import styled from "styled-components";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import theme from "../utils/theme.js";
// import DropdownList from "./internal/DropdownList.jsx";

const StyledWrapper = styled.span`
	color: ${props => props.color};
	font-size: 14px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	font-weight: 600;
	padding: 12px;
	
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
	
	&:hover {
		background: #eee;
		border-radius: 50px;
	}
`

const BorderWrapper = styled(StyledWrapper)`
	border: 1px solid ${props => props.borderColor || props.color};
	border-radius: 4px;
	padding: 8px;
	
	&:hover {
		border-radius: 4px;
	}
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
			},
			{
				name : "onClick",
				type : "function"
			},
			{
				name : "dropdownList",
				type : "object"
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [anchorEl, setAnchorEl] = useState(null);
	
	const openDropdown = function(event) {
		setAnchorEl(event.currentTarget);
	}
	
	const Component = props.border === true ? BorderWrapper : StyledWrapper;
	
	const icon = props.faIcon !== undefined ? <FontAwesomeIcon icon={props.faIcon} color={props.color}></FontAwesomeIcon> : undefined;
	const label = props.label !== undefined ? <span>{props.label}</span> : undefined;
	
	const onClick = props.dropdownList ? openDropdown : props.onClick;
	
	const handleClose = function() {
		console.log("CLOSE ME");
		setAnchorEl(null);
	}
	
	const dropdown = props.dropdownList ? (
		<Menu
			id="simple-menu"
			anchorEl={anchorEl}
			keepMounted
			open={Boolean(anchorEl)}
			onClose={handleClose}
		>
			{props.dropdownList.map(val => <MenuItem key={val.name} onClick={handleClose}>{val.label}</MenuItem>)}
		</Menu>
	) : undefined;
	
	return (
		<span>
			<Component color={props.color} borderColor={props.borderColor} onClick={onClick}>
				{icon}
				{label}
			</Component>
			{dropdown}
		</span>
	);
}

export default Button;