import { ReactNode } from "react";
import { TooltipProps as MUITooltipProps } from "@material-ui/core/Tooltip";
export interface TooltipProps {
    /**
     * Additional custom css class to style the
       * component.
     */
    className?: string;
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
    type?: "default" | "advanced";
    /**
     * Tooltip placement.
     */
    placement?: MUITooltipProps["placement"];
    /**
     * If true, the tooltip is shown.
     */
    open?: boolean;
    /**
     * Callback fired when the component requests to be open.
     */
    onOpen?: () => void;
    /**
     * Callback fired when the component requests to be closed.
     */
    onClose?: () => void;
}
