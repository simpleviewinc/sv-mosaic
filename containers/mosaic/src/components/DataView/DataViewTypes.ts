import type { CSSProperties, ReactElement } from "react";
import type { Property } from "csstype";

import type { MosaicObject, MosaicCallback, MosaicLabelValue, MosaicToggle } from "@root/types";
import type { ButtonProps } from "../Button";
import type { MenuItemProps } from "../MenuItem";
import type { DataViewActionsButtonRowProps } from "./DataViewActionsButtonRow";
import type { TitleWrapperProps } from "@root/components/Title";

export interface DataViewColumnTransformArgs<T = unknown> {
	/** The value of the specific column that is being transformed */
	data: T;
	/** The whole row as passed to the original DataView */
	row?: DataViewProps["data"][number];
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
	style?: CSSProperties & {
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
		textTransform?: Property.TextTransform;
	};
	/** Functions which will receive the data from the column, manipulate the value, and then return it. An example of a transformation would be converting a JS `Date` object into a user-friendly string or converting boolean `true` to string `Yes`. */
	transforms?: DataViewColumnTransform[];
}

//THIS TYPE DOESN'T SEEM TO BE USED ANYWHERE.
export type DataViewFilterTypes = "optional" | "primary";

export interface DataViewFilterOnChange {
	(value: unknown): void;
}

export interface DataViewFilterDef {
	name: string;
	label: string;
	args?: MosaicObject;
	component: React.ElementType;
	column?: string;
	onChange: DataViewFilterOnChange;
}

export interface DataViewFilterProps {
	label: string;
	args: MosaicObject;
	data: unknown;
	onChange: unknown;
}

interface DataViewActionOnClick {
	({ data }: { data: DataViewProps["data"][number] }): void;
}

export interface ActionAdditional {
	/** A unique name for this action. */
	name: string;
	/** A handler function to be invoked when this action is used. */
	onClick: DataViewActionOnClick;
	/** A value or function controlling whether or not to display this action. */
	// show?: boolean | DataViewActionShow | DataViewActionShow[] | boolean[] | [DataViewActionShow | boolean] | (DataViewActionShow | boolean)[];
	show?: MosaicToggle<{ row: DataViewActionsButtonRowProps["originalRowData"] }>;
}

interface DataViewBulkActionOnClick {
	({ data }: { data: DataViewProps["data"] }): void;
}

export type DataViewAction = Omit<ButtonProps, "onClick" | "attrs" | "show"> & ActionAdditional;

export type DataViewAdditionalAction = Omit<MenuItemProps, "onClick" | "selected" | "attrs" | "show"> & ActionAdditional;

export interface DataViewBulkAction extends Omit<DataViewAction, "onClick" | "show"> {
	/** A handler function to be invoked when this action is used. */
	onClick?: DataViewBulkActionOnClick;
	onAllClick?: MosaicCallback;
	show?: MosaicToggle<{ checkedAllPages: DataViewProps["checkedAllPages"]; data: DataViewProps["data"] }>;
}

export interface DataViewSort {
	name: string;
	dir: "asc" | "desc";
}

export interface DataViewOnSortChange {
	(sort: DataViewSort): void;
}

export interface DataViewOnSkipChange {
	({ skip }: { skip : number }): void;
}

export interface DataViewOnLimitChange {
	({ limit }: { limit : number }): void;
}

type DataViewOnDisplayChange = {
	(display: string): void;
};
type DataViewOnActiveFiltersChange = {
	(val: { activeFilters: string[]; filter: MosaicObject }): void;
};

type DataViewOnColumnsChange = {
	(activeColumns: string[]): void;
};

type DataViewOnCheckChange = {
	(checked: boolean[]): void;
};

type DataViewOnCheckAllPagesChange = {
	(val: boolean): void;
};

export interface DataViewFilterGetOptionsReturn {
	docs: MosaicLabelValue[];
	hasMore?: boolean;
}

export interface DataViewRowData extends Record<string, unknown> {
	id: string;
}

export type CurrentView = MosaicLabelValue;

export type OnViewSave = () => Promise<void> | void;

export type OnViewSaveAs = () => Promise<void> | void;

export type OnViewList = () => Promise<void> | void;

export interface DataViewProps<D extends DataViewRowData = DataViewRowData> {
	attrs?: React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>;
	title?: string;
	loading?: boolean;
	count?: number;
	limit?: number;
	skip?: number;
	columns: DataViewColumn[];
	activeColumns?: string[];
	sticky?: boolean;
	checked?: boolean[];
	checkedAllPages?: boolean;
	noResults?: ReactElement | string;
	/** A list of actions which are always visible for each item in the DataView. */
	filters?: DataViewFilterDef[];
	filter?: MosaicObject;
	activeFilters?: string[];
	buttons?: ButtonProps[];
	display?: string;
	onReorder?: (rows: string[]) => void;
	displayOptions?: string[];
	data: D[];
	sort?: DataViewSort;
	limitOptions?: number[];
	gridColumnsMap?: MosaicObject;
	primaryActions?: DataViewAction[];
	additionalActions?: DataViewAdditionalAction[];
	disabled?: boolean;
	bulkActions?: DataViewBulkAction[];
	onSortChange?: DataViewOnSortChange;
	onSkipChange?: DataViewOnSkipChange;
	onLimitChange?: DataViewOnLimitChange;
	onDisplayChange?: DataViewOnDisplayChange;
	onActiveFiltersChange?: DataViewOnActiveFiltersChange;
	onColumnsChange?: DataViewOnColumnsChange;
	onCheckChange?: DataViewOnCheckChange;
	onCheckAllPagesChange?: DataViewOnCheckAllPagesChange;
	onBack?: () => void;
	backLabel?: TitleWrapperProps["backLabel"];
	/**
	 * Saved view related props
	 */
	currentView?: CurrentView;
	onViewSave?: OnViewSave;
	onViewSaveAs?: OnViewSaveAs;
	onViewList?: OnViewList;
}

export type DataViewRowActions = Record<string, {
	primary: DataViewProps["primaryActions"];
	additional: DataViewProps["additionalActions"];
}>;
