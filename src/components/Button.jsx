import React, { useState, memo } from "react";
import MUIButton from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import jsvalidator from "jsvalidator";
import styled from "styled-components";
import Popover from "@material-ui/core/Popover";

import theme from "../utils/theme.js";
import Menu from "./Menu.jsx";

const ButtonWrapper = styled.span`
	& > button {
		font-family: ${theme.fontFamily};
		text-transform: none;
		font-size: 14px;
	}
	
	&.normalButton > button {
		box-shadow: none;
	}
	
	&.normalButton > button .icon {
		font-size: 20px;
	}
	
	&.normalButton > button .icon_left {
		margin-right: 4px;
	}
	
	&.normalButton > button .icon_right {
		margin-left: 4px;
	}
	
	&.iconButton > button {
		padding: 8px;
		font-size: 15px;
	}
`

const PopoverWrapper = styled.div`
	font-family: ${theme.fontFamily};
	padding: 10px;
`

const types = {
	blue_outlined : styled(ButtonWrapper)`
		& > button {
			border-color: ${theme.colors.blue};
			color: ${theme.colors.blue};
		}
		
		& > button:hover {
			background: ${theme.colors.blue}13;
		}
	`,
	red_outlined : styled(ButtonWrapper)`
		& > button {
			border-color: ${theme.colors.red};
			color: ${theme.colors.red};
		}
		
		& > button:hover {
			background: ${theme.colors.red}13;
		}
	`,
	gray_outlined : styled(ButtonWrapper)`
		& > button {
			border-color: #ddd;
			color: ${theme.colors.lightGray};
		}
		
		& > button:hover {
			background: #eee;
		}
	`,
	black_outlined : styled(ButtonWrapper)`
		& > button {
			border-color: #ddd;
			color: black;
		}
		
		& > button:hover {
			background: #eee;
		}
	`,
	blue_contained : styled(ButtonWrapper)`
		& > button {
			background: ${theme.colors.blue};
			color: white;
		}
		& > button:hover {
			background: ${theme.colors.blueHover};
		}
	`,
	lightBlue_contained : styled(ButtonWrapper)`
		& > button {
			background: ${theme.colors.blue}13;
			color: ${theme.colors.blue};
		}
		& > button:hover {
			background: ${theme.colors.blue}26;
		}
	`,
	red_contained : styled(ButtonWrapper)`
		& > button {
			background: ${theme.colors.red};
			color: white;
		}
		& > button:hover {
			background: #900f0f;
		}
	`,
	gray_contained : styled(ButtonWrapper)`
		& > button {
			background: #ddd;
			color: black;
		}
		& > button:hover {
			background: #ccc;
		}
	`,
	blue_text : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.blue};
		}
		
		& > button:hover {
			background-color: ${theme.colors.blue}13;
		}
	`,
	red_text : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.red};
		}
		
		& > button:hover {
			background-color: ${theme.colors.red}13;
		}
	`,
	gray_text : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.lightGray};
		}
	`,
	black_text : styled(ButtonWrapper)`
		& > button {
			color: black;
		}
	`,
	blue_icon : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.blue}
		}
	`,
	black_icon : styled(ButtonWrapper)`
		& > button {
			color: black;
		}
	`,
	red_icon : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.red};
		}
	`,
	gray_icon : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.lightGray};
		}
	`
}

function Button(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "label",
				type : "any"
			},
			{
				name : "className",
				type : "string"
			},
			{
				name : "color",
				type : "string",
				enum : ["black", "blue", "lightBlue", "red", "gray"],
				required : true
			},
			{
				name : "variant",
				type : "string",
				enum : ["icon", "outlined", "contained", "text"],
				required : true
			},
			{
				name : "iconPosition",
				type : "string",
				enum : ["left", "right"]
			},
			{
				name : "mIcon",
				type : "object"
			},
			{
				name : "onClick",
				type : "function"
			},
			{
				name : "fullWidth",
				type : "boolean"
			},
			{
				name : "disabled",
				type : "boolean"
			},
			{
				name : "popover",
				type : "object"
			},
			{
				name : "menuItems",
				type : "array"
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [anchorEl, setAnchorEl] = useState(null);
	const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
	
	const MyButton = types[`${props.color}_${props.variant}`];
	
	if (MyButton === undefined) {
		throw new Error(`Color '${props.color}' and variant '${props.variant}' combination is not valid`);
	}
	
	const MaterialIcon = props.mIcon;
	const iconPosition = props.iconPosition || "left";
	
	function openMenu(event) {
		setAnchorEl(event.currentTarget);
	}
	
	function closeMenu() {
		setAnchorEl(null);
	}
	
	function openPopover(event) {
		setPopoverAnchorEl(event.currentTarget);
	}
	
	function closePopover(event) {
		setPopoverAnchorEl(null);
	}
	
	const onClick = props.popover ? openPopover : props.menuItems ? openMenu : props.onClick;
	
	return (
		<MyButton className={`
			${props.className ? props.className : ""}
			button
			${props.variant === "icon" ? "iconButton" : "normalButton"}
		`}>
			{
				props.variant !== "icon" &&
				<MUIButton
					variant={props.variant}
					onClick={onClick}
					fullWidth={props.fullWidth}
					disabled={props.disabled}
				>
					{ props.mIcon && iconPosition === "left" && 
						<MaterialIcon className="icon icon_left"></MaterialIcon>
					}
					{props.label}
					{ props.mIcon && iconPosition === "right" &&
						<MaterialIcon className="icon icon_right"></MaterialIcon>
					}
				</MUIButton>
			}
			{
				props.variant === "icon" &&
				<IconButton
					onClick={onClick}
					disabled={props.disabled}
				>
					{ props.mIcon && <MaterialIcon className="icon"></MaterialIcon> }
				</IconButton>
			}
			{
				props.menuItems &&
				<Menu items={props.menuItems} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}/>
			}
			{
				props.popover &&
				<Popover
					open={Boolean(popoverAnchorEl)}
					anchorEl={popoverAnchorEl}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					onClose={closePopover}
					disableRestoreFocus
				>
					<PopoverWrapper>
						{props.popover}
					</PopoverWrapper>
				</Popover>
			}
		</MyButton>
	)
}

export default memo(Button);