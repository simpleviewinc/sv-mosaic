import React, { Component, useState } from "react";
import { hot } from "react-hot-loader/root";
import GridKitchenSink from "./examples/GridKitchenSink.jsx";

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