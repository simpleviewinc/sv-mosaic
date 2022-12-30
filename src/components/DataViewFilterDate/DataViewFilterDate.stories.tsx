import * as React from "react";
import { useState, ReactElement } from "react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import DataViewFilterDate from "./DataViewFilterDate";
import { MosaicLabelValue } from "@root/types";

export default {
	title : "Components/DataViewFilterDate",
	decorators: [withKnobs],
}

export const example = (): ReactElement => {
	const [state, setState] = useState({});

	const showOptions = boolean("Show options", false);
	const options: MosaicLabelValue[] = [
		{
			label: "Today",
			value: "today",
		},
		{
			label: "Last 3 years",
			value: "last_3_years",
		}
	];

	const onChange = function(data) {
		setState(data);
	}

	const onRemove = () => undefined;

	return (
		<DataViewFilterDate
			label="Testing"
			data={state}
			args={{ options: showOptions ? options : undefined}}
			onRemove={onRemove}
			onChange={onChange}
		/>
	)
}
