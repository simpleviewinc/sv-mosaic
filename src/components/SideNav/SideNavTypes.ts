import { SvgIconComponent } from "@root/types";
import { MouseEvent } from "react";

export interface SideNavOnNav {
	(item : Item, event : MouseEvent): void
}

export interface SideNavProps {
  /**
   * List of lists of links, each list represents a section of links
   */
  items: Item[][];
  /**
   * Optional, active link from Links array
   */
  active?: string;
}

export type Item = {
	/**
	 * Name of the item. It is used to set it as active when is clicked.
	 */
	name: string;
	/**
	 * Optional descriptive mark of the link.
	 */
	badge?: string;
  /**
   * Label that names the link.
   */
  label: string;
  /**
   * Optional link left icon.
   */
  icon?: SvgIconComponent;
  /**
   * Callback that each link will execute on an onClick event.
   */
  onNav: SideNavOnNav;
  /**
   * Each link could have an optional action which consists of an
   * icon that will be displayed when hovering over the link and
   * an onClick callback
   */
  action?: { icon: SvgIconComponent; onClick: () => void };
};
