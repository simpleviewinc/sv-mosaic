import type { ReactNode } from "react";
import type { DialogProps as MUIDialogProps } from "@mui/material/Dialog";
import type { ButtonProps } from "../Button";

export interface DialogProps {
	/**
	 * Dialog content, usually the included sub-components.
	 */
	children: ReactNode;
	/**
	 * Required modal title
	 */
	dialogTitle: string;
	/**
	 * If true, the dialog is shown
	 */
	open: boolean;
	/**
	* Array of buttons provided to the Form.
	*/
	buttons?: ButtonProps[];
	/**
	 * Called when the dialog requests to close, e.g. by pressing Escape or clicking the
	 * backdrop. Wire this up to dismiss the dialog so it stays keyboard operable (WCAG 2.1.1 /
	 * 2.1.2): without it, MUI has nothing to call and Escape does nothing.
	 */
	onClose?: MUIDialogProps["onClose"];
}
