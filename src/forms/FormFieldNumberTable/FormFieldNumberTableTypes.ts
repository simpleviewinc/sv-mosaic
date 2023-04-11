import { FieldDefBase } from "@root/components/Field";

export type NumberTableInputSettings = {
  /**
   * Columns definition.
   */
  columns: Col[];
  /**
   * Label shown on the column that displays the totals.
   */
  columnTotalLabel?: string;
  /**
   * Shows or hides the column that cointains the totals sums.
   */
  displaySumColumn?: boolean;
  /**
   * Shows or hides the total sums for each row.
   */
  displaySumRow?: boolean;
  /**
   * Rows definition.
   */
  rows: Row[];
  /**
   * Label shown on the total row.
   */
  rowTotalLabel?: string;
  /**
   * 	Label placed on the top left corner i.e the first column.
   */
  topLeftLabel?: string;
};

export interface Col {
  /**
   * Used to know the position of a column or row.
   */
  name: string;
  /**
   * Label displayed on the table.
   */
  title: string;
}

export interface Row extends Col {
  /**
   * Optional label shown below the title of the row.
   */
  subtitle?: string;
}

/**
 * Contains the rowName, columnName and the value for the cell
 * placed at that coordinates.
 */
export type NumberTableData = {
  [rowName: string]: {
    [columnName: string]: string;
  };
};

export type FieldDefNumberTable = FieldDefBase<
  "numberTable",
  NumberTableInputSettings,
  NumberTableData
>;
