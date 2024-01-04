import { ReactNode } from "react";
import { TooltipProps as MUITooltipProps } from "@mui/material/Tooltip";

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
  text: string | JSX.Element[] | ReactNode;
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
