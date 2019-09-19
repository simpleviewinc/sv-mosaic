import React, { Component, useState } from "react";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

import theme from "../utils/theme.js";
import Grid from "../components/Grid.jsx";
import RemoveDialog from "../examples/RemoveDialog.jsx";

const sortArr = function(a, b, dir) {
	const multiplier = dir === "asc" ? 1 : -1;
	console.log("a", a, b, dir);
	
	if (a instanceof Date) {
		return (a - b) * multiplier;
	}
	
	if (a > b) {
		return 1 * multiplier;
	} else if (b < a) {
		return -1 * multiplier;
	} else {
		return 0;
	}
}

function GridKitchenSink() {
	const [removeItems, setRemoveItems] = useState([]);
	
	const GridConfig = {
		title : "Your Uploads",
		sort : {
			name : "title",
			dir : "asc"
		},
		getData : function({ sort }) {
			const data = [
				{
					id : 0,
					title : "Alpha One",
					type : "image",
					created : new Date(2019, 1, 1)
				},
				{
					id : 1,
					title : "Dramatic Sky",
					type : "image",
					created : new Date(2019, 5, 4)
				},
				{
					id : 2,
					title : "Zeta 3",
					type : "image",
					created : new Date(2019, 3, 1)
				}
			];
			
			const sorted = data.sort((a, b) => sortArr(a[sort.name], b[sort.name], sort.dir));
			
			return sorted;
		},
		columns : [
			{
				name : "title",
				label : "Title",
				style : "bold",
				sortable : true
			},
			{
				name : "type",
				label : "Type"
			},
			{
				name : "created",
				label : "Created",
				style : "faded",
				sortable : true,
				transforms : [
					{ name : "dateFormat" }
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
	}
	
	let removeDialog;
	if (removeItems.length > 0) {
		const onOk = function() {
			alert("OK");
			setRemoveItems([]);
		}
		const onCancel = function() {
			alert("CANCEL");
			setRemoveItems([]);
		}
		
		removeDialog = <RemoveDialog onOk={onOk} onCancel={onCancel}></RemoveDialog>;
	}
	
	return (
		<div>
			<h1>Components</h1>
			<h2>Grid</h2>
			<Grid config={GridConfig}></Grid>
			{removeDialog}
		</div>
	);
}

export default GridKitchenSink;