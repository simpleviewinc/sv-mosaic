import { MosaicObject, MosaicToggle, SvgIconComponent } from "@root/types";

export interface MenuItemProps {
	label: string | JSX.Element;
	color?: "red" | "blue" | "black";
	mIcon?: SvgIconComponent;
	disabled?: boolean;
	selected?: boolean;
	onClick(event?: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>): void;
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
}
