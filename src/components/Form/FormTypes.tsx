import { ButtonProps } from "@root/components/Button";
import { FieldDef } from "@root/components/Field";
import { ReactNode } from "react";
import { Section } from "@root/forms/FormNav/FormNavTypes";
import { MosaicObject } from "@root/types";

export interface SectionDef extends Section {
	title?: string;
	description?: string | JSX.Element;
	fields: string[][][];
	children?: ReactNode;
}

export interface FormProps {
	/**
	 * Used when creating a Form inside a drawer.
	 */
	type?: "drawer";
	/**
	 * Global state of each field included in the Form.
	 */
	state: any;
	/**
	 * Title of the Form.
	 */
	title?: string;
	/**
	 * List of fields definition.
	 */
	fields: FieldDef[];
	/**
	 * Contains a list with the configuration for every section
	 * of the form, including the layout in which fields will be rendered.
	 */
	sections?: SectionDef[];
	/**
	 * Function in charge of updating the state of the Form.
	 */
	dispatch: any;
	/**
	 * Function with any args that will be executed when the user clicks
	 * on the cancel button of the form.
	 * @param args
	 */
	onCancel?(...args: any): any;
	/**
	 * this flag will render a dialog with the message "You have unsaved changes.
	 * If you leave all your changes will be lost." This only works with the prop type = "drawer".
	 */
	dialogOpen?: boolean;
	/**
	 * Description text that will be rendered under the title.
	 */
	description?: string;
	/**
	 * Function that will run once the form renders to prepopulate the fields.
	 * This should return an object where the key is the name of the field, and
	 * the value is the value to prepopulate the field.
	 */
	getFormValues?(): Promise<MosaicObject>;
	/**
	 * Function that will get called when closing the dialog
	 */
	handleDialogClose?: (val: boolean) => void;
	/**
	 * Array of buttons that will be rendered on the TopComponent.
	 */
	buttons?: ButtonProps[];
}
