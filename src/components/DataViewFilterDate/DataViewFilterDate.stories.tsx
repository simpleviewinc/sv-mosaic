import * as React from "react";
import { useState, ReactElement } from "react";
import DataViewFilterDate from "./DataViewFilterDate";

export default {
	title : "Components/DataViewFilterDate"
}

export const example = (): ReactElement => {
	const [state, setState] = useState({});

	const onChange = function(data) {
		setState(data);
	}

	const onRemove = () => undefined;

	return (
		<DataViewFilterDate
			label="Testing"
			data={state}
			args={{}}
			onRemove={onRemove}
			onChange={onChange}
		/>
	)
}
