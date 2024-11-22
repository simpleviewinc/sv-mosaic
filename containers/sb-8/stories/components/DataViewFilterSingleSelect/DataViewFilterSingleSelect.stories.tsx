import * as React from "react";
import type { ReactElement } from "react";
import { useState, useEffect } from "react";
import DataViewFilterSingleSelect from "@root/components/DataViewFilterSingleSelect";

export default {
	title : "Components/DataViewFilterSingleSelect",
};

const options = [
	{ label : "Option A", value : "a" },
	{ label : "Option B", value : "b" },
	{ label : "Option C", value : "c" },
	{ label : "Option D", value : "d" },
];

const optionLabels = ["Option A", "Option B", "Option C", "Option D"];

export const Playground = ({ defaultValue, required }: typeof Playground.args): ReactElement => {
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
			onChange={onChange}
		/>
	);
};

Playground.args = {
	defaultValue: "Option A",
	required: false,
};

Playground.argTypes = {
	defaultValue: {
		name: "Default Value",
		options: optionLabels,
		control: { type: "select" },
	},
	required: {
		name: "Required",
	},
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
				onChange={onChangeRequired}
			/>
			<h2>No required</h2>
			<DataViewFilterSingleSelect
				label="No required"
				data={state}
				args={{ getOptions, getSelected, required: false }}
				onChange={onChange}
			/>
		</>
	);
};
