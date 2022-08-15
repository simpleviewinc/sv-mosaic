import * as React from "react";
import { useState, Fragment } from "react";
import Button from "../Button";

import MenuSelect from "./";

export default {
	title : "Components/MenuSelect"
}

const MENU_OPTIONS = [
	{
		label : "Item A",
		value : "a"
	},
	{
		label : "Item B",
		value : "b"
	},
	{
		label : "Item C",
		value : "c"
	},
	{
		label : "Item D",
		value : "d"
	},
	{
		label : "Item E",
		value : "e"
	}
];

const Template = (args) => {
	const { options, placeholder } = args;

	const [state, setState] = useState({
		value : ""
	});

	const onChange = function(value) {
		setState({
			...state,
			value
		})
	}

	return (
		<Fragment>
			<p>Chosen: {state.value}</p>
			<Button
				label="Open"
				color="blue"
				variant="contained"
				menuContent={
					<MenuSelect
						placeholder={placeholder}
						value={state.value}
						options={options}
						onChange={onChange}
					/>
				}
			/>
		</Fragment>
	)
}

export const Playground = Template.bind({});
Playground.args = {
	options: MENU_OPTIONS,
	placeholder: "Any..."//TODO: SEE IF THIS CAN BE NULL OR RE-ADD OTHER STORY.
}

// export const example = (): ReactElement => {
// 	const [state, setState] = useState({
// 		value : ""
// 	});

// 	const onChange = function(value) {
// 		setState({
// 			...state,
// 			value
// 		})
// 	}

// 	return (
// 		<Fragment>
// 			<p>Chosen: {state.value}</p>
// 			<Button
// 				label="Open"
// 				color="blue"
// 				variant="contained"
// 				menuContent={
// 					<MenuSelect
// 						value={state.value}
// 						options={MENU_OPTIONS}
// 						onChange={onChange}
// 					/>
// 				}
// 			/>
// 		</Fragment>
// 	)
// }

// export const withPlaceholder = (): ReactElement => {
// 	const [state, setState] = useState({
// 		value : ""
// 	});

// 	const onChange = function(value) {
// 		setState({
// 			...state,
// 			value
// 		})
// 	}

// 	return (
// 		<Fragment>
// 			<p>Chosen: {state.value}</p>
// 			<Button
// 				label="Open"
// 				color="blue"
// 				variant="contained"
// 				menuContent={
// 					<MenuSelect
// 						placeholder="Any..."
// 						value={state.value}
// 						options={MENU_OPTIONS}
// 						onChange={onChange}
// 					/>
// 				}
// 			/>
// 		</Fragment>
// 	)
// }