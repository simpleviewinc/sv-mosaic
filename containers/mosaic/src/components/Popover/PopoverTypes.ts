import type { PopperProps } from "@mui/material/Popper";

export interface PopoverProps {
	/**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the popover. This
	 * prop is required because the reference of the element
	 * is needed to display the pointing arrow
   */
	anchorEl: PopperProps["anchorEl"];
	/**
   * Content displayed at the bottom of the Popover
   */
	bottomContent?: JSX.Element;
	/**
   * Used for adding or overriding styles.
   */
	className?: string;
	/**
   * Content displayed at the top of the Popover
   */
	topContent?: JSX.Element;
	/**
   * If true, the component is shown.
   */
	open: boolean;
	/**
   * Callback fired when the component requests to be closed.
   */
	onClose?: () => void;
}
