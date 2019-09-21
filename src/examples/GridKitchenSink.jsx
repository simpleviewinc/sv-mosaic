import React, { Component, useState, useEffect, useMemo } from "react";

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

function GridKitchenSink() {
	console.log("parent grid");
	
	const api = useMemo(() => {
		return new JSONDB(rawData);
	}, []);
	
	const [removeItems, setRemoveItems] = useState([]);
	const [data, setData] = useState([]);
	const [sharedState, setSharedState] = useState({
		limit : 25,
		sort : {
			name : "title",
			dir : "asc"
		}
	});
	
	const gridConfig = {
		title : "Your Uploads",
		columns : [
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
				style : "faded",
				sortable : true,
				transforms : [
					transform_dateFormat()
				]
			}
		],
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
		]
	};
	
	useEffect(() => {
		const fetchData = async function() {
			const newData = await api.find(sharedState);
			setData(newData);
		}
		
		fetchData();
	}, [sharedState]);
	
	let removeDialog;
	if (removeItems.length > 0) {
		const onOk = function() {
			setRemoveItems([]);
		}
		const onCancel = function() {
			setRemoveItems([]);
		}
		
		removeDialog = <RemoveDialog onOk={onOk} onCancel={onCancel}></RemoveDialog>;
	}
	
	return (
		<div>
			<Grid
				config={gridConfig}
				data={data}
				sharedState={sharedState}
				setSharedState={setSharedState}
			></Grid>
			{removeDialog}
		</div>
	);
}

export default GridKitchenSink;