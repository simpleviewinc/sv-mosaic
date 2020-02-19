import React, { useState, useEffect, useMemo, useReducer, useCallback } from "react";
import { pick } from "lodash";
import moment from "moment";
import styled from "styled-components";

import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from "@material-ui/icons/Delete";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import theme from "../utils/theme.js";
import JSONDB from "../utils/JSONDB.js";
import LocalStorageDB from "../utils/LocalStorageDB.js";
import rawData from "./rawData.json";
import categories from "./categories.json";
import MultiselectHelper from "./MultiselectHelper.js";
import {
	transform_boolean,
	transform_dateFormat,
	transform_get,
	transform_thumbnail,
	transform_mapGet,
	transform_join,
	FilterDate,
	DataView,
	DataViewFilterText,
	DataViewFilterMultiselect
} from "../";
import { useStateRef } from "../utils/reactTools.js";

// set an artificial delay of 500ms to simulate DB queries
const ARTIFICIAL_DELAY = 500;

const categoriesApi = new JSONDB(categories);
const viewsApi = new LocalStorageDB("views");

rawData.forEach(function(data) {
	// convert the date columns to dates, since they are ISOStrings in the file
	data.created = data.created ? new Date(data.created) : undefined;
	data.updated = data.updated ? new Date(data.updated) : undefined;
})
const api =  new JSONDB(rawData, {
	relationships : [
		{
			api : categoriesApi,
			key : "categories",
			left_key : "categories_ids",
			right_key : "id"
		}
	]
});

const processStringFilter = function({ name, data, filter, output }) {
	if (data.value === undefined) { return; }
	
	if (data.comparison === "equals") {
		output[name] = data.value;
	} else if (data.comparison === "contains") {
		output[name] = new RegExp(`.*${data.value}.*`, "i");
	} else if (data.comparison === "not_contains") {
		output[name] = new RegExp(`^((?!${data.value}).)*$`, "i")
	} else if (data.comparison === "not_equals") {
		output[name] = { $ne : data.value };
	}
}

const processDateFilter = function({name, data, filter, output}){
	if (data.rangeStart === undefined && data.rangeEnd === undefined) { return; }
	
	const outputFilter = {};

	if (data.rangeStart !== undefined) {
		if (data.rangeStart instanceof Date !== true){ throw new Error('rangeStart is not a Date'); }
		outputFilter["$gte"] = data.rangeStart;
	}

	if (data.rangeEnd !== undefined) {
		if (data.rangeEnd instanceof Date !== true) { throw new Error('rangeEnd is not a Date'); }
		outputFilter["$lte"] = data.rangeEnd;
	}

	if (Object.keys(outputFilter).length > 0) {
		output[name] = outputFilter;
	}
}

const processArrayFilter = function({ name, data, filter, output }) {
	if (data.comparison === "exists") {
		output[name] = { $exists : true }
	} else if (data.comparison === "not_exists") {
		output[name] = { $exists : false }
	} else if (data.value === undefined || data.value.length === 0) {
		return;
	} else if (data.comparison === "in") {
		output[name] = { $in : data.value };
	}
}

const categoriesHelper = new MultiselectHelper({
	api : categoriesApi,
	labelColumn : "tag",
	valueColumn : "id",
	sortColumn : "sort_tag"
});

