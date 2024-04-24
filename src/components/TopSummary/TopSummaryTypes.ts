import { TitleWrapperProps } from "@root/components/Title";
import { ButtonProps } from "../Button";
import { MenuItemProps } from "../MenuItem";

export interface TopSummaryTypes {
	/**
	 * Mandatory title.
	 */
	title: string;
	/**
	 * Optional favorite to show favorite icon or no favorite icon.
	 */
	favorite?: {
		checked: boolean;
		onClick: (checked: boolean) => void;
	};
	/**
	 * Optional src to show an image.
	 */
	img?: string;
	/**
	 * Optional array of buttons, max three items.
	 */
	mainActions?: ButtonProps[];
	/**
	 * Optional array of buttons, could have infinite items.
	 */
	additionalActions?: MenuItemProps[];
	/**
	 * Optional array of strings.
	 */
	descriptionItems?: JSX.Element[];
	// /**
	//  * Optional array of buttons, max three items.
	//  */
	// textLinks?: {
	// 	label: string;
	// 	mIcon?: ButtonProps["mIcon"];
	// 	href: ButtonProps["href"];
	// 	onClick?: ButtonProps["onClick"];
	// }[];
	/**
	 * Optional. If present, the Back icon is displayed on the left side of the title.
	*/
	onBack?: () => void;

	backLabel?: TitleWrapperProps["backLabel"];
}
