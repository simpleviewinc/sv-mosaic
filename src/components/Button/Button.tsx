import * as React from "react";
import { useState, memo, createContext } from "react";
import MUIButton from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import Popover from "@material-ui/core/Popover";
import Popper from "@material-ui/core/Popper";

import { ButtonProps, ButtonPopoverContextProps } from "./ButtonTypes";
import theme from "../../utils/theme.js";
import Menu from "../Menu.jsx";
import MenuBase from "../MenuBase";
import { MosaicObject } from "../../types";

// Buttons should be 30/36/42 in height for small/medium/large in ALL variants
// The styling of text, outlined, and icon are shared. Contained are different because they usually need to get darker on hover/active than the primary color

const ButtonWrapper = styled.span`
	display: inline-block;

	&.fullWidth {
		display: block;
	}

	& > button {
		font-family: ${theme.fontFamily};
		text-transform: none;
		font-size: 14px;
		font-weight: ${theme.fontWeight.semiBold};
		min-width: auto;
	}
	
	&.normalButton > button {
		box-shadow: none;
	}
	
	&.normalButton > button > span > .icon {
		font-size: 20px;
	}

	&.normalButton.size_small > button {
		padding: 3px 12px;
	}

	&.normalButton.size_large > button {
		padding: 9px 24px;
	}

	&.normalButton.size_small.variant_outlined > button {
		padding-top: 2px;
		padding-bottom: 2px;
	}

	&.normalButton.size_large.variant_outlined > button {
		padding-top: 8px;
		padding-bottom: 8px;
	}
	
	&.normalButton.size_small > button .icon_left {
		margin-right: 4px;
		margin-left: -4px;
	}
	
	&.normalButton.size_small > button .icon_right {
		margin-left: 4px;
		margin-right: -4px;
	}

	&.normalButton.size_medium > button .icon_left {
		margin-right: 4px;
		margin-left: -4px;
	}

	&.normalButton.size_medium > button .icon_right {
		margin-left: 4px;
		margin-right: -4px;
	}
	
	&.normalButton.size_large > button .icon_left {
		margin-right: 7px;
		margin-left: -7px;
	}
	
	&.normalButton.size_large > button .icon_right {
		margin-left: 7px;
		margin-right: -7px;
	}

	&.iconButton svg {
		font-size: ${theme.iconFontSize};
	}
	
	&.iconButton.size_small > button {
		padding: 3px;
	}

	&.iconButton.size_medium > button {
		padding: 6px;
		font-size: 15px;
	}

	&.iconButton.size_large > button {
		padding: 9px;
	}
`

const PopoverWrapper = styled.div`
	font-family: ${theme.fontFamily};
	padding: 10px;
`

const RedOnWhite = styled(ButtonWrapper)`
	& > button {
		color: ${theme.colors.red};
		border-color: ${theme.colors.red};
	}

	& > button:hover {
		background: ${theme.colors.red}12;
	}

	& > button:active,
	& > button:focus {
		background: ${theme.colors.red}24;
	}
`

const BlackOnWhite = styled(ButtonWrapper)`
	& > button {
		color: ${theme.colors.black};
		border-color: ${theme.colors.gray400};
	}

	& > button:hover {
		background: ${theme.colors.gray200};
	}

	& > button:active,
	& > button:focus {
		background: ${theme.colors.gray300};
	}
`

const BlueOnWhite = styled(ButtonWrapper)`
	& > button {
		color: ${theme.colors.blue};
		border-color: ${theme.colors.blue};
	}

	& > button:hover {
		background: ${theme.colors.blue}12;
	}

	& > button:active,
	& > button:focus {
		background: ${theme.colors.blue}24;
	}
`

