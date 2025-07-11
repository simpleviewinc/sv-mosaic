import * as React from "react";
import uniqueId from "lodash/uniqueId";
import type { ReactElement } from "react";
import { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";

import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import DeleteIcon from "@mui/icons-material/Delete";
import GetAppIcon from "@mui/icons-material/GetApp";
import Visibility from "@mui/icons-material/Visibility";
import Delete from "@mui/icons-material/Delete";
import Star from "@mui/icons-material/Star";

import type { FieldDef } from "#mosaic/components/Field";
import type { ButtonProps } from "#mosaic/components/Button";
import type { MosaicLabelValue } from "#mosaic/types";

import JSONDB from "./JSONDB";
import rawData from "./example/rawData.json";
import type { DataViewProps, DataViewFilterDef, DataViewColumn, DataViewRowData } from "#mosaic/components/DataView";
import DataView from "#mosaic/components/DataView";
import categories from "./example/categories.json";
import MultiSelectHelper from "./example/MultiSelectHelper";
import SingleSelectHelper from "./example/SingleSelectHelper";
import DataViewFilterDate from "#mosaic/components/DataViewFilterDate";
import DataViewFilterSingleSelect from "#mosaic/components/DataViewFilterSingleSelect";
import DataViewFilterText from "#mosaic/components/DataViewFilterText";
import DataViewFilterMultiselect from "#mosaic/components/DataViewFilterMultiselect";
import { useMosaicSettings } from "#mosaic/utils/hooks";
import MosaicContext from "#mosaic/components/MosaicContext";
import Drawer from "#mosaic/components/Drawer";
import Form from "#mosaic/components/Form";
import { useForm } from "#mosaic/components/Form";
import {
	transform_boolean,
	transform_dateFormat,
	transform_get,
	transform_thumbnail,
	transform_mapGet,
	transform_join,
} from "#mosaic/transforms";

import { testIds } from "#mosaic";
import DataViewFilterNumber from "#mosaic/components/DataViewFilterNumber";

export default {
	title : "Components/DataView",
	layout: "fullscreen",
};

// set an artificial delay of 500ms to simulate DB queries
const ARTIFICIAL_DELAY = 500;

const categoriesApi = new JSONDB(categories);

const mappedData = rawData.map(function (data) {
	// convert the date columns to dates, since they are ISOStrings in the file
	return {
		...data,
		created: data.created ? new Date(data.created) : undefined,
		updated: data.updated ? new Date(data.updated) : undefined,
	};
});
const api = new JSONDB(mappedData, {
	relationships: [
		{
			api: categoriesApi,
			key: "categories",
			left_key: "categories_ids",
			right_key: "id",
		},
	],
});

const colors = [
	{ pct: 0.0, color: { r: 227, g: 77, b: 77 } },
	{ pct: 0.5, color: { r: 255, g: 143, b: 0 } },
	{ pct: 1.0, color: { r: 53, g: 181, b: 26 } }];

const getColorForPercentage = function(colors, percent) {
	const i = colors.findIndex(({ pct }) => percent < pct);
	const lower = colors[i - 1];
	const upper = colors[i];
	const range = upper.pct - lower.pct;
	const rangePct = (percent - lower.pct) / range;
	const pctLower = 1 - rangePct;
	const pctUpper = rangePct;
	const color = {
		r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
		g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
		b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper),
	};
	return "rgb(" + [color.r, color.g, color.b].join(",") + ")";
	// or output as hex if preferred
};

const processStringFilter = function ({ name, data, output }) {
	if (data.value === undefined) {
		if (data.comparison === "exists") {
			output[name] = { $exists: true };
		} else if (data.comparison === "not_exists") {
			output[name] = { $exists: false };
		}

		return;
	} else {
		if (data.comparison === "equals") {
			output[name] = data.value;
		} else if (data.comparison === "contains") {
			output[name] = { $contains: data.value };
		} else if (data.comparison === "not_contains") {
			output[name] = { $not_contains: data.value };
		} else if (data.comparison === "not_equals") {
			output[name] = { $ne: data.value };
		}
	}
};

