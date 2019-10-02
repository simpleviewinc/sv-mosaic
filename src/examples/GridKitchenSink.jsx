import React, { useState, useEffect, useMemo, useReducer } from "react";

import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from "@material-ui/icons/Delete";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import theme from "../utils/theme.js";
import Grid from "../components/Grid.jsx";
import RemoveDialog from "../examples/RemoveDialog.jsx";
import JSONDB from "../utils/JSONDB.js";
import rawData from "./grandrapids_custom_header_slides.json";
import GridFilterText from "../components/GridFilterText.jsx";
import { transform_dateFormat, transform_get, transform_thumbnail } from "../utils/column_transforms.js";

function GridKitchenSink() {
	const api = useMemo(() => {
		return new JSONDB(rawData);
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
		filters : {},
		primaryFilters : []
	});
	
	const filterChange = function(name, value) {
		
	}
	
	useEffect(() => {
		const fetchData = async function() {
			const newData = await api.find({
				limit : state.limit,
				sort : state.sort,
				skip : state.skip
			});
			
			const count = await api.count({});
			
			setState({
				...state,
				data : newData,
				count : count
			});
		}
		
		fetchData();
	}, [state.limit, state.sort, state.skip]);
	
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
		filters : [
			{
				label : "Keyword",
				component : GridFilterText,
				onChange : function(value) {
					
				}
			}
		],
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
			></Grid>
			{/*
			{removeDialog}
			*/}
		</div>
	);
}

export default GridKitchenSink;