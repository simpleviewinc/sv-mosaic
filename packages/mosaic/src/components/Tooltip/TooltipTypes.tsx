import type { Dispatch, KeyboardEvent, ReactNode } from "react";
import type { TooltipProps as MUITooltipProps } from "@mui/material/Tooltip";

export type AnchorElement = HTMLElement | SVGElement;

export interface TooltipProps {
	/**
   * The tooltip anchor. Must be a type of
   * HTML element
   */
	anchorEl: AnchorElement | null;
	/**
   * Whether or not the tooltip is currently
   * visible on screen
   */
	open: boolean;
	/**
   * Element to be wrapped by the tooltip.
   * When hovering over this child the tooltip
   * will show.
   */
	children: ReactNode;
	/**
   * Tooltip placement.
   */
	placement?: MUITooltipProps["placement"];
	/**
   * The tooltip ID, should to referred to by
   * the anchor's aria-describedby attribute
   */
	id?: string;
	/**
   * The maximum width for the tooltip. Accepts
   * a number of pixels or any valid CSS max-width unit
   */
	maxWidth?: string | number;
}

export interface AnchorProps {
	ref: Dispatch<AnchorElement | null>;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
	/**
   * Opens the tooltip on keyboard focus. WCAG 2.1 SC 1.4.13 requires content
   * revealed on pointer hover to be reachable by keyboard too, so this must be
   * bound wherever `onMouseEnter` is.
   */
	onFocus: () => void;
	onBlur: () => void;
	/**
   * Closes the tooltip on Escape, satisfying SC 1.4.13's Dismissible
   * requirement. It does not stop propagation, so an anchor inside a popover
   * or dialog still sees the key.
   */
	onKeyDown: (event: KeyboardEvent) => void;
	/**
   * Present only while the tooltip is open. When it is closed there is no
   * tooltip in the document, and an attribute pointing at a missing id is a
   * broken reference rather than an absent one.
   */
	"aria-describedby"?: string;
}
