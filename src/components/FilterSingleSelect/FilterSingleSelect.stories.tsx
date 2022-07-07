import * as React from "react";
import { useState, ReactElement } from "react";
import FilterSingleSelect from "./FilterSingleSelect";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

export default {
	title : "Components/FilterSingleSelect",
	decorators: [withKnobs],
}

const options = [
	{ label : "Option A", value : "a" },
	{ label : "Option B", value : "b" },
	{ label : "Option C", value : "c" },
	{ label : "Option D", value : "d" }
];

const optionLabels = {
	a: "Option A",
	b: "Option B",
	c: "Option C",
	d: "Option D",
}

export const Playground = (): ReactElement => {

	const defaultValue = select(
		"Default Value",
		optionLabels,
		"Option A"
	);

	const required = boolean("Required", false);

	const [state, setState] = useState({
		value : defaultValue && options.find(option => option.label === defaultValue).value || undefined
	});

	const onChange = function(data) {
		setState(data);
	}

	const onRemove = () => undefined;

	const getOptions = function() {
		return {
			docs : options,
			hasMore : false
		}
	}

	const getSelected = function(id) {
		return options.filter(val => val.value === id)[0];
	}
	
	return (
		<FilterSingleSelect
			label="Testing"
			type="primary"
			data={state}
			args={{ getOptions, getSelected, required }}
			onRemove={onRemove}
			onChange={onChange}
		/>
	)
}

export const KitchenSink = (): ReactElement => {

	const [state, setState] = useState({
		value :  undefined
	});

	const [stateRequired, setStateRequired] = useState({
		value :  "a"
	});


	const onChange = function(data) {
		setState(data);
	}

	const onChangeRequired = function(data) {
		setStateRequired(data);
	}

	const onRemove = () => undefined;

	const getOptions = function() {
		return {
			docs : options,
			hasMore : false
		}
	}

	const getSelected = function(id) {
		return options.filter(val => val.value === id)[0];
	}
	
	return (
		<>	
			<h2>Required</h2>
			<FilterSingleSelect
				label="Required"
				type="primary"
				data={stateRequired}
				args={{ getOptions, getSelected, required: true }}
				onRemove={onRemove}
				onChange={onChangeRequired}
			/>
			<h2>No required</h2>
			<FilterSingleSelect
				label="No required"
				type="primary"
				data={state}
				args={{ getOptions, getSelected, required: false }}
				onRemove={onRemove}
				onChange={onChange}
			/>
		</>
	)
}