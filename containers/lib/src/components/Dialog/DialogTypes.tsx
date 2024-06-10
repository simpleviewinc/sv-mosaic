import { ReactNode } from "react";
import { ButtonProps } from "../Button";

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
}
