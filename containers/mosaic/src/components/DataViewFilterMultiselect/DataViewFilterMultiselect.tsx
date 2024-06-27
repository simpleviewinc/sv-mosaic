import React, { useState, useEffect } from "react";
import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterMultiselectDropdownContent from "./DataViewFilterMultiselectDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import { DataViewFilterMultiselectProps, MultiSelectComparison } from "./DataViewFilterMultiselectTypes";

const validComparisons: { label: string; value: MultiSelectComparison }[] = [
	{ label : "In", value : "in" },
	{ label : "Not In", value : "not_in" },
	{ label : "All", value : "all" },
	{ label : "Exists", value : "exists" },
	{ label : "Not Exists", value : "not_exists" },
];

const comparisonMap = {
	in : "",
	not_in : "Not In - ",
	all : "All - ",
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
		let isMouting = true;
		async function fetchData() {
			const selected = await props.args.getSelected(value);

			setState({
				...state,
				selected,
			});
		}

		if (isMouting) {
			fetchData();
		}

		return () => {
			isMouting = false;
		};
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

	let valueString: string;
	if (comparison === "exists") {
		valueString = "EXISTS";
	} else if (comparison === "not_exists") {
		valueString = "NOT EXISTS";
	} else if (state.selected.length > 0) {
		valueString = `${comparisonMap[comparison]}${state.selected[0]?.label}`;
	} else {
		valueString = "";
	}

	// filter the valid comparisons based on what the developer is allowing
	const activeComparisons = props.args && props.args.comparisons ? validComparisons.filter(val => props.args.comparisons.includes(val.value)) : undefined;

	return (
		<span>
			<DataViewPrimaryFilter
				label={props.label}
				value={valueString}
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
