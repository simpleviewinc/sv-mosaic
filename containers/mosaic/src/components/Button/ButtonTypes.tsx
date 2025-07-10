import type { MosaicObject, MosaicToggle, SvgIconComponent } from "@root/types";
import type { MenuItemProps } from "../MenuItem";
import type { WebTarget } from "styled-components";
import type { MenuProps } from "../Menu/MenuTypes";

export type ColorTypes = "black" | "blue" | "lightBlue" | "red" | "yellow" | "teal" | "gray" | "white";

export type ButtonIntent = "primary" | "secondary" | "tertiary" | "info" | "specialized" | "danger";
export interface ButtonProps {
	name?: string;
	label?: string | JSX.Element;
	className?: string;
	href?: string;
	/**
	 * @deprecated The `color` prop is deprecated and should no longer be used, it will be removed in a future version. Use the `intent` prop instead.
	 */
	color?: ColorTypes;
	intent?: ButtonIntent;
	mIcon?: SvgIconComponent;
	variant:
		/**
		 * @deprecated
		 */
		| "icon"
		/**
		 * @deprecated
		 */
		| "outlined"
		| "contained"
		| "text"
		| "input";
	size?: "xsmall" | "small" | "medium" | "large" | "inherit";
	iconPosition?: "left" | "right";
	disabled?: MosaicToggle;
	/** Button will occupy 100% of the width provided to it */
	fullWidth?: boolean;
	/** Display a tooltip on hover of the button */
	tooltip?: string | JSX.Element;
	/** Trigger a popover on click */
	popover?: JSX.Element;
	popoverEvent?: "onClick" | "onHover";
	menuItems?: MenuItemProps[];
	menuOnChange?: MenuProps["onChange"];
	menuValue?: MenuProps["value"];
	mIconColor?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
	onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
	onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
	/** Attrs for the root span that wraps the button */
	attrs?: MosaicObject;
	/** Attrs for the nested Material UI IconButton or Button */
	muiAttrs?: MosaicObject;
	show?: MosaicToggle;
	component?: React.ComponentType;
	type?: "button" | "submit";
	id?: string;
	as?: WebTarget;
	invisible?: boolean;
}

export interface ButtonPopoverContextProps {
	onClose(): void;
}
