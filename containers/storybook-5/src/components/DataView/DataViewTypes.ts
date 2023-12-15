import { ReactElement } from "react";
import { MosaicObject, MosaicCallback, MosaicLabelValue, MosaicShow } from "@root/types";
import { ButtonProps } from "../Button";
import { MenuItemProps } from "../MenuItem";
import * as React from "react";
import { DataViewActionsButtonRowProps } from "./DataViewActionsButtonRow";
import { TitleWrapperProps } from "@root/components/Title";

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

export interface DataViewBulkAction extends Omit<DataViewAction, "onClick" | "show"> {
	/** A handler function to be invoked when this action is used. */
	onClick?: DataViewBulkActionOnClick
	onAllClick?: MosaicCallback,
	show?: MosaicShow
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
	/**
	 * The title to be displayed in the title area of the DataView
	 */
	title?: string
	/**
	 * Pass `true` when your DataView is fetching data or doing some alteration which needs to lock the UI. While `loading` is true, the majority of the UI elements in the DataView are locked to prevent race conditions. Once the data has been fetched you will want to prop down `false` again.
	 */
	loading?: boolean
	/**
	 * The number of items from the data key which match the current filter.
	 */
	count?: number
	/**
	 * How many items of data to display on each page
	 *
	 * @default 20
	 */
	limit?: number
	/**
	 * The current number of rows being skipped by the user using `0` based indexing. Given a `limit` of `10` So the first page should have a `skip` of `0` and the second page would have a skip of `10`.
	 */
	skip?: number
	/**
	 * The table columns to be used for the list display
	 */
	columns: DataViewColumn[]
	/**
	 * List of column names from the columns array which are displayed in the `DataView`.
	 */
	activeColumns?: string[]
	/**
	 * Controls whether or not the DataView is constrained in size. If set to true, the DataView will scroll within a parent element's dimensions instead of being dynamically sized. When sticky is enabled, the column headers in list view and the bulk actions in grid view will both stick to the top of the DataView as it is scrolled.
	 */
	sticky?: boolean
	/**
	 * Array containing the rows that are going to be checked.
	 */
	checked?: boolean[];
	/**
	 * Defines whether all pages are checked or not.
	 */
	checkedAllPages?: boolean;
	/**
	 * When there are no results to show in the data view, this component will be displayed. If omitted, a generic message `"No results were found."` will be displayed instead.
	 */
	noResults?: ReactElement | string,
	/**
	 * The primary and optional `Filters` which will be available in the `DataView`.
	 */
	filters?: DataViewFilterDef[]
	/**
	 * An object representing the total filtering logic applied to data in the `DataView`.
	 */
	filter?: MosaicObject
	/**
	 * List of filter names from the filters array which are active in the `DataView`.
	 */
	activeFilters?: string[]
	/**
	 * A list of `Buttons` which will be displayed at the top of the `DataView` to the side of the `DataView` title.
	 */
	buttons?: ButtonProps[]
	/**
	 * What type of display should be utilized.
	 */
	display?: string
	/**
	 * A callback function which will be executed when a row has ended being dragged and dropped. This callback will receive as an argument all the rows in their new order.
	 */
	onReorder?: (rows: string[]) => void;
	/**
	 * A view to be loaded in the `DataView`.
	 */
	savedView?: SavedViewDef
	/**
	 * A list of saved views to be provided as options in the saved view switcher.
	 */
	displayOptions?: string[]
	/**
	 * The data that should populate the list view. This prop should be populated based on the `filter`, `sort`, `limit`, and `skip`.
	 */
	data: MosaicObject[]
	/**
	 * The current sort applied to the `DataView`.
	 */
	sort?: DataViewSort
	/**
	 * When passed allows customizing the page-size options that is displayed to the user. You can utilize this option if you want to expose larger or smaller pagesize options.
	 *
	 * @default [25, 50, 100]
	 */
	limitOptions?: number[]
	/**
	 * Map which columns to use in the grid view. Columns available to map are `primary`, `secondary` and `image`. In example `gridColumnsMap : { primary : "title", secondary : "created", image : "image" }`.
	 */
	gridColumnsMap?: MosaicObject
	/**
	 * A value which controls the `Show for all Users` toggle on the `Save View` drawer. If true, the toggle displays allowing the user to choose whether or not to share their view. If false, the toggle is removed and the user can only save `mine` views.
	 */
	savedViewAllowSharedViewSave?: boolean
	/**
	 * Buttons that display on each row, which are displayed to all users. You will want to use this for your frequently one or two most used actions. If you have too many primary actions then the UI can get bulky and likely some should be moved into `additionalActions`.
	 */
	primaryActions?: DataViewAction[]
	/**
	 * Menu items which display underneath the "..." on each row in the list view.
	 */
	additionalActions?: DataViewAdditionalAction[]
	/**
	 * Whether or not to disable embedded DataView controls. This includes top buttons, bulk actions, row actions and row sorting
	 */
	disabled?: boolean
	/**
	 * When users utilize the checkboxes on the rows, it will bring up bulkActions so that they can perform them on all actions.
	 */
	bulkActions?: DataViewBulkAction[]
	/**
	 * A callback function which is invoked when the sort of the `DataView` is changed. Returns a data object listing the chosen sort column and direction.
	 */
	onSortChange?: DataViewOnSortChange
	/**
	 * A callback that will be executed with the new skip selected by the user.
	 */
	onSkipChange?: DataViewOnSkipChange
	/**
	 * A callback that will be executed with the new limit selected by the user. It is recommended that when the user changes the limit, your state alteration should also reset the `skip` to `0`.
	 */
	onLimitChange?: DataViewOnLimitChange
	/**
	 * A callback function which is invoked when a different saved view is loaded. This function will be passed a data object containing the view details.
	 */
	onSavedViewChange?:  DataViewOnSavedViewChange
	/**
	 * A callback function which is invoked when a new view changes. Returns a data object detailing parameters of the new view.
	 */
	onDisplayChange?: DataViewOnDisplayChange
	/**
	 * A callback function which is invoked when the active filters change. Will be passed a data object containing a list of active filters and a filter object.
	 */
	onActiveFiltersChange?: DataViewOnActiveFiltersChange
	/**
	 * A callback function which is invoked when the columns displayed in the `DataView` change. Will be passed a data object containing the new list of active columns.
	 */
	onColumnsChange?: DataViewOnColumnsChange
	/**
	 * A callback function which is invoked when a saved view is saved. This function will be passed a data object containing the view information.
	 */
	onSavedViewSave?: DataViewOnSavedViewSave
	/**
	 * A callback function which is invoked with a saved view is deleted. This function will be passed a data object containing information about the removed view.
	 */
	onSavedViewRemove?: DataViewOnSavedViewRemove
	/**
	 * A callback function which is used to provide an array of views to the SavedView component. Useful when loading a list of saved views from a user profile.
	 */
	onSavedViewGetOptions?: DataViewOnSavedViewGetOptions
	/**
	 * A callback function which is invoked when a row is selected, useful to tell the parent component which rows are checked.
	 */
	onCheckChange?: DataViewOnCheckChange;
	/**
	 * Callback used to update the state of the checkedAllPages prop.
	 */
	onCheckAllPagesChange?: DataViewOnCheckAllPagesChange;
	/**
	 * Callback used to go back to the previous screen / element / drawer. When passed a left arrow will render to the left of the title.
	 */
	onBack?: () => void;
	/**
	 * Label that will be provided as a aria-label attribute to the back button if displayed
	 */
	backLabel?: TitleWrapperProps["backLabel"]
}
