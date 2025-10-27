import type { MosaicObject, SvgIconComponent } from "@root/types";

type MainMenuVariant = "full" | "icons_only" | "hidden" | "mobile";

export type MainMenuOnNav = (args: { item : MainMenuItemDef; event : React.MouseEvent }) => void;

export interface MainMenuProps {
	/** Whether the LeftNav hidden drawer is open. */
	open: boolean;
	/** The currently displayed variant of the navigation. */
	variant: MainMenuVariant;
	/** Array of top-level navigation items. */
	items: MainMenuItemRootDef[];
	/** The z-index of the primary drawer, defaults to 100 */
	zIndex?: number;
	/** The currently active navigation item, should match the "name" of the nav item */
	active?: string;
	/** Called when the drawer is closed. */
	onClose(): void;
	/** Handler for when the user chooses a nav item */
	onNav: MainMenuOnNav;
	/** Handler for when the user changes the display format for the nav */
	onVariantChange(variant: MainMenuVariant): void;
}

export interface MainMenuContextState extends Pick<MainMenuProps, "active" | "onNav"> {
	push: MainMenuPush;
	clearStack: () => void;
	collapsed?: boolean;
	hidden?: boolean;
	isMobileVariant?: boolean;
	onClose?: () => void;
}

export interface MainMenuItemDef {
	name: string;
	type?: "item" | "group";
	label: string;
	showLabel?: boolean;
	mIcon?: SvgIconComponent;
	items?: MainMenuItemDef[];
	attrs?: MosaicObject;
	onNav?: false | MainMenuOnNav;
	isActive?: boolean;
}

export interface MainMenuItemRootDef extends MainMenuItemDef {
	pinned?: "bottom";
}

export type MainMenuPush = (params: {
	index: number;
	items: MainMenuItemDef[];
	parent: MainMenuItemDef | MainMenuItemRootDef;
}) => void;

export type MainMenuPop = () => void;

export interface MainMenuStackPanel {
	items: MainMenuItemDef[];
	parent: MainMenuItemDef | MainMenuItemRootDef;
}
