import * as React from "react";
import { useState, ReactElement } from "react";
import { boolean, text, select, withKnobs } from "@storybook/addon-knobs";
import DataViewFilterText from "@root/components/DataViewFilterText";

export default {
	title : "Components/DataViewFilterText",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const [state, setState] = useState({});

	const comparison = boolean("Comparison", false);
	const placeholder = text("Placeholder", "Placeholder");
	const comparisonDefault = select(
		"Default comparison",
		["contains", "not_contains", "equals", "not_equals", "exists", "not_exists", "undefined"],
		"undefined",
	);

	const onChange = function(data) {
		setState(data ?? {});
	};

	const onRemove = () => undefined;

	return (
		<DataViewFilterText
			label="Filter text example"
			data={state}
			args={{
				comparisons: comparison && ["contains", "not_contains", "equals", "not_equals", "exists", "not_exists"],
				placeholder,
				comparisonDefault: comparisonDefault === "undefined" ? undefined : comparisonDefault,
			}}
			onRemove={onRemove}
			onChange={onChange}
		/>
	);
};

export const KitchenSink = (): ReactElement => {
	const [state, setState] = useState({
		regular: {},
		comparisons: {},
	});

	const onChange = function(type, data) {
		const newState = {
			...state,
			[type]: data ?? {},
		};
		setState(newState);
	};

	const onRemove = () => undefined;

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
			<DataViewFilterText
				label="Filter text example"
				data={state.regular}
				args={{}}
				onRemove={onRemove}
				onChange={(data) => onChange("regular", data)}
			/>
			<DataViewFilterText
				label="Filter text with comparisons"
				data={state.comparisons}
				args={{
					comparisons: ["contains", "not_contains", "equals", "not_equals", "exists", "not_exists"],
				}}
				onRemove={onRemove}
				onChange={(data) => onChange("comparisons", data)}
			/>
		</div>
	);
};
