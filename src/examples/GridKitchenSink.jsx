import React, { useState, useEffect, useMemo, useReducer } from "react";
import { pick } from "lodash";

import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from "@material-ui/icons/Delete";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import theme from "../utils/theme.js";
import Grid from "../components/Grid.jsx";
import RemoveDialog from "../examples/RemoveDialog.jsx";
import JSONDB from "../utils/JSONDB.js";
import rawData from "./grandrapids_custom_header_slides.json";
import categories from "./categories.json";
import GridFilterText from "../components/GridFilterText.jsx";
import { transform_dateFormat, transform_get, transform_thumbnail } from "../utils/column_transforms.js";

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

const filters = [
	{
		name : "keyword",
		label : "Keyword",
		type : "primary",
		component : GridFilterText,
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
		name : "title",
		label : "Title",
		type : "optional",
		component : GridFilterText,
		toFilter : processStringFilter
	},
	{
		name : "title_with_comparisons",
		label : "Title with Comparisons",
		type : "optional",
		component : GridFilterText,
		toFilter : processStringFilter,
		column : "title",
		args : {
			comparisons : ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"]
		}
	}
]

function GridKitchenSink() {
	const categoriesApi = useMemo(() => {
		return new JSONDB(categories);
	}, []);
	
	const api = useMemo(() => {
		return new JSONDB(rawData, {
			relationships : [
				{
					api : categoriesApi,
					key : "categories",
					left_key : "categories_ids",
					right_key : "id"
				}
			]
		});
	}, []);
	
	const [state, setState] = useState({
		removeItems : [],
		data : [],
		view : "grid",
		limit : 25,
		skip : 0,
		count : undefined,
		sort : {
			name : "title",
			dir : "asc"
		},
		filter : {},
		activeFilters : []
	});
	
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
				count : count
			});
		}
		
		fetchData();
	}, [state.limit, state.sort, state.skip, state.filter]);
	
	const listColumns = [
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
			name : "categories",
			label : "Categories",
			transforms : [
				function(data) {
					return data.map(val => val.tag).join(", ");
				}
			]
		},
		{
			name : "created",
			label : "Created",
			sortable : true,
			transforms : [
				transform_dateFormat()
			]
		}
	];
	
	const gridColumns = [
		{
			name : "image",
			label : "Image",
			transforms : [
				transform_get(["resource_raw", "secure_url"]),
				transform_thumbnail({ width : 275, height : 185 })
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
	
	const gridConfig = {
		title : "Your Uploads",
		columns : state.view === "list" ? listColumns : gridColumns,
		primaryActions : [
			{
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
				label : "View Children",
				onClick : function({ data }) {
					alert(`View Children ${data.id}`);
				}
			},
			{
				label : "History",
				onClick : function({ data }) {
					alert(`History ${data.id}`);
				}
			}
		],
		bulkActions : [
			{
				color : "blue",
				variant : "icon",
				mIcon : CloudDownloadIcon,
				onClick : function({ data }) {
					alert(`DOWNLOAD ${data.map(val => val.id)}`);
				}
			},
			{
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
		onSkipChange : function(data) {
			setState({
				...state,
				skip : data
			});
		},
		onLimitChange : function(data) {
			setState({
				...state,
				limit : data,
				skip : 0
			});
		},
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
		onActiveFiltersChange : function(data) {
			setState({
				...state,
				activeFilters : data,
				filter : pick(state.filter, data)
			});
		}
	};
	
	// let removeDialog;
	// if (removeItems.length > 0) {
	// 	const onOk = function() {
	// 		setRemoveItems([]);
	// 	}
	// 	const onCancel = function() {
	// 		setRemoveItems([]);
	// 	}
		
	// 	removeDialog = <RemoveDialog onOk={onOk} onCancel={onCancel}></RemoveDialog>;
	// }
	
	return (
		<div>
			<Grid
				{ ...gridConfig }
				data={state.data}
				limit={state.limit}
				skip={state.skip}
				count={state.count}
				view={state.view}
				sort={state.sort}
				filter={state.filter}
				activeFilters={state.activeFilters}
			></Grid>
			{/*
			{removeDialog}
			*/}
		</div>
	);
}

export default GridKitchenSink;