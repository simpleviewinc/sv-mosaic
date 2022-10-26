import * as React from "react";
import { useState, memo, createContext, useMemo, MouseEvent } from "react";
import MUIButton from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Popper from "@mui/material/Popper";

import { ButtonProps, ButtonPopoverContextProps } from "./ButtonTypes";
import Menu from "../Menu";
import MenuBase from "../MenuBase";
import { MosaicObject } from "../../types";
import { PopoverWrapper, TooltipContent, types } from "./Button.styled";

export const ButtonPopoverContext = createContext<ButtonPopoverContextProps>(null);

function Button(props: ButtonProps) {
	const {
		attrs = {},
		muiAttrs = {},
		popover,
		popoverEvent = "onClick"
	} = props;

	const [anchorEl, setAnchorEl] = useState(null);
	const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
	const [tooltipEl, setTooltipEl] = useState(null);

	const addAttrs: MosaicObject = {};

	// const textLink = props.variant === "text" && props.href ? "_link" : "";

	// const MyButton = types[`${props.color}_${props.variant}${textLink}`];
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

	const onClick = popover ? openPopover
		: props.menuItems ? openMenu
		: props.menuContent ? openMenu
		: props.onClick
		;

	const size = props.size || "medium";

	if (props.tooltip !== undefined && props.disabled !== true) {
		addAttrs.onMouseEnter = onMouseEnter;
		addAttrs.onMouseLeave = onMouseLeave;
	}

	const isPopoverOnHover = useMemo(() => popoverEvent === "onHover", [popoverEvent]);

	return (
		<MyButton
			onMouseEnter={isPopoverOnHover ? openPopover : undefined}
			onMouseLeave={isPopoverOnHover ? closePopover : undefined}
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
				<IconButton {...muiAttrs} onClick={onClick} disabled={props.disabled} size="large">
					{props.mIcon && <MaterialIcon data-testid="icon-button-test" className="icon"></MaterialIcon>}
				</IconButton>
			}
			{
				props.menuItems &&
				<Menu items={props.menuItems} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu} />
			}
			{
				props.menuContent &&
				<MenuBase anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
					{props.menuContent}
				</MenuBase>
			}
			{
				popover &&
				<Popover
					open={Boolean(popoverAnchorEl)}
					anchorEl={popoverAnchorEl}
					anchorOrigin={{
						vertical: isPopoverOnHover ? "bottom" : "top",
						horizontal: "left",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
					onClose={closePopover}
					disableRestoreFocus
					style={ isPopoverOnHover ? { pointerEvents: "none" } : null}
				>
					<PopoverWrapper>
						<ButtonPopoverContext.Provider value={{ onClose: closePopover }}>
							{popover}
						</ButtonPopoverContext.Provider>
					</PopoverWrapper>
				</Popover>
			}
			{
				props.tooltip &&
				<Popper
					open={Boolean(tooltipEl)}
					anchorEl={tooltipEl}
					style={{ zIndex: 10, pointerEvents: "none" }}
				>
					<TooltipContent>{props.tooltip}</TooltipContent>
				</Popper>
			}
		</MyButton>
	);
}

export default memo(Button);