const processDateFilter = function ({ name, data, output }) {
	if (data.rangeStart === undefined && data.rangeEnd === undefined) { return; }

	const outputFilter = {};

	if (data.rangeStart !== undefined) {
		if (data.rangeStart instanceof Date !== true) { throw new Error("rangeStart is not a Date"); }
		outputFilter["$gte"] = data.rangeStart;
	}

	if (data.rangeEnd !== undefined) {
		if (data.rangeEnd instanceof Date !== true) { throw new Error("rangeEnd is not a Date"); }
		outputFilter["$lte"] = data.rangeEnd;
	}

	if (Object.keys(outputFilter).length > 0) {
		output[name] = outputFilter;
	}
};

const processNumberFilter = function({ name, data, output }) {
	const outputFilter = {};

	if (data.min !== undefined) {
		outputFilter["$gte"] = data.min;
	}

	if (data.max !== undefined) {
		outputFilter["$lte"] = data.max;
	}

	if (Object.keys(outputFilter).length > 0) {
		output[name] = outputFilter;
	}
};

const processArrayFilter = function ({ name, data, output }) {
	if (data.comparison === "exists") {
		output[name] = { $exists: true };
	} else if (data.comparison === "not_exists") {
		output[name] = { $exists: false };
	} else if (data.value === undefined || data.value.length === 0) {
		return;
	} else if (data.comparison === "in") {
		output[name] = { $in: data.value };
	} else if (data.comparison === "not_in") {
		output[name] = { $not_in: data.value };
	} else if (data.comparison === "all") {
		output[name] = { $all: data.value };
	}
};

const processSingleSelectFilter = function ({ name, data, output }) {
	if (data.value === undefined) { return; }
	output[name] = { $in: [data.value] };
};

const categoriesHelper = new MultiSelectHelper({
	api: categoriesApi,
	labelColumn: "tag",
	valueColumn: "id",
	sortColumn: "sort_tag",
});

const singleSelectCategoriesHelper = new SingleSelectHelper({
	api: categoriesApi,
	labelColumn: "tag",
	valueColumn: "id",
	sortColumn: "sort_tag",
});

const filters: {
	name: DataViewFilterDef["name"];
	label: DataViewFilterDef["label"];
	component: DataViewFilterDef["component"];
	args?: DataViewFilterDef["args"];
	column?: DataViewFilterDef["column"];
	toFilter?: (val: { name: string; data: any; output: any }) => void;
}[] = [
	{
		name: "keyword",
		label: "Keyword",
		component: DataViewFilterText,
		column: "title",
		toFilter: function ({ name, data, output }) {
			processStringFilter({
				name,
				data: { value: data.value, comparison: "contains" },
				output,
			});
		},
	},
	{
		name: "categories",
		label: "Categories",
		component: DataViewFilterMultiselect,
		args: {
			getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
			getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
		},
		column: "categories_ids",
		toFilter: processArrayFilter,
	},
	{
		name: "single_select_category",
		label: "Single Select Category",
		component: DataViewFilterSingleSelect,
		args: {
			getOptions: singleSelectCategoriesHelper.getOptions.bind(singleSelectCategoriesHelper),
			getSelected: singleSelectCategoriesHelper.getSelected.bind(singleSelectCategoriesHelper),
		},
		column: "categories_ids",
		toFilter: processSingleSelectFilter,
	},
	{
		name: "categories_with_comparisons",
		label: "Categories with Comparisons",
		component: DataViewFilterMultiselect,
		args: {
			getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
			getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
			comparisons: ["in", "not_in", "all", "exists", "not_exists"],
		},
		column: "categories_ids",
		toFilter: processArrayFilter,
	},
	{
		name: "title",
		label: "Title",
		component: DataViewFilterText,
		toFilter: processStringFilter,
	},
	{
		name: "created",
		label: "Created",
		component: DataViewFilterDate,
		toFilter: processDateFilter,
	},
	{
		name: "updated",
		label: "Updated",
		component: DataViewFilterDate,
		toFilter: processDateFilter,
	},
	{
		name: "title_with_comparisons",
		label: "Title with Comparisons",
		component: DataViewFilterText,
		toFilter: processStringFilter,
		column: "title",
		args: {
			comparisons: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"],
		},
	},
	{
		name: "rating",
		label: "Rating",
		component: DataViewFilterNumber,
		toFilter: processNumberFilter,
		args: {
			suffix: "stars",
		},
	},
];

