import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import theme from "./utils/theme.js";
import "./App.css";
import Grid from "./components/Grid.jsx";

function App() {
	const GridConfig = {
		title : "Testing title",
		defaultSort : "title",
		getData : function() {
			return [
				{
					id : 0,
					title : "Alpha One",
					type : "image",
					created : new Date()
				},
				{
					id : 1,
					title : "Testing Title 2",
					type : "image",
					created : new Date()
				},
				{
					id : 2,
					title : "Zeta 3",
					type : "image",
					created : new Date()
				}
			]
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
				faIcon : faEdit,
				color : theme.colors.blue,
				handler : function() {
					
				}
			},
			{
				name : "view_children",
				type : "additional",
				handler : function() {
					
				}
			},
			{
				name : "bulk_download",
				type : "bulk",
				faIcon : faDownload,
				handler : function() {
					
				}
			},
			{
				name : "bulk_edit",
				type : "bulk",
				faIcon : faEdit,
				handler : function() {
					
				}
			},
			{
				name : "bulk_remove",
				type : "bulk",
				faIcon : faTrashAlt,
				handler : function() {
					
				}
			}
		]
	}
	
	return (
		<div className="App">
			<h1>Components</h1>
			<h2>Grid</h2>
			<Grid config={GridConfig}></Grid>
		</div>
	);
}

export default hot(App);