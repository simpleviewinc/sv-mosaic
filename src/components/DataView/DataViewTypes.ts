import { ReactElement } from "react";
import { MosaicObject, MosaicCallback, MosaicLabelValue, MosaicShow } from "@root/types";
import { ButtonProps } from "../Button";
import { MenuItemProps } from "../MenuItem";
import * as React from "react";
import { DataViewActionsButtonRowProps } from "./DataViewActionsButtonRow";
import { DataViewBulkActionsButtonsRowProps } from "./DataViewBulkActionsButtonsRow";

export interface DataViewColumnTransformArgs<T = unknown> {
	/** The value of the specific column that is being transformed */
	data: T
	/** The whole row as passed to the original DataView */
	row?: MosaicObject
}

export interface DataViewColumnTransform<T = unknown> {
	(args: DataViewColumnTransformArgs<T>): React.ReactNode
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

//THIS TYPE DOESN'T SEEM TO BE USED ANYWHERE.
export type DataViewFilterTypes = "optional" | "primary";

export interface DataViewFilterOnChange {
	(value: unknown): void
}

export interface DataViewFilterDef {
	name: string
	label: string
	args?: MosaicObject
	component: React.ElementType
	column?: string
	onChange: DataViewFilterOnChange
}

export interface DataViewFilterProps {
	label: string
	args: MosaicObject
	data: unknown
	onChange: unknown
	onRemove: () => void
}

interface DataViewActionOnClick {
	({ data }: { data: MosaicObject }): void
}

export interface ActionAdditional {
	/** A unique name for this action. */
	name: string
	/** A handler function to be invoked when this action is used. */
	onClick: DataViewActionOnClick
	/** A value or function controlling whether or not to display this action. */
	// show?: boolean | DataViewActionShow | DataViewActionShow[] | boolean[] | [DataViewActionShow | boolean] | (DataViewActionShow | boolean)[];
	show?: MosaicShow<{ row: DataViewActionsButtonRowProps["originalRowData"] }>
}

interface DataViewBulkActionOnClick {
	({ data }: { data: MosaicObject[] }): void
}

export type DataViewAction = Omit<ButtonProps, "onClick" | "attrs" | "show"> & ActionAdditional;

export type DataViewAdditionalAction = Omit<MenuItemProps, "onClick" | "selected" | "attrs" | "show"> & ActionAdditional;

type CheckedTrue = { checkedAllPages: true };
type CheckedFalse = { checkedAllPages: false; data: DataViewBulkActionsButtonsRowProps["data"]};

export interface DataViewBulkAction extends Omit<DataViewAction, "onClick" | "show"> {
	/** A handler function to be invoked when this action is used. */
	onClick?: DataViewBulkActionOnClick
	onAllClick?: MosaicCallback,
	show?: MosaicShow<CheckedTrue | CheckedFalse>
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

export interface DataViewOnLimitChange {
	({ limit }: { limit : number }): void
}

export type StateViewDef = {
	limit?: DataViewProps["limit"],
	skip?: DataViewProps["skip"],
	filter?: DataViewProps["filter"],
	sort?: DataViewProps["sort"],
	display?: DataViewProps["display"],
	activeFilters?: DataViewProps["activeFilters"],
	activeColumns?: DataViewProps["activeColumns"],
}

//THIS TYPE DOESN'T SEEM TO BE USED ANYWHERE.
export interface DataViewView {
	id: string
	label: string
	type: string
	state: StateViewDef
}

export type SavedViewDef = {
	id?: string
	label?: string
	type?: "default" | "shared" | "mine"
	state?: StateViewDef
}

type SavedViewDefRemove = Required<SavedViewDef>

type DataViewOnSavedViewChange = {
	(view: SavedViewDef): void
}

type DataViewOnDisplayChange = {
	(display: string): void
}
type DataViewOnActiveFiltersChange = {
	(val: {activeFilters: string[], filter: MosaicObject}): void
}

type DataViewOnColumnsChange = {
	(activeColumns: string[]): void
}

type DataViewOnSavedViewSave = {
	(data: SavedViewDef): void
}

type DataViewOnSavedViewRemove = {
	(data: SavedViewDefRemove): void
}

type DataViewOnSavedViewGetOptions = {
	(): MosaicObject[]
}

type DataViewOnCheckChange = {
	(checked: boolean[]): void;
}

type DataViewOnCheckAllPagesChange = {
	(val: boolean): void;
}

export interface SavedViewCallbacks {
	onSave: DataViewProps["onSavedViewSave"];
	onChange: DataViewProps["onSavedViewChange"];
	onGetOptions: DataViewProps["onSavedViewGetOptions"];
	onRemove: DataViewProps["onSavedViewRemove"];
}

export interface DataViewFilterGetOptionsReturn {
	docs: MosaicLabelValue[];
	hasMore?: boolean;
}

export interface DataViewProps {
	title?: string
	loading?: boolean
	count?: number
	limit?: number
	skip?: number
	columns: DataViewColumn[]
	activeColumns?: string[]
	sticky?: boolean
	checked?: boolean[];
	checkedAllPages?: boolean;
	noResults?: ReactElement | string,
	/** A list of actions which are always visible for each item in the DataView. */
	filters?: DataViewFilterDef[]
	filter?: MosaicObject
	activeFilters?: string[]
	buttons?: ButtonProps[]
	display?: string
	onReorder?: (rows: string[]) => void;
	savedView?: SavedViewDef
	displayOptions?: string[]
	data: MosaicObject[]
	sort?: DataViewSort
	limitOptions?: number[]
	gridColumnsMap?: MosaicObject
	savedViewAllowSharedViewSave?: boolean
	primaryActions?: DataViewAction[]
	additionalActions?: DataViewAdditionalAction[]
	bulkActions?: DataViewBulkAction[]
	onSortChange?: DataViewOnSortChange
	onSkipChange?: DataViewOnSkipChange
	onLimitChange?: DataViewOnLimitChange
	onSavedViewChange?:  DataViewOnSavedViewChange
	onDisplayChange?: DataViewOnDisplayChange
	onActiveFiltersChange?: DataViewOnActiveFiltersChange
	onColumnsChange?: DataViewOnColumnsChange
	onSavedViewSave?: DataViewOnSavedViewSave
	onSavedViewRemove?: DataViewOnSavedViewRemove
	onSavedViewGetOptions?: DataViewOnSavedViewGetOptions
	onCheckChange?: DataViewOnCheckChange;
	onCheckAllPagesChange?: DataViewOnCheckAllPagesChange;
	onBack?: () => void;
}
