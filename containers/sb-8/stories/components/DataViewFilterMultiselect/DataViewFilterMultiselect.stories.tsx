import * as React from "react";
import type { ReactElement } from "react";
import { useState } from "react";
import type { DataViewFilterMultiselectProps } from "#mosaic/components/DataViewFilterMultiselect";
import DataViewFilterMultiselect from "#mosaic/components/DataViewFilterMultiselect";
import MultiSelectHelper from "../DataView/example/MultiSelectHelper";
import categories from "../DataView/example/categories.json";
import JSONDB from "../DataView/JSONDB";

export default {
	title : "Components/DataViewFilterMultiselect",
};

export const Playground = ({
	showComparisons,
	itemsPerLoad,
	totalAvailableOptions,
}: typeof Playground.args): ReactElement => {
	const [state, setState] = useState<DataViewFilterMultiselectProps["data"]>({
		comparison: "in",
		value: [],
	});

	const categoriesHelper = React.useMemo(() => {
		const categoriesApi = new JSONDB(
			totalAvailableOptions > -1 ? categories.slice(0, totalAvailableOptions) : categories,
		);

		return new MultiSelectHelper({
			api: categoriesApi,
			labelColumn: "tag",
			valueColumn: "id",
			sortColumn: "sort_tag",
		});
	}, [totalAvailableOptions]);

	const onChange = function(data) {
		if (data === undefined) return setState({
			...state,
			comparison: "",
			value: [],
		});

		setState({
			...state,
			comparison: data.comparison || state.comparison,
			value: data.value,
		});
	};

	return (
		<>
			<DataViewFilterMultiselect
				key="multi_select_category"
				label="Multi Select Category"
				args={{
					getOptions: async (params) => {
						await new Promise((resolve) => setTimeout(() => resolve(null), 2_000));
						return categoriesHelper.getOptions.bind(categoriesHelper)(params);
					},
					getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
					comparisons: showComparisons && ["in", "not_in", "all", "exists", "not_exists"],
					limit: itemsPerLoad,
				}}
				data={state}
				onChange={value => onChange(value)}
			/>
		</>
	);
};

Playground.args = {
	showComparisons: false,
	itemsPerLoad: 25,
	totalAvailableOptions: -1,
};

Playground.argTypes = {
	showComparisons: {
		name: "Show Comparisons",
	},
	itemsPerLoad: {
		name: "Items Per Load",
	},
	totalAvailableOptions: {
		name: "Total Available Options",
	},
};

export const KitchenSink = (): ReactElement => {
	const categoriesHelper = React.useMemo(() => {
		const categoriesApi = new JSONDB(categories);

		return new MultiSelectHelper({
			api: categoriesApi,
			labelColumn: "tag",
			valueColumn: "id",
			sortColumn: "sort_tag",
		});
	}, []);

	const [state, setState] = useState<DataViewFilterMultiselectProps["data"]>({
		comparison: "in",
		value: [],
	});

	const [stateComparisons, setStateComparisons] = useState<DataViewFilterMultiselectProps["data"]>({
		comparison: "in",
		value: [],
	});

	const onChange = function(data) {
		if (data === undefined) return setState({
			...state,
			comparison: "",
			value: [],
		});

		setState({
			...state,
			comparison: data.comparison || state.comparison,
			value: data.value,
		});
	};

	const onChangeComparisons = function(data) {
		if (data === undefined) return setStateComparisons({
			...stateComparisons,
			comparison: "",
			value: [],
		});

		setStateComparisons({
			...stateComparisons,
			comparison: data.comparison || stateComparisons.comparison,
			value: data.value,
		});
	};

	return (
		<>
			<h2>Hide comparison selector</h2>
			<DataViewFilterMultiselect
				key="multi_select_category"
				label="Multi Select Category Without Comparisons"
				args={{
					getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
					getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
				}}
				data={state}
				onChange={value => onChange(value)}
			/>

			<h2>Show comparison selector</h2>
			<DataViewFilterMultiselect
				key="multi_select_category_with_comparisons"
				label="Multi Select Category With Comparisons"
				args={{
					getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
					getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
					comparisons: ["in", "not_in", "all", "exists", "not_exists"],
				}}
				data={stateComparisons}
				onChange={value => onChangeComparisons(value)}
			/>
		</>
	);
};
