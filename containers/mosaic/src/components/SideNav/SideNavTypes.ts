import { MosaicCSSContainer, MosaicToggle, SvgIconComponent } from "@root/types";
import { AnchorHTMLAttributes, MouseEvent } from "react";

export interface SideNavArgs {
	item: Item;
	event: MouseEvent;
}

export type SideNavOnNav = (args: SideNavArgs) => void;

export interface SideNavProps {
	/**
	 * List of lists of links, each list represents a section of links
	 */
	items: Item[][];
	/**
	 * Optional, active link from Links array
	 */
	active?: string;
	/**
	 * Optional, handler for when the user clicks an item
	 */
	onNav?: SideNavOnNav;

	className?: string;

	collapse?: MosaicCSSContainer;
}

export type SideNavGroupProps = Pick<SideNavProps, "collapse" | "active"> & {
	items: Item[];

	onLinkClicked: (args: { item: Item; event?: MouseEvent }) => void;
};

export interface Item {
	/**
	 * Each link could have an optional action which consists of an
	 * icon that will be displayed when hovering over the link and
	 * an onClick callback
	 */
	action?: { icon: SvgIconComponent; onClick: () => void };
	/**
	 * Anchor element attributes.
	 */
	attrs?: AnchorHTMLAttributes<HTMLAnchorElement>;
	/**
	 * Optional descriptive mark of the link.
	 */
	badge?: string;
	/**
	 * Optional link left icon.
	 */
	icon?: SvgIconComponent;
	/**
	 * Label that names the link.
	 */
	label: string;
	/**
	 * Name of the item. It is used to set it as active when is clicked.
	*/
	name: string;
	/**
	 * Callback that each link will execute on an onClick event.
	 */
	onNav?: false | SideNavOnNav;
	/**
	 * MosaicToggle to evaluate whether or not to show this item
	 */
	show?: MosaicToggle;
}
