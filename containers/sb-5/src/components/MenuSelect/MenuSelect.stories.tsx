import * as React from "react";
import { useState, Fragment, ReactElement } from "react";
import Button from "@root/components/Button";

import MenuSelect from "@root/components/MenuSelect";

export default {
	title : "Components/MenuSelect",
};

const MENU_OPTIONS = [
	{
		label : "Item A",
		value : "a",
	},
	{
		label : "Item B",
		value : "b",
	},
	{
		label : "Item C",
		value : "c",
	},
	{
		label : "Item D",
		value : "d",
	},
	{
		label : "Item E",
		value : "e",
	},
];

export const Example = (): ReactElement => {
	const [state, setState] = useState({
		value : "",
	});

	const onChange = function(value) {
		setState({
			...state,
			value,
		});
	};

	return (
		<Fragment>
			<p>
				Chosen:
				{state.value}
			</p>
			<Button
				label="Open"
				color="blue"
				variant="contained"
				menuContent={(
					<MenuSelect
						value={state.value}
						options={MENU_OPTIONS}
						onChange={onChange}
					/>
				)}
			/>
		</Fragment>
	);
};

export const WithPlaceholder = (): ReactElement => {
	const [state, setState] = useState({
		value : "",
	});

	const onChange = function(value) {
		setState({
			...state,
			value,
		});
	};

	return (
		<Fragment>
			<p>
				Chosen:
				{state.value}
			</p>
			<Button
				label="Open"
				color="blue"
				variant="contained"
				menuContent={(
					<MenuSelect
						placeholder="Any..."
						value={state.value}
						options={MENU_OPTIONS}
						onChange={onChange}
					/>
				)}
			/>
		</Fragment>
	);
};