const listColumns: DataViewColumn[] = [
	{
		name: "id",
		label: "ID",
	},
	{
		name: "image",
		label: "Image",
		transforms: [
			transform_get(["resource_raw", "secure_url"]),
			transform_thumbnail({ width: 75, height: 75 }),
		],
	},
	{
		name: "title",
		label: "Title",
		sortable: true,
	},
	{
		name: "description",
		label: "Description",
	},
	{
		name: "content_owner",
		label: "Content Owner",
	},
	{
		name: "categories",
		label: "Categories",
		transforms: [
			transform_mapGet("tag"),
			transform_join(),
		],
	},
	{
		name: "rating",
		label: "Rating",
		column: "rating",
		transforms: [
			({ data }: { data: string }) => (
				<div style={{
					whiteSpace: "nowrap",
					display: "flex",
					alignItems: "center",
					gap: 4,
					backgroundColor: getColorForPercentage(colors, Number(data) / 10),
					color: "white",
					borderRadius: 4,
					padding: "2px 6px 2px 4px",
					fontWeight: "bold",
				}}
				>
					<Star />
					{data}
				</div>
			),
		],
	},
	{
		name: "image_title",
		label: "Image Title",
		column: "image",
		transforms: [
			transform_get(["title"]),
		],
	},
	{
		name: "image_notes",
		label: "Image Notes",
		column: "image",
		transforms: [
			transform_get(["notes"]),
		],
	},
	{
		name: "image_deleted",
		label: "Image Deleted",
		column: "image",
		transforms: [
			transform_get(["deleted"]),
			transform_boolean(),
		],
	},
	{
		name: "created",
		label: "Created",
		sortable: true,
		transforms: [
			transform_dateFormat(),
		],
	},
	{
		name: "updated",
		label: "Updated",
		sortable: true,
		transforms: [
			transform_dateFormat(),
		],
	},
	{
		name: "bold",
		label: "Style - bold",
		column: "content_owner",
		style: {
			bold: true,
		},
	},
	{
		name: "italic",
		label: "Style - italic",
		column: "content_owner",
		style: {
			italic: true,
		},
	},
	{
		name: "strike_through",
		label: "Style - strikeThrough",
		column: "content_owner",
		style: {
			strikeThrough: true,
		},
	},
	{
		name: "noWrap",
		label: "Style - noWrap",
		column: "title",
		style: {
			noWrap: true,
		},
	},
	{
		name: "ellipsis",
		label: "Style - ellipsis",
		column: "title",
		style: {
			noWrap: true,
			ellipsis: true,
			maxWidth: "100px",
		},
	},
	{
		name: "textTransform",
		label: "Style - textTransform",
		column: "content_owner",
		style: {
			textTransform: "uppercase",
		},
	},
	{
		name: "textTransformLargeText",
		label: "Style - Text Transform with large field text to order column",
		column: "content_owner",
		style: {
			textTransform: "uppercase",
		},
	},
];

const gridColumns = [
	...listColumns,
	{
		name: "image_grid",
		column: "image",
		label: "Image",
		transforms: [
			transform_get(["resource_raw", "secure_url"]),
			transform_thumbnail({ width: 275, height: 200 }),
		],
	},
];

const gridColumnsMap = {
	image: "image_grid",
	primary: "title",
	secondary: "created",
};

const StyledDiv = styled.div`
	height: 100vh;
`;

const newSavedFormFields: FieldDef[] = [
	{
		name: "name",
		label: "Name",
		type: "text",
		required: true,
	},
	{
		name: "description",
		label: "Description",
		type: "text",
		required: true,
	},
];

const initialSavedViews = [
	{
		id: "all",
		label: "All",
		description: "All records with the exception of those that are archived. Common filters available by default.",
		attributes: {
			limit: 25,
			skip: 0,
			filter: {},
			sort: {
				name: "title",
				dir: "asc",
			},
			display: "list",
			activeFilters: ["updated", "title", "keyword"],
			activeColumns: ["image", "title", "categories", "created"],
		},
	},
	{
		id: "beaches",
		label: "Beaches",
		description: "Records in the beaches category.",
		attributes: {
			limit: 25,
			skip: 0,
			filter: {
				categories: {
					value: [
						"5580297b2abf5f8c3bbb3eaf",
					],
					comparison: "in",
				},
			},
			sort: {
				name: "title",
				dir: "asc",
			},
			display: "list",
			activeFilters: [
				"categories",
			],
			activeColumns: [
				"image",
				"title",
				"categories",
				"created",
			],
		},
	},
	{
		id: "art-audit",
		label: "Art audit",
		description: "Art related records displayed in a grid ordered by most recent first.",
		attributes: {
			limit: 25,
			skip: 0,
			filter: {
				keyword: {
					value: "Art",
					comparison: "equals",
				},
			},
			sort: {
				name: "created",
				dir: "desc",
			},
			display: "grid",
			activeFilters: [
				"keyword",
			],
			activeColumns: [
				"image",
				"title",
				"categories",
				"created",
			],
		},
	},
];

