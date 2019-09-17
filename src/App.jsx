import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import "./App.css";
import Grid from "./components/Grid.jsx";

function App() {
	const GridConfig = {
		title : "Testing title",
		getData : function() {
			return [
				{
					id : 0,
					title : "Testing Title 1",
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
					title : "Testing Title 3",
					type : "image",
					created : new Date()
				}
			]
		},
		columns : [
			{
				name : "title",
				label : "Title"
			},
			{
				name : "type",
				label : "Type"
			},
			{
				name : "created",
				label : "Created",
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