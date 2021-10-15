import { ReactNode } from "react";

export interface TooltipProps {
	/**
	 * Text to be displayed once the
	 * tooltip gets rendered on the screen.
	 */
	text: string | JSX.Element[];
	/**
	 * Element to be wrapped by the tooltip.
	 * When hovering over this child the tooltip
	 * will show.
	 */
	children: ReactNode;
	/**
	 * Current available types for the tooltip.
	 * Default: Small black tooltip (mostly used
	 * with icon buttons).
	 * Advanced: Large white tooltip (mostly used
	 * with fields).
	 */
	type?: 'default' | 'advanced';
}