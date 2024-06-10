import { MosaicObject, MosaicToggle, SvgIconComponent } from "@root/types";
import { MenuItemProps } from "../MenuItem";
import { WebTarget } from "styled-components";

export type ColorTypes = "black" | "blue" | "lightBlue" | "red" | "yellow" | "teal" | "gray" | "white";
export interface ButtonProps {
	name?: string;
	label?: string | JSX.Element;
	className?: string;
	href?: string;
	color: ColorTypes;
	mIcon?: SvgIconComponent;
	variant: "icon" | "outlined" | "contained" | "text" | "input";
	size?: "small" | "medium";
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
	menuContent?: JSX.Element;
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
