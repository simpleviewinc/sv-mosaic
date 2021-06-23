import * as React from "react";
import { useState, ReactElement } from "react";
import FilterSingleSelect from "./FilterSingleSelect";

export default {
	title : "Components|FilterSingleSelect"
}

const options = [
	{ label : "Option A", value : "a" },
	{ label : "Option B", value : "b" },
	{ label : "Option C", value : "c" },
	{ label : "Option D", value : "d" }
]

export const example = (): ReactElement => {
	const [state, setState] = useState({
		value : undefined
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
			args={{ getOptions, getSelected }}
			onRemove={onRemove}
			onChange={onChange}
		/>
	)
}