import type { ReactNode } from "react";
import type { TitleWrapperProps } from "@root/components/Title";
import type { ButtonProps } from "../Button";
import type { MenuItemProps } from "../MenuItem";

export interface TopSummaryProps {
	/**
	 * Mandatory title.
	 */
	title: ReactNode;
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
