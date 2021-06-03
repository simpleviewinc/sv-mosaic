import { MosaicObject, MosaicMIcon } from "../../types";
import { ButtonProps } from "../Button";
import { MenuItemProps } from "../MenuItem";

export interface DataViewColumnTransformArgs {
	/** The value of the specific column that is being transformed */
	data: any
	/** The whole row as passed to the original DataView */
	row: MosaicObject[]
}

export interface DataViewColumnTransform {
	(args: DataViewColumnTransformArgs): any
}

export interface DataViewColumn {
	/** The name of the column. */
	name: string
	/**  Displayed label for the column. */
	label?: string
	/** The column from the passed RowData it will display in this column. Defaults to `column.name`. */
	column?: string
	/** Whether this column can be sorted. */
	sortable?: boolean
	style?: {
		/** Bold the cell. */
		bold?: boolean
		/** Italicize the cell. */
		italic?: boolean
		/** Strike through the cell. */
		strikeThrough?: boolean
		/** Prevent the column's contents from wrapping to multiple lines. */
		noWrap?: boolean
		/** Truncate the content if it gets too long. When using this you will need to also enable `noWrap` and `maxWidth`. When truncated, the content will be available in the `title` attribute automatically. */
		ellipsis?: boolean
		/** Limit the widget of the column to a specific width, pass CSS like `maxWidth : "50px"`. */
		maxWidth?: string
		/** Pass css `text-transform`. */
		textTransform?: string
	}
	/** Functions which will receive the data from the column, manipulate the value, and then return it. An example of a transformation would be converting a JS `Date` object into a user-friendly string or converting boolean `true` to string `Yes`. */
	transforms?: DataViewColumnTransform[]
}

export type DataViewFilterTypes = "optional" | "primary";
export interface DataViewFilterOnChange {
	(value: any): void
}

export interface DataViewFilterDef {
	name: string
	label: string
	type: DataViewFilterTypes
	args: object
	component: any
	column: string
	onChange: DataViewFilterOnChange
}

export interface DataViewFilterProps {
	label: string
	type: DataViewFilterTypes
	args: object
	data: object
	onRemove: () => void
}

export interface DataViewControlLimitProps {
	limit: number
	options: number[]
	onLimitChange({ limit }: { limit: number }): void
}

export type DataViewControlViewOption = "list" | "grid";

export interface DataViewControlDisplayProps {
	display: string
	displayOptions: DataViewDisplay[]
	onDisplayChange(display: string): void
}

interface DataViewActionShow {
	({ row }: { row : MosaicObject }): void
}

interface DataViewActionOnClick {
	({ data }: { data: MosaicObject }): void
}

interface DataViewBulkActionOnClick {
	({ data }: { data: MosaicObject[] }): void
}

interface DataViewBulkActionOnAllClick {
	(): void
}

interface ActionAdditional {
	/** A unique name for this action. */
	name: string
	/** A handler function to be invoked when this action is used. */
	onClick: DataViewActionOnClick
	/** A value or function controlling whether or not to display this action. */
	show?: boolean | DataViewActionShow
}

export type DataViewAction = Omit<ButtonProps, "onClick" | "attrs"> & ActionAdditional;

export type DataViewAdditionalAction = Omit<MenuItemProps, "onClick" | "selected" | "attrs"> & ActionAdditional;

export interface DataViewBulkAction extends Omit<DataViewAction, "onClick"> {
	/** A handler function to be invoked when this action is used. */
	onClick?: DataViewBulkActionOnClick
	onAllClick?: DataViewBulkActionOnAllClick
}

export interface DataViewBulkActionsButtonsRowProps {
	bulkActions: DataViewBulkAction[]
	data: MosaicObject[]
	checked: boolean[]
	checkedAllPages: boolean
}

export interface DataViewDisplay {
	name: string
	label: string
	component: React.Component
	mIcon: MosaicMIcon
}

export interface DataViewSort {
	name: string
	dir: "asc" | "desc"
}

export interface DataViewOnSortChange {
	(sort: DataViewSort): void
}

export interface DataViewOnSkipChange {
	({ skip }: { skip : number }): void
}

export interface DataViewProps {
	columns: DataViewColumn[]
	/** A list of actions which are always visible for each item in the DataView. */
	primaryActions?: DataViewAction[]
	additionalActions?: DataViewAdditionalAction[]
	bulkActions?: DataViewBulkAction[]
	// temporarily allowing extra properties until we have finished the conversion of DataView to TS
	[key: string]: any
}