const filters = [
	{
		name : "keyword",
		label : "Keyword",
		type : "primary",
		component : DataViewFilterText,
		column : "title",
		toFilter : function({ name, data, output }) {
			processStringFilter({
				name,
				data : { value : data.value, comparison : "contains" },
				output
			});
		}
	},
	{
		name : "categories",
		label : "Categories",
		type : "primary",
		component : DataViewFilterMultiselect,
		args : {
			getOptions : categoriesHelper.getOptions,
			getSelected : categoriesHelper.getSelected
		},
		column : "categories_ids",
		toFilter : processArrayFilter
	},
	{
		name : "categories_with_comparisons",
		label : "Categories with Comparisons",
		type : "optional",
		component : DataViewFilterMultiselect,
		args : {
			getOptions : categoriesHelper.getOptions,
			getSelected : categoriesHelper.getSelected,
			comparisons : ["in", "not_in", "all", "exists", "not_exists"]
		},
		column : "categories_ids",
		toFilter : processArrayFilter
	},
	{
		name : "title",
		label : "Title",
		type : "optional",
		component : DataViewFilterText,
		toFilter : processStringFilter
	},
	{
		name : "created",
		label : "Created",
		type : "optional",
		component : FilterDate,
		toFilter : processDateFilter
	},
	{
		name : "updated",
		label : "Updated",
		type : "optional",
		component : FilterDate,
		toFilter : processDateFilter
	},
	{
		name : "title_with_comparisons",
		label : "Title with Comparisons",
		type : "optional",
		component : DataViewFilterText,
		toFilter : processStringFilter,
		column : "title",
		args : {
			comparisons : ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"]
		}
	}
]

const primaryFilterNames = filters.filter(val => val.type === "primary").map(val => val.name);

const defaultView = {
	id : "default",
	label : "Default View",
	type : "default",
	state : {
		limit : 25,
		skip : 0,
		filter : {},
		sort : {
			name : "title",
			dir : "asc"
		},
		view : "list",
		activeFilters : [],
		activeColumns : ["image", "title", "categories", "created"]
	}
}

const listColumns = [
	{
		name : "id",
		label : "ID"
	},
	{
		name : "image",
		label : "Image",
		transforms : [
			transform_get(["resource_raw", "secure_url"]),
			transform_thumbnail({ width : 75, height : 75 })
		]
	},
	{
		name : "title",
		label : "Title",
		style : "bold",
		sortable : true
	},
	{
		name : "description",
		label : "Description",
		style : "bold"
	},
	{
		name : "content_owner",
		label : "Content Owner",
		style : "bold",
		sortable : true
	},
	{
		name : "categories",
		label : "Categories",
		transforms : [
			transform_mapGet("tag"),
			transform_join()
		]
	},
	{
		name : "image_title",
		label : "Image Title",
		column : "image",
		transforms : [
			transform_get(["title"])
		]
	},
	{
		name : "image_notes",
		label : "Image Notes",
		column : "image",
		transforms : [
			transform_get(["notes"])
		]
	},
	{
		name : "image_deleted",
		label : "Image Deleted",
		column : "image",
		transforms : [
			transform_get(["deleted"]),
			transform_boolean()
		]
	},
	{
		name : "created",
		label : "Created",
		sortable : true,
		transforms : [
			transform_dateFormat()
		]
	},
	{
		name : "updated",
		label : "Updated",
		sortable : true,
		transforms : [
			transform_dateFormat()
		]
	}
];

const gridColumns = [
	{
		name : "id",
		label : "ID"
	},
	{
		name : "image",
		label : "Image",
		transforms : [
			transform_get(["resource_raw", "secure_url"]),
			transform_thumbnail({ width : 275, height : 200 })
		]
	},
	{
		name : "primary",
		label : "Primary",
		column : "title",
	},
	{
		name : "secondary",
		label : "Secondary",
		column : "created",
		transforms : [
			transform_dateFormat()
		]
	}
]

const StyledDiv = styled.div`
	padding: 0px 16px;
	height: 100%;
`;

