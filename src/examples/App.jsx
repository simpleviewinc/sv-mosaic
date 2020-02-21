import React, { useState } from "react";
import styled from "styled-components";
import { hot } from "react-hot-loader/root";
import DataViewKitchenSink from "../components/DataView/example/DataViewKitchenSink";
import Buttons from "./Buttons.jsx";
import "./main.css";

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;

	& > .component {
		flex: 1;
		min-height: 0;
	}
`;

function App() {
	const defaultComponent = "DataViewKitchenSink";
	const [componentName, setComponentName] = useState(defaultComponent);
	
	const options = [
		{ label : "DataView Kitchen Sink", value : "DataViewKitchenSink", component : <DataViewKitchenSink></DataViewKitchenSink> },
		{ label : "Buttons", value : "Buttons", component : <Buttons></Buttons> }
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
		<StyledDiv>
			<select onChange={onChange} value={componentName}>
				<option>Choose a example...</option>
				{optionsDom}
			</select>
			<hr/>
			<div className="component">
				{activeComponent}
			</div>
		</StyledDiv>
	)
}

export default hot(App);