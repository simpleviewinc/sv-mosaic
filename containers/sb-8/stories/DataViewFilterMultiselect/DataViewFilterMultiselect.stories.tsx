import * as React from "react";
import { ReactElement, useState } from "react";
import DataViewFilterMultiselect, { DataViewFilterMultiselectProps } from "@root/components/DataViewFilterMultiselect";
import MultiSelectHelper from "@root/components/DataView/example/MultiSelectHelper";
import categories from "@root/components/DataView/example/categories.json";
import JSONDB from "@root/utils/JSONDB";

export default {
	title : "Components/DataViewFilterMultiselect",
};

const categoriesApi = new JSONDB(categories);

const categoriesHelper = new MultiSelectHelper({
	api: categoriesApi,
	labelColumn: "tag",
	valueColumn: "id",
	sortColumn: "sort_tag",
});

export const Playground = ({ showComparisons, limit }: typeof Playground.args): ReactElement => {
	const [state, setState] = useState<DataViewFilterMultiselectProps["data"]>({
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

	const onRemove = () => {
		alert("on remove");
	};

	return (
		<>
			<DataViewFilterMultiselect
				key="multi_select_category"
				label="Multi Select Category"
				args={{
					getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
					getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
					comparisons: showComparisons && ["in", "not_in", "all", "exists", "not_exists"],
					limit,
				}}
				data={state}
				onRemove={onRemove}
				onChange={value => onChange(value)}
			/>
		</>
	);
};

Playground.args = {
	showComparisons: false,
	limit: 25,
};

export const KitchenSink = (): ReactElement => {

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

	const onRemove = () => {
		alert("on remove");
	};

	return (
		<>
			<h2>Hide comparison selector</h2>
			<DataViewFilterMultiselect
				key="multi_select_category"
				label="Multi Select Category"
				args={{
					getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
					getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
				}}
				data={state}
				onRemove={onRemove}
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
				onRemove={onRemove}
				onChange={value => onChangeComparisons(value)}
			/>
		</>
	);
};
