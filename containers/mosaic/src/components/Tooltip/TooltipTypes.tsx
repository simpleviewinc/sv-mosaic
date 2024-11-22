import type { Dispatch, ReactNode } from "react";
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
	"aria-describedby": string;
}
