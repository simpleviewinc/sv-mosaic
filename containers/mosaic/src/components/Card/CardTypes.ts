import type { ButtonProps } from "../Button";
import type { SvgIconComponent } from "@root/types";

export interface CardProps {
	/**
	 * List of buttons that will display at the bottom of the card.
	 */
	bottomActions?: ButtonProps[];
	/**
	 * List of elements that will be rendered vertically (from top to bottom) inside the Card.
	 */
	content: JSX.Element[];
	/**
	 * Any HTML/React element can be used as a title.
	 */
	title: string;
	/**
	 * Optional icon that will be placed to the left of the title.
	 */
	titleIcon?: SvgIconComponent;
	/**
	 * List of buttons that will display at the top of the card.
	 */
	topActions?: ButtonProps[];
}
