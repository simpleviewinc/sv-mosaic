import type { ButtonProps } from "@root/components/Button";
import type { FormProps } from "@root/components/Form";
import type { MosaicCSSContainer } from "@root/types";

export interface TopProps {
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
	backLabel?: FormProps["backLabel"];
	/**
	 * Icon to be displayed when developers pass additional instructions
	 * or information for the form.
	 */
	helpIcon?: JSX.Element;

	bottomBorder?: boolean;

	collapse?: MosaicCSSContainer;

	skeleton?: boolean;
}
