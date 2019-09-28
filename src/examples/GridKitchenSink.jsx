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
import { transform_dateFormat, transform_get } from "../utils/column_transforms.js";

function stateReducer(state, { type, data }) {
	const newState = {
		...state
	}
	
	switch (type) {
		case "limit": {
			newState.limit = data;
			break;
		}
		case "sort": {
			newState.sort = data;
			break;
		}
		case "data": {
			newState.data = data;
			break;
		}
		case "view": {
			newState.view = data;
			break;
		}
		default: {
			throw new Error("Unrecognized reducer action.");
		}
	}
	
	return newState;
}

function GridKitchenSink() {
	const api = useMemo(() => {
		return new JSONDB(rawData);
	}, []);
	
	const [state, dispatch] = useReducer(stateReducer, {
		removeItems : [],
		data : [],
		view : "grid",
		limit : 25,
		sort : {
			name : "title",
			dir : "asc"
		}
	});
	
	useEffect(() => {
		const fetchData = async function() {
			const newData = await api.find({
				limit : state.limit,
				sort : state.sort
			});
			
			dispatch({ type : "data", data : newData });
		}
		
		fetchData();
	}, [state.limit, state.sort]);
	
	const listColumns = [
		{
			name : "image",
			label : "Image",
			transforms : [
				transform_get(["resource_raw", "secure_url"]),
				function(data) {
					const newUrl = data.replace(/\/upload\//, `/upload/c_fill,h_50,w_50/`);
					
					return <img src={newUrl} width="50" height="50"/>;
				}
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
				function(data) {
					const newUrl = data.replace(/\/upload\//, `/upload/c_fill,h_185,w_275/`);
					
					return <img src={newUrl}/>;
				}
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
		views : ["list", "grid"]
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
				view={state.view}
				sort={state.sort}
				dispatch={dispatch}
			></Grid>
			{/*
			{removeDialog}
			*/}
		</div>
	);
}

export default GridKitchenSink;