import { createContext } from "react";
import { MosaicMIcon } from "../../types";

export interface LeftNavSettings {
	variant: string
}

export interface LeftNavSettingsStorage {
	get: () => (LeftNavSettings | Promise<LeftNavSettings>)
	set: (settings: LeftNavSettings) => (void | Promise<void>)
}

export interface LeftNavProps {
	open: boolean
	items?: LeftNavItemDef[]
	settingsStorage?: LeftNavSettingsStorage
	/** the z-index of the primary drawer, defaults to 100 */
	zIndex?: number
	onClose(): void
	/** handler for when the user chooses a nav item */
	onNav({ item }: { item : LeftNavItemDef }): void
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
	onOpen: LeftNavOnOpen
}

export interface LeftNavContextProps {
	variant: string
	zIndex: LeftNavProps["zIndex"]
	/** How long to wait to hide the flyout on mouseleave. */
	leaveTimeout: number
	/** How long to wait to show the flyout on mouseenter. */
	enterTimeout: number
	onNav: LeftNavProps["onNav"]
	onVariantChange: (variant: string) => void
}

export interface LeftNavOnOpen {
	(anchorEl: HTMLElement): void
}

export const LeftNavContext = createContext<LeftNavContextProps>(null);