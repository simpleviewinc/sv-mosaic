import { SvgIconComponent } from "@root/types";

export interface ContentProps {
	/**
	 * Name of the section or subsection.
	 */
	title: string;
	/**
	 * Callback that will be executed when the Edit icon is clicked.
	 */
	onEdit?: () => void;
	/**
	 * Callback that will be executed when the '+' icon is clicked.
	 */
	onAdd?: () => void;
	/**
	 * List of the types of content that will be display. 
	 * Each array can only contain at most two items that
	 * are rendered proportionally in columns.
	 */
	content?: [ContentType, ContentType?][];
}

/**
 * Each content can contain a type, a lavel, a value and an icon. Depending of the type of content
 * will be type of value.
 */
export type ContentType = { type: Types, label: string, value: Value, icon?: SvgIconComponent }
/**
 * Possibles types of contents
 */
export type Types = "paragraph" | "labelValue" | "tags" | "file"
/**
 * Value of the content. String is used for types "file", "labelValue" and "paragraph". The
 * array of string is intended to be used with the "tags" type of content.
 */
export type Value = string | string[];
