import * as React from "react";
import { useState } from "react";
import FilterDate from "./FilterDate";

export default {
	title : "FilterDate"
}

export const example = () => {
	const [state, setState] = useState({});

	const onChange = function(data) {
		setState(data);
	}

	const onRemove = function() {

	}
	
	return (
		<FilterDate
			label="Testing"
			type="primary"
			data={state}
			args={{}}
			onRemove={onRemove}
			onChange={onChange}
		/>
	)
}