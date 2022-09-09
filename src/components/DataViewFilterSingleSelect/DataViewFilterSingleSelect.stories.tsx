import * as React from "react";
import { useState, ReactElement, useEffect } from "react";
import DataViewFilterSingleSelect from "./DataViewFilterSingleSelect";

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

export default {
	title : "Components/DataViewFilterSingleSelect",
	component: DataViewFilterSingleSelect,
	argTypes: {
		defaultValue: {//TODO: NOT WORKING AS EXPECTED.
			// options: ["Option A", "Option B", "Option C", "Option D"],
			options: optionLabels,
			control: "select"
		}
	}
}


const Template = (args) => {
	const { defaultValue, required } = args;

	const [state, setState] = useState({
		value : defaultValue && options.find(option => option.label === defaultValue).value || undefined
	});

	useEffect(() => {
		onChange({value: defaultValue});
	}, [defaultValue]);

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
		<DataViewFilterSingleSelect
			label="Testing"
			type="primary"
			data={state}
			args={{ getOptions, getSelected, required }}
			onRemove={onRemove}
			onChange={onChange}
		/>
	)
};

export const Playground = Template.bind({});
Playground.args = {
	defaultValue: "Option A",
	required: false,
}

// const defaultValue = select(
// 	"Default Value",
// 	optionLabels,
// 	"Option A"
// );

// const required = boolean("Required", false);

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
			<DataViewFilterSingleSelect
				label="Required"
				type="primary"
				data={stateRequired}
				args={{ getOptions, getSelected, required: true }}
				onRemove={onRemove}
				onChange={onChangeRequired}
			/>
			<h2>No required</h2>
			<DataViewFilterSingleSelect
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
