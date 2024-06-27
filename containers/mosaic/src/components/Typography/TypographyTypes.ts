import { ReactNode } from "react";
import { MosaicObject } from "../../types";
import { ColorTypes } from "../Button";
import { Properties } from "csstype";

export type TypographyVariant = "title" | "subtitle" | "body" | "none";

export type TypographyTag = string;

export interface TypographyProps {
	/**
	 * Controls the look of the typography
	 */
	variant?: TypographyVariant;
	/**
	 * The HTML element to use.
	 */
	tag?: TypographyTag;
	/**
	 * If provided, text will be truncated at the given number of lines
	 */
	maxLines?: number;
	/**
	 * The "white-space" CSS style
	 */
	whiteSpace?: Properties["whiteSpace"];
	/**
	 * Utilises "word-break: break-all" - useful for displaying long strings with no breaking characters like URLs
	 */
	breakAll?: boolean;
	/**
	 * The content, usually text, of the Typography component
	 */
	children: ReactNode;
	/**
	 * Pass custom classes to the wrapping element
	 */
	className?: string;
	/**
	 * Provides a title attribute to the Typography element
	 */
	title?: string;
	/**
	 * Additional attributes to be provided to the Typography element
	 */
	attrs?: MosaicObject;
	/**
	 * The text colour of the typography
	 */
	color?: ColorTypes;
}
