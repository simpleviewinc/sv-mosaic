import * as React from "react";
import { useState, ReactElement, useEffect } from "react";
import DataViewFilterSingleSelect from "@root/components/DataViewFilterSingleSelect";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

export default {
	title : "Components/DataViewFilterSingleSelect",
	decorators: [withKnobs],
};

const options = [
	{ label : "Option A", value : "a" },
	{ label : "Option B", value : "b" },
	{ label : "Option C", value : "c" },
	{ label : "Option D", value : "d" },
];

const optionLabels = ["Option A", "Option B", "Option C", "Option D"];

export const Playground = (): ReactElement => {

	const defaultValue = select(
		"Default Value",
		optionLabels,
		"Option A",
	);

	const required = boolean("Required", false);

	const [state, setState] = useState({
		value: undefined,
	});

	useEffect(() => {
		const selectedOption = options.find(option => option.label === defaultValue);
		setState({ value: selectedOption.value });
	}, [defaultValue]);

	const onChange = function(data) {
		setState(data);
	};

	const onRemove = () => undefined;

	const getOptions = function() {
		return {
			docs : options,
			hasMore : false,
		};
	};

	const getSelected = function(id) {
		return options.filter(val => val.value === id)[0];
	};

	return (
		<DataViewFilterSingleSelect
			label="Testing"
			data={state}
			args={{ getOptions, getSelected, required }}
			onRemove={onRemove}
			onChange={onChange}
		/>
	);
};

export const KitchenSink = (): ReactElement => {

	const [state, setState] = useState({
		value :  undefined,
	});

	const [stateRequired, setStateRequired] = useState({
		value :  "a",
	});

	const onChange = function(data) {
		setState(data);
	};

	const onChangeRequired = function(data) {
		setStateRequired(data);
	};

	const onRemove = () => undefined;

	const getOptions = function() {
		return {
			docs : options,
			hasMore : false,
		};
	};

	const getSelected = function(id) {
		return options.filter(val => val.value === id)[0];
	};

	return (
		<>
			<h2>Required</h2>
			<DataViewFilterSingleSelect
				label="Required"
				data={stateRequired}
				args={{ getOptions, getSelected, required: true }}
				onRemove={onRemove}
				onChange={onChangeRequired}
			/>
			<h2>No required</h2>
			<DataViewFilterSingleSelect
				label="No required"
				data={state}
				args={{ getOptions, getSelected, required: false }}
				onRemove={onRemove}
				onChange={onChange}
			/>
		</>
	);
};
