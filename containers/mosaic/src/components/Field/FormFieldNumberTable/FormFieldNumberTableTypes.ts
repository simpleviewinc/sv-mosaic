import { ReactNode } from "react";
import { FieldDefBase } from "@root/components/Field";

export interface NumberTableInputSettings {
	/**
   * Columns definition.
   */
	columns: Col[];
	/**
   * Label shown on the column that displays the totals.
   */
	columnTotalLabel?: ReactNode;
	/**
   * Shows or hides the column that cointains the totals sums.
   */
	displaySumColumn?: boolean;
	/**
   * Shows or hides the total sums for each row.
   */
	displaySumRow?: boolean;
	/**
   * Configuration for the formatter, see more at:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
   */
	numberFormatOptions?: Intl.NumberFormatOptions;
	/**
   * Rows definition.
   */
	rows: Row[];
	/**
   * Label shown on the total row.
   */
	rowTotalLabel?: ReactNode;
	/**
   * 	Label placed on the top left corner i.e the first column.
   */
	topLeftLabel?: ReactNode;
}

export interface Col {
	/**
   * Used to know the position of a column or row.
   */
	name: string;
	/**
   * Label displayed on the table.
   */
	title: ReactNode;
}

export interface Row extends Col {
	/**
   * Optional label shown below the title of the row.
   */
	subtitle?: ReactNode;
}

/**
 * Contains the rowName, columnName and the value for the cell
 * placed at that coordinates.
 */
export type NumberTableData = Record<string, Record<string, string>>;

export type FieldDefNumberTable = FieldDefBase<
	"numberTable",
	NumberTableInputSettings
>;
