import React, { useState, memo } from "react";
import MUIButton from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import jsvalidator from "jsvalidator";
import styled from "styled-components";
import Popover from "@material-ui/core/Popover";

import theme from "../../utils/theme.js";
import Menu from "../Menu.jsx";
import MenuBase from "../MenuBase";

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
		margin-left: -4px;
	}
	
	&.normalButton > button .icon_right {
		margin-left: 4px;
		margin-right: -4px;
	}
	
	&.iconButton > button {
		padding: 8px;
		font-size: 15px;
	}

	& > .MuiButton-sizeSmall {
		padding-left: 12px;
		padding-right: 12px;
	}
	
	& > .MuiButton-sizeSmall.MuiButton-outlined {
		padding-top: 3px;
		padding-bottom: 3px;
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
			background: ${theme.colors.lightBlueHover};
			box-shadow: 0 2px 3px ${theme.colors.blueHoverShadow};
		}

		& > button:active,
		& > button:focus {
			background: ${theme.colors.lightBlueActive};
			box-shadow: 0 1px 2px ${theme.colors.blueActiveShadow};
		}

	`,
	red_outlined : styled(ButtonWrapper)`
		& > button {
			border-color: ${theme.colors.red};
			color: ${theme.colors.red};
		}
		
		& > button:hover {
			background: ${theme.colors.lightRedHover};
			box-shadow: 0 2px 3px ${theme.colors.lightRedHoverShadow};
		}

		& > button:active,
		& > button:focus {
			background: ${theme.colors.lightRedActive};
			box-shadow: 0 1px 2px ${theme.colors.lightRedHoverShadow};
		}

	`, 
	gray_outlined : styled(ButtonWrapper)`
		& > button {
			border-color: #ddd;
			color: ${theme.colors.gray600};
		}
		
		& > button:hover {
			background: ${theme.colors.lightGrayHover};
			box-shadow: 0 2px 3px ${theme.colors.lightGrayHoverShadow};
		}

		& > button:active,
		& > button:focus {
			background: ${theme.colors.lightGrayActive};
			box-shadow: 0 1px 2px ${theme.colors.lightGrayActiveShadow};
		}
	`,
	black_outlined : styled(ButtonWrapper)`
		& > button {
			border-color: #ddd;
			color: ${theme.colors.gray700};
		}
		
		& > button:hover {
			background: ${theme.colors.lightGrayHover};
			box-shadow: 0 2px 3px ${theme.colors.lightGrayHoverShadow};
		}

		& > button:active,
		& > button:focus {
			background: ${theme.colors.lightGrayActive};
			box-shadow: 0 1px 2px ${theme.colors.lightGrayActiveShadow};
	`,
	blue_contained : styled(ButtonWrapper)`
		& > button {
			background: ${theme.colors.blue};
			color: white;
		}
		& > button:hover {
			background: ${theme.colors.blueHover};
			box-shadow: 0 2px 3px ${theme.colors.blueHoverShadow};
		}
		& > button:active,
		& > button:focus {
			background: ${theme.colors.blueActive};
			box-shadow: 0 1px 2px ${theme.colors.blueActiveShadow};
		}
	`,
	lightBlue_contained : styled(ButtonWrapper)`
		& > button {
			background: ${theme.colors.lightBlue};
			color: ${theme.colors.blue};
		}
		& > button:hover {
			background: ${theme.colors.lightBlueAccentHover};
		}
		& > button:active,
		& > button:focus {
			background: ${theme.colors.lightBlueActive};
		}
	`,
	red_contained : styled(ButtonWrapper)`
		& > button {
			background: ${theme.colors.red};
			color: white;
		}
		& > button:hover {
			background: ${theme.colors.redHover};
		}
		& > button:active,
		& > button:focus {
			background: ${theme.colors.redActive};
		}
	`,
	gray_contained : styled(ButtonWrapper)`
		& > button {
			background: ${theme.colors.lightGrayHover};
			color:  ${theme.colors.gray800};
		}
		& > button:hover {
			background: ${theme.colors.grayHover};
		}
		& > button:active,
		& > button:focus {
			background: ${theme.colors.grayActive};
		}
	`,
	blue_text : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.blue};
		}
		
		& > button:hover {
			background: ${theme.colors.lightBlueHover};
		}
	`,
	red_text : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.red};
		}
		
		& > button:hover {
			background: ${theme.colors.lightRedHover};
		}

		& > button:active,
		& > button:focus {
			background: ${theme.colors.lightRedActive};
		}
	`,
	gray_text : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.gray700};
		}

		& .icon_right {
			color: ${theme.colors.gray600};
		}
		
		& > button:hover {
			background: ${theme.colors.lightGrayHover};
		}

		& > button:active,
		& > button:focus {
			background: ${theme.colors.lightGrayActive};
		}
	`,
	black_text : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.gray700};
		}

		& .icon_right {
			color: ${theme.colors.gray600};
		}
		
		& > button:hover {
			background-color: ${theme.colors.gray200};
		}
	`,
	blue_icon : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.blue}
		}
		
		& > button:hover {
			background: ${theme.colors.lightBlueHover};
		}

		& > button:active,
		& > button:focus {
			background: ${theme.colors.lightBlueActive};
		}
	`,
	black_icon : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.gray800};
		}
		
		& > button:hover {
			background-color: ${theme.colors.gray200};
		}
	`,
	red_icon : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.red};
		}
		
		& > button:hover {
			background: ${theme.colors.lightRedHover};
		}

		& > button:active,
		& > button:focus {
			background: ${theme.colors.lightRedActive};
		}
	`,
	gray_icon : styled(ButtonWrapper)`
		& > button {
			color: ${theme.colors.gray700};
		}
		
		& > button:hover {
			background: ${theme.colors.lightGrayHover};
			box-shadow: 0 2px 3px ${theme.colors.lightGrayHoverShadow};
		}

		& > button:active,
		& > button:focus {
			background: ${theme.colors.lightGrayActive};
			box-shadow: 0 1px 2px ${theme.colors.lightGrayActiveShadow};
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
				name: "size",
				type : "string",
				enum : ["small", "medium", "large"],
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
			},
			{
				name : "menuContent",
				type : "object"
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
	
	const onClick = props.popover ? openPopover
		: props.menuItems ? openMenu
		: props.menuContent ? openMenu
		: props.onClick
	;
	
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
					size={props.size}
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
				props.menuContent &&
				<MenuBase anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
					{props.menuContent}
				</MenuBase>
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