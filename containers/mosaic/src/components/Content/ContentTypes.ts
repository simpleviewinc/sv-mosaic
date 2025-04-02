import type { ReactNode } from "react";

import type { MosaicObject, MosaicToggle } from "@root/types";
import type { DataViewColumnTransform } from "../DataView";
import type { ButtonProps } from "@root/components/Button";

export interface ContentFieldDef {
	/**
	 * The name of the field is used to check if
	 * is a valid compared with the sections.
	 */
	name: string;
	/**
	 * The label is render above of the component.
	 */
	label: React.ReactNode;
	/**
 	 * If provided, will render a tooltip icon alongside
 	 * the content item's label
	 */
	tooltip?: ReactNode;
	/**
	 * Functions which will receive raw data that will be use to render
	 * a component.
	 */
	transforms?: DataViewColumnTransform[];
	/**
	 * A value or array of values or function or array of functions that
	 * controlls whether or not to display a field.
	 */
	show?: MosaicToggle;
	/**
	 * If a column is given then it will be used as the name, hence
	 * defaults to name.
	 */
	column?: string;
}

export interface ContentProps {
	/**
	 * List of the definitions of the fields that will be render.
	 */
	fields: ContentFieldDef[];
	/**
	 * Data that will be used by the transform function of each
	 * field to generate the corresponding JSX element.
	 */
	data?: MosaicObject;
	/**
	 * Includes the configuration of where each field is going to be
	 * render. Fields will be render in a max of two columns.
	 */
	sections?: string[][];
	/**
	 * Name of the section or subsection.
	 */
	title: string;
	/**
	 * Configuration of the list of buttons that appear at the top
	 * of the component.
	 */
	buttons?: ButtonProps[];
	/**
	 * Variant of the component defines what styles should render
	 * if "card" is passed, content component looks like a card component
	 */
	variant?: "standard" | "card";
}

export type ContentFieldProps = ContentFieldDef & {
	value: unknown;
};

export type ContentFieldTooltipProps = Pick<ContentFieldProps, "tooltip">;
