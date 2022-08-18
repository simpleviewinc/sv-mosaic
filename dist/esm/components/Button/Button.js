import * as React from "react";
import { useState, memo, createContext } from "react";
import MUIButton from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Popper from "@mui/material/Popper";
import Menu from "../Menu";
import MenuBase from "../MenuBase";
import { PopoverWrapper, TooltipContent, types } from "./Button.styled";
export const ButtonPopoverContext = createContext(null);
function Button(props) {
    const { attrs = {}, muiAttrs = {} } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
    const [tooltipEl, setTooltipEl] = useState(null);
    const addAttrs = {};
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
    const onClick = props.popover ? openPopover
        : props.menuItems ? openMenu
            : props.menuContent ? openMenu
                : props.onClick;
    const size = props.size || "medium";
    if (props.tooltip !== undefined && props.disabled !== true) {
        addAttrs.onMouseEnter = onMouseEnter;
        addAttrs.onMouseLeave = onMouseLeave;
    }
    return (React.createElement(MyButton, { ...attrs, ...addAttrs, className: `
				${props.className ? props.className : ""}
				button
				${props.variant === "icon" ? "iconButton" : "normalButton"}
				${props.fullWidth ? "fullWidth" : ""}
				size_${size}
				variant_${props.variant}
			` },
        props.variant !== "icon" &&
            React.createElement(MUIButton, { ...muiAttrs, variant: props.variant, onClick: onClick, size: size, fullWidth: props.fullWidth, disabled: props.disabled, href: props.href },
                props.mIcon && iconPosition === "left" &&
                    React.createElement(MaterialIcon, { className: "icon icon_left", style: { color: props.mIconColor } }),
                props.label,
                props.mIcon && iconPosition === "right" &&
                    React.createElement(MaterialIcon, { className: "icon icon_right", style: { color: props.mIconColor } })),
        props.variant === "icon" &&
            React.createElement(IconButton, { ...muiAttrs, onClick: onClick, disabled: props.disabled, size: "large" }, props.mIcon && React.createElement(MaterialIcon, { "data-testid": "icon-button-test", className: "icon" })),
        props.menuItems &&
            React.createElement(Menu, { items: props.menuItems, anchorEl: anchorEl, open: Boolean(anchorEl), onClose: closeMenu }),
        props.menuContent &&
            React.createElement(MenuBase, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: closeMenu }, props.menuContent),
        props.popover &&
            React.createElement(Popover, { open: Boolean(popoverAnchorEl), anchorEl: popoverAnchorEl, anchorOrigin: {
                    vertical: "top",
                    horizontal: "left",
                }, transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                }, onClose: closePopover, disableRestoreFocus: true },
                React.createElement(PopoverWrapper, null,
                    React.createElement(ButtonPopoverContext.Provider, { value: { onClose: closePopover } }, props.popover))),
        props.tooltip &&
            React.createElement(Popper, { open: Boolean(tooltipEl), anchorEl: tooltipEl, style: { zIndex: 10, pointerEvents: "none" } },
                React.createElement(TooltipContent, null, props.tooltip))));
}
export default memo(Button);
