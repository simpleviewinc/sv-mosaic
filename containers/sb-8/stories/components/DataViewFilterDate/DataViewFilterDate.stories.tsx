import * as React from "react";
import type { ReactElement } from "react";
import { useState } from "react";
import DataViewFilterDate from "#mosaic/components/DataViewFilterDate";
import type { MosaicLabelValue } from "#mosaic/types";

export default {
	title : "Components/DataViewFilterDate",
};
const optionLibrary: MosaicLabelValue[] = [
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
		label: "A really really long time ago",
		value: "a_really_really_long_time_ago",
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
	},
	{
		label: "Last 4 years",
		value: "last_4_years",
	},
	{
		label: "Last 5 years",
		value: "last_5_years",
	},
	{
		label: "Last 6 years",
		value: "last_6_years",
	},
	{
		label: "Last 7 years",
		value: "last_7_years",
	},
	{
		label: "Last 8 years",
		value: "last_8_years",
	},
	{
		label: "Last 9 years",
		value: "last_9_years",
	},
];

export const Playground = ({ showOptions }: typeof Playground.args): ReactElement => {
	const [state, setState] = useState({});

	const options = optionLibrary.slice(0, showOptions);

	const onChange = function(data) {
		setState(data);
	};

	return (
		<DataViewFilterDate
			label="Date filter example"
			data={state}
			args={{ options: showOptions > 0 ? options : undefined }}
			onChange={onChange}
		/>
	);
};

Playground.args = {
	showOptions: 0,
};

Playground.argTypes = {
	showOptions: {
		name: "Number of options to show",
		control: {
			type: "range",
			min: 0,
			max: optionLibrary.length,
		},
	},
};

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
		},
	];

	const onChange = function(type, data) {
		const newState = {
			...state,
			[type]: data,
		};
		setState(newState);
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
			<DataViewFilterDate
				label="Regular Date filter"
				data={state.regular}
				onChange={(data) => onChange("regular", data)}
				args={{ options: undefined }}
			/>
			<DataViewFilterDate
				label="Date filter with options"
				data={state.options}
				args={{ options }}
				onChange={(data) => onChange("options", data)}
			/>
		</div>
	);
};
