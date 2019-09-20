import React, { Component, useState, useEffect, useMemo } from "react";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

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
		actions : [
			{
				name : "edit",
				type : "primary",
				buttonOptions : {
					faIcon : faEdit,
					color : theme.colors.blue,
				},
				handler : function() {
					alert("EDIT");
				}
			},
			{
				name : "view_children",
				type : "additional",
				handler : function() {
					alert("VIEW CHILDREN");
				}
			},
			{
				name : "bulk_download",
				type : "bulk",
				buttonOptions : {
					faIcon : faDownload
				},
				handler : function() {
					alert("BULK DOWNLOAD");
				}
			},
			{
				name : "bulk_edit",
				type : "bulk",
				buttonOptions : {
					faIcon : faEdit
				},
				handler : function() {
					alert("BULK EDIT");
				}
			},
			{
				name : "bulk_remove",
				type : "bulk",
				buttonOptions : {
					faIcon : faTrashAlt
				},
				handler : function({ data }) {
					setRemoveItems(data);
				}
			}
		],
		buttons : [
			{
				name : "create_new",
				buttonOptions : {
					faIcon : faPlus,
					label : "Create New",
					border : true,
					color : theme.colors.blue
				},
				handler : function() {
					alert("CREATE NEW");
				}
			},
			{
				name : "no_icon",
				buttonOptions : {
					label : "No Icon",
					color : theme.colors.lightGray,
					border : true
				},
				handler : function() {
					alert("NO ICON");
				}
			},
			{
				name : "icon_only",
				buttonOptions : {
					faIcon : faPlus,
					border : true,
					color : theme.colors.blue
				},
				handler : function() {
					alert("ICON ONLY");
				}
			},
			{
				name : "icon_no_boder",
				buttonOptions : {
					faIcon : faPlus,
					color : theme.colors.blue
				},
				handler : function() {
					alert("ICON NO BORDER");
				}
			},
			{
				name : "text no boder",
				buttonOptions : {
					label : "Text No Border",
					color : theme.colors.blue
				},
				handler : function() {
					alert("TEXT NO BORDER");
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