import React, { useState } from "react";
import MUIButton from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import jsvalidator from "jsvalidator";
import styled from "styled-components";

import theme from "../utils/theme.js";
import Menu from "./Menu.jsx";

const ButtonWrapper = styled.span`
	& > button {
		font-family: ${theme.fontFamily};
		text-transform: none;
		font-size: 14px;
	}
	
	& > button.normalButton .icon {
		margin-right: 4px;
	}
	
	& > button.iconButton {
		padding: 8px;
		font-size: 15px;
	}
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
			color: ${theme.colors.gray};
		}
	`,
	blue_icon : styled(ButtonWrapper)`
		& .icon {
			color: ${theme.colors.blue}
		}
	`,
	black_icon : styled(ButtonWrapper)`
		& .icon {
			color: black;
		}
	`,
	red_icon : styled(ButtonWrapper)`
		& .icon {
			color: ${theme.colors.red};
		}
	`
}

function Button(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "label",
				type : "string"
			},
			{
				name : "color",
				type : "string",
				enum : ["black", "blue", "red", "gray"],
				required : true
			},
			{
				name : "variant",
				type : "string",
				enum : ["icon", "outlined", "contained", "text"],
				required : true
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
				name : "menuItems",
				type : "array"
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [anchorEl, setAnchorEl] = useState(null);
	
	const MyButton = types[`${props.color}_${props.variant}`];
	const MaterialIcon = props.mIcon;
	
	function openMenu(event) {
		console.log("OPEN MENU");
		setAnchorEl(event.currentTarget);
	}
	
	function closeMenu() {
		console.log("CLOSE MENU");
		setAnchorEl(null);
	}
	
	const onClick = props.menuItems ? openMenu : props.onClick;
	
	return (
		<MyButton>
			{ props.variant !== "icon" &&
				<MUIButton variant={props.variant} className="normalButton" onClick={onClick}>
					{ props.mIcon && <MaterialIcon className="icon"></MaterialIcon> }
					{props.label}
				</MUIButton>
			}
			{ props.variant === "icon" &&
				<IconButton className="iconButton" className="iconButton" onClick={onClick}>
					{ props.mIcon && <MaterialIcon className="icon"></MaterialIcon> }
				</IconButton>
			}
			{ props.menuItems &&
				<Menu items={props.menuItems} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}/>
			}
		</MyButton>
	)
}

export default Button;