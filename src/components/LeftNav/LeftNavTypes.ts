import { createContext } from "react";
import { MosaicMIcon } from "../../types";

type Variant = "full" | "icons_only" | "hidden";

export interface LeftNavProps {
	/** Whether the LeftNav hidden drawer is open. */
	open: boolean
	/** The currently displayed variant of the navigation. */
	variant: Variant
	items?: LeftNavItemDef[]
	/** The z-index of the primary drawer, defaults to 100 */
	zIndex?: number
	/** The currently active navigation item, should match the "name" of the nav item */
	active?: string
	onClose(): void
	/** Handler for when the user chooses a nav item */
	onNav({ item }: { item : LeftNavItemDef }): void
	/** Handler for when the user changes the display format for the nav */
	onVariantChange(variant: Variant): void 
}

export interface LeftNavItemDef {
	name: string
	type?: "item" | "group"
	label: string
	showLabel?: boolean
	mIcon?: MosaicMIcon
	items?: LeftNavItemDef[]
}

export interface LeftNavBlockProps {
	openAnchorEl?: HTMLElement
	item: LeftNavItemDef
	showLabel?: boolean
	onOpen(anchorEl: HTMLElement): void
}

export interface LeftNavContextProps {
	active: LeftNavProps["active"]
	zIndex: LeftNavProps["zIndex"]
	/** How long to wait to hide the flyout on mouseleave. */
	leaveTimeout: number
	/** How long to wait to show the flyout on mouseenter. */
	enterTimeout: number
	onNav: LeftNavProps["onNav"]
}

export const LeftNavContext = createContext<LeftNavContextProps>(null);