import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import DataViewKitchenSink from "./DataViewKitchenSink.jsx";
import Buttons from "./Buttons.jsx";
import Filters from "./Filters.jsx";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	props: {
	  MuiButtonBase: {
		disableRipple: true,
	  },
	},
  });

const containerStyle = {
	padding: "1rem",
}

function App() {
	const defaultComponent = "DataViewKitchenSink";
	const [componentName, setComponentName] = useState(defaultComponent);
	
	const options = [
		{ label : "DataView Kitchen Sink", value : "DataViewKitchenSink", component : <DataViewKitchenSink></DataViewKitchenSink> },
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
		<ThemeProvider theme={theme}>
			<div style={containerStyle}>
				<select onChange={onChange} value={componentName}>
					<option>Choose a example...</option>
					{optionsDom}
				</select>
				<hr/>
				{activeComponent}
			</div>
		</ThemeProvider>
	)
}

export default hot(App);