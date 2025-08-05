import React, { useState, useEffect } from "react";

import type { DataViewFilterMultiselectProps, MultiSelectComparison } from "./DataViewFilterMultiselectTypes";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterMultiselectDropdownContent from "./DataViewFilterMultiselectDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import Badge from "../Badge";
import testIds from "@root/utils/testIds";

const validComparisons: { label: string; value: MultiSelectComparison }[] = [
	{ label : "In", value : "in" },
	{ label : "Not In", value : "not_in" },
	{ label : "All", value : "all" },
	{ label : "Exists", value : "exists" },
	{ label : "Not Exists", value : "not_exists" },
];

const comparisonMap = {
	in : "",
	not_in : "not in",
	all : "all",
};

function DataViewFilterMultiselect(props: DataViewFilterMultiselectProps) {

	const [state, setState] = useState({
		anchorEl : null,
		selected : [],
		dropdownOpen : false,
	});

	const value = props.data.value || [];
	const comparison = props.data.comparison || "in";

	useEffect(() => {
		async function fetchData() {
			const selected = await props.args.getSelected(value);

			setState((state) => ({
				...state,
				selected,
			}));
		}

		fetchData();
	}, [props.data]);

	const onClick = function(event) {
		setState({
			...state,
			anchorEl : event.currentTarget,
		});
	};

	const onClose = function() {
		setState({
			...state,
			anchorEl : null,
		});
	};

	const onEntered = function() {
		setState({
			...state,
			dropdownOpen : true,
		});
	};

	const onExited = function() {
		setState({
			...state,
			dropdownOpen : false,
		});
	};

	const onApply = function(data) {
		if (data.value.length > 0 || data.comparison === "exists" || data.comparison === "not_exists") {
			props.onChange(data);
		} else {
			props.onChange(undefined);
		}
		onClose();
	};

	// filter the valid comparisons based on what the developer is allowing
	const activeComparisons = props.args && props.args.comparisons ? validComparisons.filter(val => props.args.comparisons.includes(val.value)) : undefined;

	return (
		<span>
			<DataViewPrimaryFilter
				label={props.label}
				value={(
					comparison === "exists" ? (
						<Badge attrs={{ "data-testid": testIds.DATA_VIEW_FILTER_VALUE }}>exists</Badge>
					) : comparison === "not_exists" ? (
						<Badge attrs={{ "data-testid": testIds.DATA_VIEW_FILTER_VALUE }}>does not exist</Badge>
					) : state.selected.length > 0 && (
						<>
							<span data-testid={testIds.DATA_VIEW_FILTER_OPERATOR}>{comparisonMap[comparison]}</span>
							<Badge attrs={{ "data-testid": testIds.DATA_VIEW_FILTER_VALUE }}>{state.selected[0].label}</Badge>
						</>
					)
				)}
				onClick={onClick}
				multiselect={state?.selected}
			/>
			<DataViewFilterDropdown
				anchorEl={state.anchorEl}
				onClose={onClose}
				onEntered={onEntered}
				onExited={onExited}
			>
				<DataViewFilterMultiselectDropdownContent
					comparison={comparison}
					comparisons={activeComparisons}
					selected={state.selected}
					getOptions={props.args.getOptions}
					isOpen={state.dropdownOpen}
					onApply={onApply}
					placeholder={props.args?.placeholder}
					limit={props.args.limit}
				/>
			</DataViewFilterDropdown>
		</span>
	);
}

export default DataViewFilterMultiselect;
