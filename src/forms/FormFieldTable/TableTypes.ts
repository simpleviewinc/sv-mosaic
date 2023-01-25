import { FieldDefBase } from "@root/components/Field";
import { SvgIconComponent } from "@root/types";

export type TableRow = {
	/**
	 * Unique identifier. Used as an
	 * identifier for the draggable item.
	 */
	id: string;
	/**
	 * Data that is shown in the table.
	 */
	items: string[];
};

export type Actions = {
	/**
	 * Name of the menu option.
	 */
	label: string;
	/**
	 * MUI Icon
	 */
	icon: SvgIconComponent;
	/**
	 * Callback function that will be triggered
	 * when the icon for the respective action is clicked.
	 */
	actionFnc: (rowIndex: number) => void;
};

export type TableInputSettings = {
	/**
	 * Possible actions that the table could execute and display.
	 */
	extraActions?: Actions[];
	/**
	 * Used to create a new row.
	 */
	handleAddElement: () => void;
	/**
	 * Used to define how that edition should happen.
	 */
	handleEdit: (rowIndex: number) => void;
	/**
	 * It can be used to show some kind of confirmation
	 * before removing the row.
	 */
	handleDelete?: (rowIndex: number) => void;
	/**
	 * Table headers.
	 */
	headers: string[];
}

export type TableDataState = {
  table: TableRow[];
}

export type UseTableReturnType = {
	addTableRow: TableInputSettings["handleAddElement"];
	editAction: TableInputSettings["handleEdit"];
	extraActionsTable: TableInputSettings["extraActions"];
}

export type TableData = TableRow[];

export type FieldDefTable = FieldDefBase<"textEditor", TableInputSettings, TableData>
