import type { ReactNode } from "react";
import type { MosaicObject } from "../../types";
import type { Properties } from "csstype";
import type { Theme } from "@root/theme/theme";

export type TypographyVariant = keyof Theme["fontSize"];

export type TypographyTag = string;

export type TypographyVariantSize<T extends TypographyVariant> = keyof Theme["fontSize"][T]

export type TypographyVariantSizeMap = {
	[V in TypographyVariant]: {
		[S in keyof Theme["fontSize"][V]]: {
			fontSize: Theme["fontSize"][V][S];
			lineHeight: Theme["line"][keyof Theme["line"]];
		}
	};
};
export interface TypographyProps<T extends TypographyVariant> {
	/**
	 * Controls the look of the typography
	 */
	variant?: T;
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
	color?: string;
	/**
	 * The size of the text, which is determined by the variant
	 */
	size?: TypographyVariantSize<T>;
	/**
	 * The weight of the font. Defaults to different weights depending
	 * on the Typography variant.
	 */
	weight?: keyof Theme["weight"];
}
