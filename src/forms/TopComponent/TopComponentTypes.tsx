import { ButtonProps } from "@root/components/Button";
import { FormProps } from "@root/components/Form";
import { FormNavProps } from "@root/forms/FormNav";
import { ReactNode } from "react";

export type ViewType = "MOBILE" | "RESPONSIVE" | "DRAWER" | "DESKTOP" | "BIG_DESKTOP";

export type BaseTopComponentProps = {
	/**
	* Array of buttons provided to the Form.
	*/
	buttons?: ButtonProps[];
	/**
	 * Mandatory title related with the form.
	 */
	title: string;
	/**
	 * Optional description for the current form.
	 */
	description?: string;
	/**
	 * Optional. If present, the Back icon is displayed on the left side of the title.
	*/
	onBack?: FormProps["onBack"];
	/**
	 * If present, the help icon is display with the
	 * string defined with this prop.
	 */
	tooltipInfo?: string;
	/**
	 * If present, the active checkbox is displayed.
	 */
	showActive?: boolean;
	/**
	 * All different variants for the top comopnent.
	 */
	view: ViewType;
	/**
	 * Icon to be displayed when developers pass additional instructions
	 * or information for the form.
	 */
	helpIcon?: JSX.Element;
	sectionsRefs?: FormNavProps["sectionsRefs"];
	formContentRef?: FormNavProps["formContentRef"];
}

export type TopComponentProps = {
	/**
	 * It should contains the sections
	 */
	children?: ReactNode;
} & FormNavProps & BaseTopComponentProps;