const types = {
	blue_outlined : styled(BlueOnWhite)`
		& > button:hover {
			box-shadow: 0 2px 3px ${theme.colors.blue}12;
		}

		& > button:active,
		& > button:focus {
			box-shadow: 0 1px 2px ${theme.colors.blue}24;
		}
	`,
	red_outlined : styled(RedOnWhite)`
		& > button:hover {
			box-shadow: 0 2px 3px ${theme.colors.red}12;
		}

		& > button:active,
		& > button:focus {
			box-shadow: 0 1px 2px ${theme.colors.red}24;
		}
	`, 
	black_outlined : styled(BlackOnWhite)`
		& > button:hover {
			box-shadow: 0 2px 3px ${theme.colors.black}12;
		}

		& > button:active,
		& > button:focus {
			box-shadow: 0 1px 2px ${theme.colors.black}24;
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
		& > button:active,
		& > button:focus {
			background: ${theme.colors.blueActive};
		}
	`,
	lightBlue_contained : styled(ButtonWrapper)`
		& > button {
			background: ${theme.colors.blue}12;
			color: ${theme.colors.blue};
		}
		& > button:hover {
			background: ${theme.colors.blue}24;
		}
		& > button:active,
		& > button:focus {
			background: ${theme.colors.blue}32;
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
	black_contained : styled(ButtonWrapper)`
		& > button {
			background: ${theme.colors.gray200};
			color:  ${theme.colors.black};
		}
		& > button:hover {
			background: ${theme.colors.gray300};
		}
		& > button:active,
		& > button:focus {
			background: ${theme.colors.gray400};
		}
	`,
	blue_text : BlueOnWhite,
	red_text : RedOnWhite,
	black_text : BlackOnWhite,
	blue_icon : BlueOnWhite,
	black_icon : BlackOnWhite,
	red_icon : RedOnWhite
}

const TooltipContent = styled.div`
	z-index: 100;
	background: ${theme.colors.gray700};
	padding: 4px 8px;
	margin-top: 4px;
	border-radius: 4px;
	color: white;
	font-family: ${theme.fontFamily};
	font-size: 12px;
	margin: 12px 0px;
	max-width: 200px;
`;

export const ButtonPopoverContext = createContext<ButtonPopoverContextProps>(null);

function Button(props: ButtonProps) {
	const {
		attrs = {},
		muiAttrs = {}
	} = props;

	const [anchorEl, setAnchorEl] = useState(null);
	const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
	const [tooltipEl, setTooltipEl] = useState(null);

	const addAttrs: MosaicObject = {};
	
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
		setTooltipEl(null);
	}
	
	function closePopover() {
		setPopoverAnchorEl(null);
	}

	function onMouseEnter(e) {
		setTooltipEl(e.currentTarget);
	}

	function onMouseLeave(e) {
		setTooltipEl(null);
	}
	
	const onClick = props.popover ? openPopover
		: props.menuItems ? openMenu
		: props.menuContent ? openMenu
		: props.onClick
	;

	const size = props.size || "medium";

	if (props.tooltip !== undefined && props.disabled !== true) {
		addAttrs.onMouseEnter = onMouseEnter;
		addAttrs.onMouseLeave = onMouseLeave;
	}

	return (
		<MyButton
			{...attrs}
			{...addAttrs}
			className={`
				${props.className ? props.className : ""}
				button
				${props.variant === "icon" ? "iconButton" : "normalButton"}
				${props.fullWidth ? "fullWidth" : ""}
				size_${size}
				variant_${props.variant}
			`}
		>
			{
				props.variant !== "icon" &&
				<MUIButton
					{...muiAttrs}
					variant={props.variant}
					onClick={onClick}
					size={size}
					fullWidth={props.fullWidth}
					disabled={props.disabled}
					href={props.href}
				>
					{
						props.mIcon && iconPosition === "left" && 
						<MaterialIcon className="icon icon_left" style={{ color: props.mIconColor }}></MaterialIcon>
					}
					{props.label}
					{
						props.mIcon && iconPosition === "right" &&
						<MaterialIcon className="icon icon_right" style={{ color: props.mIconColor }}></MaterialIcon>
					}
				</MUIButton>
			}
			{
				props.variant === "icon" &&
				<IconButton
					{...muiAttrs}
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
						vertical: 'top',
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
						<ButtonPopoverContext.Provider value={{ onClose : closePopover }}>
							{props.popover}
						</ButtonPopoverContext.Provider>
					</PopoverWrapper>
				</Popover>
			}
			{
				props.tooltip &&
				<Popper
					open={Boolean(tooltipEl)}
					anchorEl={tooltipEl}
					style={{ zIndex:10, pointerEvents: "none" }}
				>
					<TooltipContent>{props.tooltip}</TooltipContent>
				</Popper>
			}
		</MyButton>
	)
}

export default memo(Button);