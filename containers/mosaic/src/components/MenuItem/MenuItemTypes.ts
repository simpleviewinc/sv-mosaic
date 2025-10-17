import type { MosaicObject, MosaicToggle, SvgIconComponent } from "@root/types";
import type { PropsWithChildren } from "react";
import type { Theme } from "@root/theme";
export interface MenuItemBaseProps {
	value?: string;
	color?: Exclude<keyof Theme["color"], "translucent" | "white">;
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
	className?: string;
}

export type MenuItemProps = PropsWithChildren<MenuItemBaseProps> | (MenuItemBaseProps & {
	label: string | JSX.Element;
})