const NewSavedViewForm = ({
	onFinish,
	onCancel,
}: {
	onFinish: (params: { name: string; description: string }) => void;
	onCancel: () => void;
}): ReactElement => {
	const controller = useForm();
	const { handleSubmit } = controller;

	const submitHandler = handleSubmit(({ data: { name, description } }) => {
		onFinish({ name, description });
	});

	const buttons = useMemo<ButtonProps[]>(() => [
		{
			onClick: onCancel,
			color: "gray",
			variant: "outlined",
			label: "Cancel",
		},
		{
			type: "submit",
			color: "yellow",
			variant: "contained",
			label: "Save",
		},
	], [onCancel]);

	return (
		<div style={{ width: 700, maxWidth: "100%" }}>
			<Form
				{...controller}
				fields={newSavedFormFields}
				onSubmit={submitHandler}
				title="Save new view"
				buttons={buttons}
				onBack={onCancel}
			/>
		</div>
	);
};

const viewsListColumns: DataViewProps["columns"] = [
	{
		name: "id",
		label: "ID",
	},
	{
		name: "label",
		label: "Label",
	},
	{
		name: "description",
		label: "Description",
	},
	{
		name: "attributes",
		label: "Attributes",
		transforms: [({ data }) => (
			<pre style={{ border: "1px solid #ddd", padding: 5, maxHeight: "5rem", overflow: "auto", borderRadius: 3 }}>
				{JSON.stringify(data, undefined, 4)}
			</pre>
		)],
	},
];

const ViewsListGrid = ({
	views,
	onView,
	onDelete,
	onReset,
	onCancel,
}: {
	views: DataViewProps["data"];
	onView: (params: { data: DataViewRowData }) => void;
	onDelete: (params: { data: DataViewRowData }) => void;
	onReset?: () => void;
	onCancel: () => void;
}): ReactElement => {
	const buttons = useMemo<ButtonProps[]>(() => [
		{
			onClick: onReset,
			color: "gray",
			variant: "outlined",
			label: "Clear current view",
			show: Boolean(onReset),
		},
	], [onReset]);

	const viewsListActions: DataViewProps["primaryActions"] = [
		{
			name: "view",
			intent: "secondary",
			variant: "icon",
			onClick: onView,
			mIcon: Visibility,
			tooltip: "Apply View",
			muiAttrs: { "data-testid": testIds.DATA_VIEW_VIEW_APPLY },
		},
		{
			name: "delete",
			intent: "secondary",
			variant: "icon",
			onClick: onDelete,
			mIcon: Delete,
			tooltip: "Delete View",
			muiAttrs: { "data-testid": testIds.DATA_VIEW_VIEW_DELETE },
		},
	];

	return (
		<div style={{ width: 800, maxWidth: "100%" }}>
			<DataView
				columns={viewsListColumns}
				data={views}
				title="Available Views"
				primaryActions={viewsListActions}
				buttons={buttons}
				onBack={onCancel}
			/>
		</div>
	);
};

