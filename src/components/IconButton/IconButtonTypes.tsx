import { MouseEventHandler } from "react";
import { MosaicMIcon } from "@root/types";

export interface IconButtonProps {
  /**
   * Additional custom class.
   */
  className?: string;
  /**
   * Flag to indicate whether the button is clickable or not
   */
  disabled?: boolean;
  /**
   * Material UI icon
   */
  icon: MosaicMIcon;
  /**
   * In case the icon button shows a tooltip, this prop
   * represents its content
   */
  tooltipText?: string;
  /**
   * Callback fired when the icon button is clicked
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
