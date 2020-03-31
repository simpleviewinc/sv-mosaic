import { createContext } from "react";
import { MosaicMIcon } from "../../types";

export interface LeftNavProps {
	open: boolean
	current?: string
	items?: LeftNavItemDef[]
	/** the z-index of the primary drawer, defaults to 100 */
	zIndex?: number
	onClose(): void
	onNav({ item }: { item : LeftNavItemDef }): void
}

export interface LeftNavItemDef {
	name: string
	type?: "item" | "group"
	label: string
	mIcon?: MosaicMIcon
	items?: LeftNavItemDef[]
}

export interface LeftNavBlockProps {
	openAnchorEl?: HTMLElement
	item: LeftNavItemDef
	onOpen: LeftNavOnOpen
}

export interface LeftNavContextProps {
	zIndex: LeftNavProps["zIndex"]
	onNav: LeftNavProps["onNav"]
}

export interface LeftNavOnOpen {
	(anchorEl: HTMLElement): void
}

export const LeftNavContext = createContext<LeftNavContextProps>(null);