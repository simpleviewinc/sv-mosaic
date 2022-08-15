import * as React from "react";
import { useState, ReactElement } from "react";
import FilterDate from "./FilterDate";

export default {
	title : "Components/FilterDate",
	component: FilterDate
}

export const example = (): ReactElement => {
	const [state, setState] = useState({});

	const onChange = function(data) {
		setState(data);
	}

	const onRemove = () => undefined;
	
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