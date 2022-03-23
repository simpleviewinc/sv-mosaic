import { MosaicMIcon, MosaicObject } from "../../types";
import { MenuItemProps } from "../MenuItem";

export interface ButtonProps {
	label?: string | JSX.Element
	className?: string
	href?: string
	color: "black" | "blue" | "lightBlue" | "red" | "yellow" | "teal" | "gray"
	mIcon?: MosaicMIcon
	variant: "icon" | "outlined" | "contained" | "text"
	size?: "small" | "medium" | "large"
	iconPosition?: "left" | "right"
	disabled?: boolean
	/** Button will occupy 100% of the width provided to it */
	fullWidth?: boolean
	/** Display a tooltip on hover of the button */
	tooltip?: string | JSX.Element
	/** Trigger a popover on click */
	popover?: JSX.Element
	menuItems?: MenuItemProps[]
	menuContent?: JSX.Element
	mIconColor?: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	/** Attrs for the root span that wraps the button */
	attrs?: MosaicObject
	/** Attrs for the nested Material UI IconButton or Button */
	muiAttrs?: MosaicObject
}

export interface ButtonPopoverContextProps {
	onClose(): void
}