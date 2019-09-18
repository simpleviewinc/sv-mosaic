import React, { Component, useState } from "react";
import { hot } from "react-hot-loader/root";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import theme from "./utils/theme.js";
import GridKitchenSink from "./examples/GridKitchenSink.jsx";

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

function App() {
	const [componentName, setComponentName] = useState("GridKitchenSink");
	
	const options = [
		{ label : "Grid Kitchen Sink", value : "GridKitchenSink", component : <GridKitchenSink></GridKitchenSink> }
	]
	
	const onChange = function(e) {
		setComponentName(e.target.value);
	}
	
	const optionsDom = options.map(val => {
		return (
			<option key={val.value} value={val.value}>{val.label}</option>
		);
	});
	
	const activeOption = options.filter(val => val.value === componentName);
	const activeComponent = activeOption.length > 0 ? activeOption[0].component : <p>No component chosen.</p>;
	
	return (
		<div>
			<h1>Examples</h1>
			<select onChange={onChange} value={componentName}>
				<option>Choose a example...</option>
				{optionsDom}
			</select>
			<hr/>
			{activeComponent}
		</div>
	)
}

export default hot(App);