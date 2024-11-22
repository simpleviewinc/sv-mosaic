import * as React from "react";
import type { ReactElement } from "react";
import { useState } from "react";
import DataViewFilterText from "@root/components/DataViewFilterText";

export default {
	title : "Components/DataViewFilterText",
};

export const Playground = ({ comparison, placeholder, comparisonDefault }: typeof Playground.args): ReactElement => {
	const [state, setState] = useState({});

	const onChange = function(data) {
		setState(data ?? {});
	};

	return (
		<DataViewFilterText
			label="Filter text example"
			data={state}
			args={{
				comparisons: comparison && ["contains", "not_contains", "equals", "not_equals", "exists", "not_exists"],
				placeholder,
				comparisonDefault: comparisonDefault === "undefined" ? undefined : comparisonDefault,
			}}
			onChange={onChange}
		/>
	);
};

Playground.args = {
	comparison: false,
	placeholder: "Placeholder",
	comparisonDefault: "undefined",
};

Playground.argTypes = {
	comparison: {
		name: "Comparison",
	},
	placeholder: {
		name: "Placholder",
	},
	comparisonDefault: {
		name: "Default Comparison",
		options: ["contains", "not_contains", "equals", "not_equals", "exists", "not_exists", "undefined"],
		control: { type: "select" },
	},
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

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
			<DataViewFilterText
				label="Filter text example"
				data={state.regular}
				args={{}}
				onChange={(data) => onChange("regular", data)}
			/>
			<DataViewFilterText
				label="Filter text with comparisons"
				data={state.comparisons}
				args={{
					comparisons: ["contains", "not_contains", "equals", "not_equals", "exists", "not_exists"],
				}}
				onChange={(data) => onChange("comparisons", data)}
			/>
		</div>
	);
};
