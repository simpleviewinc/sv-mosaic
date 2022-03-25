import { MosaicObject, MosaicMIcon, MosaicCallback } from "../../types";
import { ButtonProps } from "../Button";
import { MenuItemProps } from "../MenuItem";
import * as React from "react";
export interface DataViewColumnTransformArgs<T = unknown> {
	/** The value of the specific column that is being transformed */
	data: T;
	/** The whole row as passed to the original DataView */
	row?: MosaicObject;
}
export interface DataViewColumnTransform<T = unknown> {
	(args: DataViewColumnTransformArgs<T>): React.ReactNode;
}
export interface DataViewColumn {
	/** The name of the column. */
	name: string;
	/**  Displayed label for the column. */
	label?: string;
	/** The column from the passed RowData it will display in this column. Defaults to `column.name`. */
	column?: string;
	/** Whether this column can be sorted. */
	sortable?: boolean;
	style?: {
		/** Bold the cell. */
		bold?: boolean;
		/** Italicize the cell. */
		italic?: boolean;
		/** Strike through the cell. */
		strikeThrough?: boolean;
		/** Prevent the column's contents from wrapping to multiple lines. */
		noWrap?: boolean;
		/** Truncate the content if it gets too long. When using this you will need to also enable `noWrap` and `maxWidth`. When truncated, the content will be available in the `title` attribute automatically. */
		ellipsis?: boolean;
		/** Limit the widget of the column to a specific width, pass CSS like `maxWidth : "50px"`. */
		maxWidth?: string;
		/** Pass css `text-transform`. */
		textTransform?: string;
	};
	/** Functions which will receive the data from the column, manipulate the value, and then return it. An example of a transformation would be converting a JS `Date` object into a user-friendly string or converting boolean `true` to string `Yes`. */
	transforms?: DataViewColumnTransform[];
}
export declare type DataViewFilterTypes = "optional" | "primary";
export interface DataViewFilterOnChange {
	(value: unknown): void;
}
export interface DataViewFilterDef {
	name: string;
	label: string;
	type: DataViewFilterTypes;
	args: MosaicObject;
	component: React.Component;
	column: string;
	onChange: DataViewFilterOnChange;
}
export interface DataViewFilterProps {
	label: string;
	type: DataViewFilterTypes;
	args: MosaicObject;
	data: unknown;
	onChange: unknown;
	onRemove: () => void;
}
export interface DataViewControlLimitProps {
	limit: number;
	options: number[];
	onLimitChange: DataViewOnLimitChange;
}
export declare type DataViewControlViewOption = "list" | "grid";
export interface DataViewControlDisplayProps {
	display: string;
	displayOptions: DataViewDisplay[];
	onDisplayChange(display: string): void;
}
interface DataViewActionShow {
	({ row }: {
		row: MosaicObject;
	}): void;
}
interface DataViewActionOnClick {
	({ data }: {
		data: MosaicObject;
	}): void;
}
interface DataViewBulkActionOnClick {
	({ data }: {
		data: MosaicObject[];
	}): void;
}
interface ActionAdditional {
	/** A unique name for this action. */
	name: string;
	/** A handler function to be invoked when this action is used. */
	onClick: DataViewActionOnClick;
	/** A value or function controlling whether or not to display this action. */
	show?: boolean | DataViewActionShow;
}
export declare type DataViewAction = Omit<ButtonProps, "onClick" | "attrs"> & ActionAdditional;
export declare type DataViewAdditionalAction = Omit<MenuItemProps, "onClick" | "selected" | "attrs"> & ActionAdditional;
export interface DataViewBulkAction extends Omit<DataViewAction, "onClick"> {
	/** A handler function to be invoked when this action is used. */
	onClick?: DataViewBulkActionOnClick;
	onAllClick?: MosaicCallback;
}
export interface DataViewBulkActionsButtonsRowProps {
	bulkActions: DataViewBulkAction[];
	data: MosaicObject[];
	checked: boolean[];
	checkedAllPages: boolean;
}
export interface DataViewDisplay {
	name: string;
	label: string;
	component: React.Component;
	mIcon: MosaicMIcon;
}
export interface DataViewSort {
	name: string;
	dir: "asc" | "desc";
}
export interface DataViewOnSortChange {
	(sort: DataViewSort): void;
}
export interface DataViewOnSkipChange {
	({ skip }: {
		skip: number;
	}): void;
}
export interface DataViewOnLimitChange {
	({ limit }: {
		limit: number;
	}): void;
}
export interface DataViewView {
	id: string;
	label: string;
	type: string;
	state: {
		limit: number;
		skip: number;
		filter: MosaicObject;
		sort: DataViewSort;
		display: string;
		activeFilters: string[];
		activeColumns: string[];
	};
}
export interface DataViewProps {
	title?: string;
	loading?: boolean;
	count?: number;
	limit?: number;
	skip?: number;
	columns?: DataViewColumn[];
	activeColumns?: string[];
	sticky?: boolean;
	/** A list of actions which are always visible for each item in the DataView. */
	primaryActions?: DataViewAction[];
	additionalActions?: DataViewAdditionalAction[];
	bulkActions?: DataViewBulkAction[];
	onSortChange?: DataViewOnSortChange;
	onSkipChange?: DataViewOnSkipChange;
	onLimitChange?: DataViewOnLimitChange;
	onSavedViewChange?(view: DataViewView): void;
	[key: string]: unknown;
}
export { };
