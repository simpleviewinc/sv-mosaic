import * as React from "react";
import { MosaicMIcon, MosaicObject } from "../../types";
declare type Variant = "full" | "icons_only" | "hidden" | "mobile";
export interface LeftNavOnNav {
    (args: {
        item: LeftNavItemDef;
        event: React.MouseEvent;
    }): void;
}
export interface LeftNavProps {
    /** Whether the LeftNav hidden drawer is open. */
    open: boolean;
    /** The currently displayed variant of the navigation. */
    variant: Variant;
    /** Array of top-level navigation items. */
    items: LeftNavItemRootDef[];
    /** The z-index of the primary drawer, defaults to 100 */
    zIndex?: number;
    /** The currently active navigation item, should match the "name" of the nav item */
    active?: string;
    /** Called when the drawer is closed. */
    onClose(): void;
    /** Handler for when the user chooses a nav item */
    onNav: LeftNavOnNav;
    /** Handler for when the user changes the display format for the nav */
    onVariantChange(variant: Variant): void;
}
export interface LeftNavItemDef {
    name: string;
    type?: "item" | "group";
    label: string;
    showLabel?: boolean;
    mIcon?: MosaicMIcon;
    items?: LeftNavItemDef[];
    attrs?: MosaicObject;
    onNav?: false | LeftNavOnNav;
}
export interface LeftNavItemRootDef extends LeftNavItemDef {
    pinned?: "bottom";
}
export interface LeftNavBlockProps {
    openName?: string;
    item: LeftNavItemDef;
    showLabel?: boolean;
    attrs?: MosaicObject;
    onOpen(name: string): void;
}
export interface LeftNavContextProps {
    active?: LeftNavProps["active"];
    variant: LeftNavProps["variant"];
    zIndex: LeftNavProps["zIndex"];
    /** How long to wait to hide the flyout on mouseleave. */
    leaveTimeout?: number;
    /** How long to wait to show the flyout on mouseenter. */
    enterTimeout?: number;
    onNav?: LeftNavProps["onNav"];
    ItemComponent?: (props: LeftNavBlockProps) => JSX.Element;
}
export declare const LeftNavContext: React.Context<LeftNavContextProps>;
export {};
