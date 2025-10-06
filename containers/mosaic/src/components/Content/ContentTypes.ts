import type { ReactNode } from "react";

import type { MosaicObject, MosaicToggle } from "@root/types";
import type { DataViewColumnTransform } from "../DataView";
import type { ButtonProps } from "@root/components/Button";
import type { BREAKPOINTS } from "@root/theme";

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

export type BreakpointColumns = Partial<{
	[K in keyof typeof BREAKPOINTS]: number
}>

export interface ContentRow<T = string> {
	breakpoints: BreakpointColumns;
	fields: T[];
}

export interface ContentProps {
	/**
	 * Array of field definitions that control how content data is displayed.
	 *
	 * Each field definition specifies:
	 * - The field name and label for display
	 * - Optional data transformations to format values
	 * - Conditional visibility rules
	 * - Column mapping for data extraction
	 * - Optional tooltip content
	 *
	 * Fields are rendered in the order defined in this array, unless overridden
	 * by the `sections` prop which can regroup and reorder field display.
	 *
	 * @example
	 * ```typescript
	 * const fields: ContentFieldDef[] = [
	 *   {
	 *     name: "title",
	 *     label: "Title",
	 *     transforms: (title) => <h3>{title}</h3> // Render the title in a h3 element
	 *   },
	 *   {
	 *     name: "status",
	 *     label: "Status",
	 *     show: [userCan("readStatus"), hasStatus],
	 *     transforms: (status) => <Chip>{status}</Chip> // Render the status inside a chip
	 *   },
	 *   {
	 *     name: "description",
	 *     label: "Description",
	 *     tooltip: "Additional details about this item",
	 *     column: "desc" // Maps to data.desc instead of data.description
	 *   }
	 * ];
	 * ```
	 */
	fields: ContentFieldDef[];
	/**
	 * Data that will be used by the transform function of each
	 * field to generate the corresponding JSX element.
	 */
	data?: MosaicObject;
	/**
	 * Defines the layout and grouping of fields into rows and columns.
	 *
	 * Can be either:
	 * - Array of string arrays - Simple field grouping where each inner array represents a row
	 * - Array of `ContentRow` objects - Advanced configuration with custom breakpoints per row
	 * - Mixed array - Combination of both simple arrays and `ContentRow` objects
	 *
	 * If not provided, defaults to displaying all fields in a single column layout.
	 * The responsive behavior is controlled by the `columns` prop, but individual rows
	 * can override this with their own `breakpoints` configuration.
	 *
	 * @default All fields displayed in single column: `fields.map(field => [field.name])`
	 *
	 * @example
	 * // Simple layout - fields grouped into rows
	 * sections={[
	 *   ["field1"],           // Single field row
	 *   ["field2", "field3"], // Two fields in one row
	 *   ["field4", "field5", "field6"] // Three fields in one row
	 * ]}
	 *
	 * @example
	 * // Advanced layout with custom breakpoints per row
	 * sections={[
	 *   ["field1"], // Uses global columns setting
	 *   {
	 *     fields: ["field2", "field3", "field4"],
	 *     breakpoints: { sm: 1, md: 2, lg: 3 } // Custom responsive behavior
	 *   }
	 * ]}
	 *
	 * @example
	 * // Mixed configuration
	 * sections={[
	 *   ["title", "subtitle"], // Simple row
	 *   {
	 *     fields: ["stat1", "stat2", "stat3", "stat4"],
	 *     breakpoints: { md: 2, lg: 4 } // Statistics in responsive grid
	 *   },
	 *   ["description"] // Full-width description
	 * ]}
	 */
	sections?: (string[] | ContentRow)[];
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
	 * @deprecated All content components now have the style of cards.
	 */
	variant?: "standard" | "card";
	/**
	 * Controls the responsive layout behavior of content fields.
	 *
	 * Can be either:
	 * - A breakpoint name (`"sm" | "md" | "lg" | "xl" | "2xl"`) - Fields will display as columns
	 *   starting at this breakpoint. Below this breakpoint, fields stack vertically.
	 * - A `BreakpointColumns` object for granular control - Specify exact number of columns
	 *   at different breakpoints.
	 *
	 * @default "md" - Fields display as columns starting at medium breakpoint (768px)
	 *
	 * @example
	 * // Simple breakpoint - fields become columns at large screens
	 * columns="lg"
	 *
	 * @example
	 * // Granular control - 1 column on small, 2 on medium, 3 on large screens
	 * columns={{
	 *   sm: 1,
	 *   md: 2,
	 *   lg: 3
	 * }}
	 */
	columns?: keyof typeof BREAKPOINTS | BreakpointColumns;
}

export type ContentFieldProps = ContentFieldDef & {
	value: unknown;
};

export type ContentFieldTooltipProps = Pick<ContentFieldProps, "tooltip">;
