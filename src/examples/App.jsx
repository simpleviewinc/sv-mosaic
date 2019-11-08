import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import GridKitchenSink from "./GridKitchenSink.jsx";
import Buttons from "./Buttons.jsx";
import Filters from "./Filters.jsx";

function App() {
	const defaultComponent = "GridKitchenSink";
	const [componentName, setComponentName] = useState(defaultComponent);
	
	const options = [
		{ label : "Grid Kitchen Sink", value : "GridKitchenSink", component : <GridKitchenSink></GridKitchenSink> },
		{ label : "Buttons", value : "Buttons", component : <Buttons></Buttons> },
		{ label : "Filters", value : "Filters", component : <Filters></Filters> }
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