export const Playground = ({
	noData,
	showBack,
	bulkActions,
	bulkAllActions,
	primaryActions,
	secondaryActions,
	titlesWithDrafts,
	sticky,
	locale,
	comparisonDefault,
	displayList,
	displayGrid,
	draggableRows,
	showCheckboxes,
	preloadedActiveFilters,
	disabled,
	hasCurrentView,
	hasViewSaveHandler,
	hasViewSaveAsHandler,
	hasViewListHandler,
}: typeof Playground.args): ReactElement => {
	const [savedViews, setSavedViews] = useState<{ id: string; label: string; description: string; attributes: Record<string, any> }[]>(initialSavedViews);

	const [currentViewState, setCurrentView] = useState<MosaicLabelValue | undefined>();
	const currentView = hasCurrentView ? currentViewState : undefined;

	const currentViewAttributes = useMemo(() => {
		if (!currentView) {
			return;
		}

		const view = savedViews.find(({ id }) => id === currentView.value);

		if (!view) {
			return;
		}

		return view.attributes;
	}, [currentView, savedViews]);

	const initialAttributes = useMemo<Record<string, any> & { sort: DataViewProps["sort"] }>(() => ({
		limit: 25,
		skip: 0,
		filter: {},
		sort: {
			name: "title",
			dir: "asc",
		},
		display: displayList ? "list" : displayGrid ? "grid" : undefined,
		activeFilters: preloadedActiveFilters ? ["updated", "title", "keyword"] : [],
		activeColumns: ["image", "title", "categories", "created", "rating"],
	}), [displayGrid, displayList, preloadedActiveFilters]);

	const [state, setState] = useState<Record<string, any> & { sort: DataViewProps["sort"] }>({
		data: [],
		count: 0,
		loading: false,
		...initialAttributes,
		...(currentViewAttributes || {}),
	});

	const [savedViewDrawer, setSavedViewDrawer] = useState<"save" | "list" | undefined>();

	useEffect(() => {
		if (preloadedActiveFilters && state.activeFilters.length === 0)
			setState(prev => ({ ...prev, activeFilters: ["updated", "title", "keyword"] }));
	}, [preloadedActiveFilters, state.activeFilters]);

	const [checkedState, setCheckedState] = useState({
		checked: [],
		checkedAllPages: false,
	});

	const mosaicSettings = useMosaicSettings();

	// If the user changes the locale knob we need to propagate to our i18n object
	useEffect(() => {
		if (mosaicSettings.i18n.language !== locale) {
			mosaicSettings.i18n.changeLanguage(locale);
		}
	}, [locale]);

	const filterChange = function (name, value) {
		setState((prev) => ({
			...prev,
			filter: {
				...prev.filter,
				[name]: value,
			},
			skip: 0,
		}));
	};

	const convertFilter = function (filter) {
		const queryFilter = {};

		for (const filterObj of filters) {
			if (filter[filterObj.name] !== undefined) {
				filterObj.toFilter({
					name: filterObj.column || filterObj.name,
					data: filter[filterObj.name],
					output: queryFilter,
				});
			}
		}

		return queryFilter;
	};

	const addDraftsPrimaryAction = useCallback((data: Record<string, any>[]) => {
		const titlesWithDraftsParsed = titlesWithDrafts
			.split(",")
			.map(item => item.trim().toLocaleLowerCase());

		return data.map(row => ({
			...row,
			hasDraft: titlesWithDraftsParsed.includes(row.title.toLocaleLowerCase()),
		}));
	}, [titlesWithDrafts]);

	useEffect(() => {
		let isMounted = true;
		const fetchData = async function () {
			const converted = convertFilter(state.filter);

			const newData = addDraftsPrimaryAction(await api.find({
				limit: state.limit,
				sort: state.sort,
				skip: state.skip,
				filter: converted,
			}));

			const count = await api.count({
				filter: converted,
			});

			if (isMounted) {
				setState({
					...state,
					data: newData,
					count: count,
					loading: false,
				});
			}

		};

		setTimeout(function () {
			fetchData();
		}, ARTIFICIAL_DELAY);

		setState({
			...state,
			loading: true,
		});

		return () => {
			isMounted = false;
		};
	}, [state.limit, state.sort, state.skip, state.filter, addDraftsPrimaryAction]);

	// transpose our display knobs into the displayOptions
	const knobOptions = [
		displayList ? "list" : undefined,
		displayGrid ? "grid" : undefined,
	].filter(val => val);
	const displayOptions = knobOptions.length > 0 ? knobOptions : undefined;
	const display =
		displayOptions === undefined ? undefined :
		displayOptions.length === 1 ? displayOptions[0] :
		state.display
		;

	useEffect(() => {
		setCheckedState({
			...checkedState,
			checked : state.data.map(() => false),
		});
	}, [state.data]);

	const gridConfig: DataViewProps = {
		title: "Your Uploads",
		onBack: showBack ? () => alert("Cancelling, going back to previous site") : undefined,
		columns: (display === "list" || display === undefined) ? listColumns : gridColumns,
		gridColumnsMap,
		primaryActions: [
			{
				name: "edit",
				intent: "secondary",
				variant: "icon",
				mIcon: CreateIcon,
				onClick: function ({ data }) {
					alert(`EDIT ${data.id}`);
				},
				show: () => primaryActions,
				tooltip: "Edit",
			},
			{
				name: "draft",
				color: "blue",
				variant: "icon",
				mIcon: SaveAsIcon,
				onClick: function ({ data }) {
					alert(`VIEW DRAFT ${data.id}`);
				},
				show: ({ row }) => primaryActions && Boolean(row.hasDraft),
				tooltip: "Create Draft",
			},
		],
		additionalActions: [
			{
				name: "view_children",
				// @ts-expect-error Typescript doesn't like this even though it's valid
				label: "View Children",
				onClick: function ({ data }) {
					alert(`View Children ${data.id}`);
				},
				show: secondaryActions,
			},
			{
				name: "history",
				// @ts-expect-error Typescript doesn't like this even though it's valid
				label: "History",
				onClick: function ({ data }) {
					alert(`History ${data.id}`);
				},
				show: secondaryActions,
			},
		],
		bulkActions: bulkActions ? [
			{
				name: "download",
				intent: "secondary",
				variant: "icon",
				mIcon: GetAppIcon,
				onClick: function ({ data }) {
					alert(`DOWNLOAD ${data.map(val => val.id)}`);
				},
				show: ({ data }) => data.length <= 5,
				muiAttrs: { title: "Download checked" },
			},
			{
				name: "delete",
				intent: "secondary",
				variant: "icon",
				mIcon: DeleteIcon,
				onClick: function ({ data }) {
					alert(`DELETE ${data.map(val => val.id)}`);
				},
				onAllClick: bulkAllActions ? function () {
					alert("DELETE ALL");
				} : undefined,
				show: ({ checkedAllPages }) => !checkedAllPages,
				muiAttrs: { title: "Delete checked" },
			},
		] : [],
		buttons: [
			{
				name: "create",
				label: "Create New",
				mIcon: AddIcon,
				color: "yellow",
				variant: "contained",
				onClick: function () {
					alert("CREATE NEW");
				},
			},
		],
		filters: filters.map((filter): DataViewFilterDef => {
			return {
				name: filter.name,
				label: filter.label,
				component: filter.component,
				args: { ...filter.args, comparisonDefault },
				onChange: function (value) {
					filterChange(filter.name, value);
				},
			};
		}),
		displayOptions,
		sticky,
		onColumnsChange: function (data) {
			setState({
				...state,
				activeColumns: data,
			});
		},
		onSkipChange: useCallback(function ({ skip }) {
			setState((state) => ({
				...state,
				skip,
			}));
		}, []),
		onLimitChange: useCallback(function ({ limit }) {
			setState((state) => ({
				...state,
				limit,
				skip: 0,
			}));
		}, []),
		onSortChange: useCallback(function (data) {
			setState((state) => ({
				...state,
				sort: data,
				skip: 0,
			}));
		}, []),
		onDisplayChange: function (data) {
			setState({
				...state,
				display: data,
			});
		},
		onActiveFiltersChange: function ({ activeFilters, filter }) {
			setState({
				...state,
				activeFilters,
				filter,
			});
		},
		checked: showCheckboxes ? checkedState.checked : undefined,
		checkedAllPages: checkedState.checkedAllPages,
		onCheckChange: showCheckboxes ? (checked) => {
			setCheckedState((prev) => ({
				...prev,
				checked,
			}));
		} : undefined,
		onCheckAllPagesChange: (checkedAllPages) => {
			setCheckedState((prev) => ({
				...prev,
				checkedAllPages,
			}));
		},
		data: noData ? [] : state.data,
		limit: state.limit,
		sort: state.sort,
		filter: state.filter,
		activeFilters: state.activeFilters,
		onReorder: draggableRows ? async (newRows) => {
			setState({ ...state, loading: true });

			const newData = addDraftsPrimaryAction(await api.find({
				reorderedList: newRows,
			}));

			setState({
				...state,
				data: newData,
				loading: false,
			});
		} : undefined,
		disabled: disabled || undefined,
	};

	return (
		<StyledDiv>
			<MosaicContext.Provider value={mosaicSettings}>
				<DataView
					{...gridConfig}
					skip={state.skip}
					count={state.count}
					display={display}
					loading={state.loading}
					activeColumns={state.activeColumns}
					attrs={{ "data-testid": "My DataView" }}
					currentView={currentView}
					onViewSave={hasViewSaveHandler ? (currentView && (async () => {
						await new Promise((resolve) => setTimeout(() => resolve(null), 1000));

						setSavedViews(views => views.map(view => view.id === currentView.value ? ({
							...view,
							attributes: {
								limit: state.limit,
								skip: state.skip,
								filter: state.filter,
								sort: state.sort,
								display,
								activeFilters: state.activeFilters,
								activeColumns: state.activeColumns,
							},
						}) : view));

						alert("Current view saved");
					})) : undefined}
					onViewSaveAs={hasViewSaveAsHandler ? (() => setSavedViewDrawer("save")) : undefined}
					onViewList={hasViewListHandler ? (() => setSavedViewDrawer("list")) : undefined}
				/>
			</MosaicContext.Provider>
			<Drawer open={Boolean(savedViewDrawer)} onClose={() => setSavedViewDrawer(undefined)}>
				{savedViewDrawer === "save" ? (
					<NewSavedViewForm
						onFinish={({ name: label, description }) => {
							const id = uniqueId();

							setSavedViews(views => [...views, {
								id,
								label,
								description,
								attributes: {
									limit: state.limit,
									skip: state.skip,
									filter: state.filter,
									sort: state.sort,
									display,
									activeFilters: state.activeFilters,
									activeColumns: state.activeColumns,
								},
							}]);
							setCurrentView({ value: id, label });
							setSavedViewDrawer(undefined);
						}}
						onCancel={() => setSavedViewDrawer(undefined)}
					/>
				) : savedViewDrawer === "list" && (
					<ViewsListGrid
						views={savedViews}
						onView={({ data }) => {
							setState(state => ({ ...state, ...(data.attributes as any) }));
							setCurrentView({ value: data.id, label: data.label as string });
							setSavedViewDrawer(undefined);
						}}
						onDelete={({ data }) => {
							setSavedViews(views => views.filter(({ id }) => id !== data.id));

							if (currentView && currentView.value === data.id) {
								setCurrentView(undefined);
							}
						}}
						onReset={currentView && (() => {
							setState(state => ({
								...state,
								...initialAttributes,
							}));
							setCurrentView(undefined);
							setSavedViewDrawer(undefined);
						})}
						onCancel={() => setSavedViewDrawer(undefined)}
					/>
				)}
			</Drawer>
		</StyledDiv>
	);
};

