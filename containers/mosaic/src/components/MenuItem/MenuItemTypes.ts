import type { MosaicObject, MosaicToggle, SvgIconComponent } from "@root/types";
import type { colors } from "./MenuItem.styled";

export interface MenuItemProps {
	label: string | JSX.Element;
	value?: string;
	color?: (typeof colors)[number];
	mIcon?: SvgIconComponent;
	disabled?: boolean;
	selected?: boolean;
	onClick?: (event?: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>) => void;
	attrs?: MosaicObject;
	name?: string;
	show?: MosaicToggle;
	truncateText?: boolean;
	/**
	 * If true and the label is a string, the menu item
	 * will take on a title attribute that matches the label.
	 * If a string is provided, that will be used as the title
	 * instead.
	 */
	title?: boolean | string;
	tabIndex?: number;
	autoFocus?: boolean;
}
