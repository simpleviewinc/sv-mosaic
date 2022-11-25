import React, { useState } from "react";
import styled from "styled-components";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterTextDropdownContent from "./DataViewFilterTextDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";
import { DataViewFilterTextProps, FilterTextComparison } from "./DataViewFilterTextTypes";

const StyledWrapper = styled.span`

`;

const validComparisons: { label: string; value: FilterTextComparison }[] = [
	{ label : "Contains", value : "contains" },
	{ label : "Not Contains", value : "not_contains" },
	{ label : "Equals", value : "equals" },
	{ label : "Not Equal", value : "not_equals" },
	{ label : "Exists", value : "exists" },
	{ label : "Not Exists", value : "not_exists" }
];

const comparisonMap = {
	equals : "",
	not_equals : "!=",
	contains : "~",
	not_contains : "!~"
}

function DataViewFilterText(props: DataViewFilterTextProps) {
	if (props.args.comparisonDefault && validComparisons.find( validComparison => validComparison.value === props.args.comparisonDefault) === undefined)
		throw new Error("The selected comparison is not a valid comparison");

	const getComparison = (): FilterTextComparison => {
		if (props.args && props.args.comparisons) {
			if (props.data.comparison) {
				return props.data.comparison;
			} else if (props.args.comparisonDefault && props.args.comparisons.includes(props.args.comparisonDefault as FilterTextComparison)) {
				return props.args.comparisonDefault as FilterTextComparison;
			} else {
				return props.args.comparisons[0];
			}
		}
		return "equals";
	};

	const [anchorEl, setAnchorEl] = useState(null);
	const comparison = getComparison();
	const value = props.data.value || "";

	const onClick = function(event) {
		setAnchorEl(event.currentTarget);
	}

	const onClose = function() {
		setAnchorEl(null);
	}


	// based on the state lets figure out what our value should be
	let valueString: string;
	if (comparison === "exists") {
		valueString = "EXISTS";
	} else if (comparison === "not_exists") {
		valueString = "NOT EXISTS";
	} else if (value === "") {
		valueString = "";
	} else {
		valueString = `${comparisonMap[comparison]} "${value}"`
	}

	// filter the valid comparisons based on what the developer is allowing
	const activeComparisons = props.args && props.args.comparisons ? validComparisons.filter(val => props.args.comparisons.includes(val.value)) : undefined;

	return (
		<StyledWrapper>
			<DataViewPrimaryFilter
				label={props.label}
				value={valueString}
				onClick={onClick}
			/>
			<DataViewFilterDropdown
				anchorEl={anchorEl}
				onClose={onClose}
			>
				<DataViewFilterTextDropdownContent
					value={value}
					onChange={props.onChange}
					comparison={comparison}
					comparisons={activeComparisons}
					onClose={onClose}
					placeholder={props.args?.placeholder}
				/>
			</DataViewFilterDropdown>
		</StyledWrapper>
	);
}

export default DataViewFilterText;