Playground.args = {
	noData: false,
	showBack: false,
	bulkActions: true,
	bulkAllActions: true,
	primaryActions: true,
	secondaryActions: true,
	titlesWithDrafts: "Accessibility, Antiques, AQS - Quilt Show",
	sticky: true,
	locale: "en",
	comparisonDefault: "contains",
	displayList: true,
	displayGrid: true,
	draggableRows: true,
	showCheckboxes: true,
	preloadedActiveFilters: false,
	disabled: false,
	hasCurrentView: true,
	hasViewSaveHandler: true,
	hasViewSaveAsHandler: true,
	hasViewListHandler: true,
};

Playground.argTypes = {
	noData: {
		name: "Empty dataset",
	},
	showBack: {
		name: "onBack",
	},
	bulkActions: {
		name: "Bulk Actions",
	},
	bulkAllActions: {
		name: "Bulk All Actions",
	},
	primaryActions: {
		name: "Primary Actions",
	},
	secondaryActions: {
		name: "Secondary Actions",
	},
	titlesWithDrafts: {
		name: "Records with drafts",
	},
	sticky: {
		name: "Sticky",
	},
	locale: {
		name: "Locale",
		options: ["en", "es", "cimode", "de"],
		control: { type: "select" },
	},
	comparisonDefault: {
		name: "ComparisonDefault for text filter",
		options: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists", "invalid_comparison"],
		control: { type: "select" },
	},
	displayList: {
		name: "List Display Enabled",
	},
	displayGrid: {
		name: "Grid Display Enabled",
	},
	draggableRows: {
		name: "Draggable Rows Enabled",
	},
	showCheckboxes: {
		name: "Row Checkboxes Enabled",
	},
	preloadedActiveFilters: {
		name: "Active Filters Preloaded",
	},
	disabled: {
		name: "Disabled",
	},
	hasCurrentView: {
		name: "Has current view",
	},
	hasViewSaveHandler: {
		name: "Has view save handler",
	},
	hasViewSaveAsHandler: {
		name: "Has view save as handler",
	},
	hasViewListHandler: {
		name: "Has view list handler",
	},
};