function DataViewKitchenSink() {
	const [state, setState] = useState({
		removeItems : [],
		data : [],
		count : 0,
		limit : 25,
		skip : 0,
		loading : false,
		savedView : defaultView,
		...defaultView.state
	});
	
	const stateRef = useStateRef(state);
	
	const filterChange = function(name, value) {
		setState({
			...state,
			filter : {
				...state.filter,
				[name] : value
			},
			skip : 0
		});
	}
	
	const convertFilter = function(filter) {
		const queryFilter = {};
		
		for(let [i, filterObj] of Object.entries(filters)) {
			if (filter[filterObj.name] !== undefined) {
				filterObj.toFilter({
					name : filterObj.column || filterObj.name,
					data : filter[filterObj.name],
					filter : filter,
					output : queryFilter
				});
			}
		}
		
		return queryFilter;
	}
	
	useEffect(() => {
		const fetchData = async function() {
			const converted = convertFilter(state.filter);
			
			const newData = await api.find({
				limit : state.limit,
				sort : state.sort,
				skip : state.skip,
				filter : converted
			});
			
			const count = await api.count({
				filter : converted
			});
			
			setState({
				...state,
				data : newData,
				count : count,
				loading : false
			});
		}
		
		setTimeout(function() {
			fetchData();
		}, ARTIFICIAL_DELAY);
		
		setState({
			...state,
			loading : true
		});
	}, [state.limit, state.sort, state.skip, state.filter]);
	
	const gridConfig = {
		title : "Your Uploads",
		columns : state.view === "list" ? listColumns : gridColumns,
		primaryActions : [
			{
				name : "edit",
				color : "blue",
				variant : "icon",
				mIcon : CreateIcon,
				onClick : function({ data }) {
					alert(`EDIT ${data.id}`);
				}
			}
		],
		additionalActions : [
			{
				name : "view_children",
				label : "View Children",
				onClick : function({ data }) {
					alert(`View Children ${data.id}`);
				}
			},
			{
				name : "history",
				label : "History",
				onClick : function({ data }) {
					alert(`History ${data.id}`);
				}
			}
		],
		bulkActions : [
			{
				name : "download",
				color : "blue",
				variant : "icon",
				mIcon : CloudDownloadIcon,
				onClick : function({ data }) {
					alert(`DOWNLOAD ${data.map(val => val.id)}`);
				}
			},
			{
				name : "delete",
				color : "blue",
				variant : "icon",
				mIcon : DeleteIcon,
				onClick : function({ data }) {
					alert(`DELETE ${data.map(val => val.id)}`);
				}
			}
		],
		buttons : [
			{
				name : "create",
				label : "Create New",
				mIcon : AddIcon,
				color : "blue",
				variant : "outlined",
				onClick : function() {
					alert("CREATE NEW");
				}
			}
		],
		filters : filters.map(filter => {
			return {
				name : filter.name,
				label : filter.label,
				component : filter.component,
				type : filter.type,
				args : filter.args,
				onChange : function(value) {
					filterChange(filter.name, value);
				}
			}
		}),
		views : ["list", "grid"],
		sticky : true,
		onSkipChange : function({ skip }) {
			setState({
				...state,
				skip
			});
		},
		onLimitChange : useCallback(function({ limit }) {
			setState({
				...stateRef.current,
				limit,
				skip : 0
			});
		}, [stateRef]),
		onSortChange : function(data) {
			setState({
				...state,
				sort : data,
				skip : 0
			});
		},
		onViewChange : function(data) {
			setState({
				...state,
				view : data
			});
		},
		onSavedViewSave : function(data) {
			viewsApi.upsert(data);
			gridConfig.onSavedViewChange(data);
		},
		onSavedViewGetOptions : function() {
			return [defaultView, ...viewsApi.find()];
		},
		onSavedViewChange : function(data) {
			setState({
				...state,
				...data.state,
				savedView : data,
				skip : 0
			});
		},
		onSavedViewRemove : function(data) {
			viewsApi.remove(data);
		},
		onActiveFiltersChange : function({ activeFilters, filter }) {
			setState({
				...state,
				activeFilters,
				filter
			});
		},
		onColumnsChange : function(data) {
			setState({
				...state,
				activeColumns : data
			});
		}
	};
	
	return (
		<StyledDiv>
			<DataView
				{ ...gridConfig }
				data={state.data}
				limit={state.limit}
				skip={state.skip}
				count={state.count}
				view={state.view}
				sort={state.sort}
				loading={state.loading}
				filter={state.filter}
				savedView={state.savedView}
				activeFilters={state.activeFilters}
				activeColumns={state.activeColumns}
			></DataView>
		</StyledDiv>
	);
}

export default DataViewKitchenSink;