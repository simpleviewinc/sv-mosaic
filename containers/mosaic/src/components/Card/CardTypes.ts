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
	/**
	 * If defined, a number that will be displayed to indicate the number of items
	 * (whatever they may be) that are listed in the card's content
	 */
	count?: number;
	/**
	 * Whether or not to display the count if it is zero. Has no effect if `count`
	 * is `undefined`.
	 */
	showZeroCount?: boolean;
	/**
	 * Whether to collapse the main content of the card, showing only the title region
	 */
	collapsed?: boolean;
}
