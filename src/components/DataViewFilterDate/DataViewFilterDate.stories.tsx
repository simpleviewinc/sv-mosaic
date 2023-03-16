import * as React from "react";
import { useState, ReactElement } from "react";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import DataViewFilterDate from "./DataViewFilterDate";
import { MosaicLabelValue } from "@root/types";

export default {
	title : "Components/DataViewFilterDate",
	decorators: [withKnobs],
}

export const Playground = (): ReactElement => {
	const [state, setState] = useState({});

	const showOptions = boolean("Show options", false);
	const options: MosaicLabelValue[] = [
		{
			label: "Today",
			value: "today",
		},
		{
			label: "Yesterday",
			value: "yesterday",
		},
		{
			label: "Tomorrow",
			value: "tomorrow",
		},
		{
			label: "Last year",
			value: "last_year",
		},
		{
			label: "Last 2 years",
			value: "last_2_years",
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
			label="Date filter example"
			data={state}
			args={{ options: showOptions ? options : undefined}}
			onRemove={onRemove}
			onChange={onChange}
		/>
	)
}

export const KitchenSink = (): ReactElement => {
	const [state, setState] = useState({
		regular: {},
		options: {},
	});

	const options: MosaicLabelValue[] = [
		{
			label: "Today",
			value: "today",
		},
		{
			label: "Yesterday",
			value: "yesterday",
		},
		{
			label: "Tomorrow",
			value: "tomorrow",
		},
		{
			label: "Last year",
			value: "last_year",
		},
		{
			label: "Last 2 years",
			value: "last_2_years",
		},
		{
			label: "Last 3 years",
			value: "last_3_years",
		}
	];

	const onChange = function(type, data) {
		const newState = {
			...state,
			[type]: data,
		};
		setState(newState);
	}

	const onRemove = () => undefined;

	return (
		<div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
			<DataViewFilterDate
				label="Regular Date filter"
				data={state.regular}
				onRemove={onRemove}
				onChange={(data) => onChange("regular", data)}
				args={{ options: undefined }}
			/>
			<DataViewFilterDate
				label="Date filter with options"
				data={state.options}
				args={{ options }}
				onRemove={onRemove}
				onChange={(data) => onChange("options", data)}
			/>
		</div>
	)
}
