import React, { useState } from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import GridPrimaryFilter from "./GridPrimaryFilter.jsx";
import GridFilterTextDropdownContent from "./internal/GridFilterTextDropdownContent.jsx";
import GridFilterDropdown from "./GridFilterDropdown.jsx";

const StyledWrapper = styled.span`
	
`;

const validComparisons = [
	{ label : "Contains", value : "contains" },
	{ label : "Not Contains", value : "not_contains" },
	{ label : "Equals", value : "equals" },
	{ label : "Not Equal", value : "not_equals" },
	{ label : "Exists", value : "exists" },
	{ label : "Not Exists", value : "not_exists" }
];

const validComparisonNames = validComparisons.map(val => val.value);

const comparisonMap = {
	equals : "",
	not_equals : "!=",
	contains : "~",
	not_contains : "!~"
}

function GridFilterText(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "label",
				type : "string",
				required : true
			},
			{
				name : "state",
				type : "object",
				schema : [
					{ name : "value", type : "string", required : true },
					{ name : "comparison", type : "string", enum : validComparisonNames }
				],
				allowExtraKeys : false,
				required : true
			},
			{
				name : "setState",
				type : "function",
				required : true
			},
			{
				name : "comparisons",
				type : "array",
				schema : {
					type : "string",
					enum : validComparisonNames
				}
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [anchorEl, setAnchorEl] = useState(null);
	const comparison = props.state.comparison || "equals";
	
	const onClick = function(event) {
		setAnchorEl(event.currentTarget);
	}
	
	const onClose = function() {
		setAnchorEl(null);
	}
	
	
	// based on the state lets figure out what our value should be
	let valueString;
	if (comparison === "exists") {
		valueString = "EXISTS";
	} else if (comparison === "not_exists") {
		valueString = "NOT EXISTS";
	} else if (props.state.value === "") {
		valueString = "";
	} else {
		valueString = `${comparisonMap[comparison]} "${props.state.value}"`
	}
	
	// filter the valid comparisons based on what the developer is allowing
	const activeComparisons = props.comparisons ? validComparisons.filter(val => props.comparisons.includes(val.value)) : undefined;
	
	return (
		<StyledWrapper>
			<GridPrimaryFilter label={props.label} value={valueString} onClick={onClick}/>
			<GridFilterDropdown
				anchorEl={anchorEl}
				onClose={onClose}
			>
				<GridFilterTextDropdownContent
					state={props.state}
					setState={props.setState}
					comparison={comparison}
					comparisons={activeComparisons}
					onClose={onClose}
				/>
			</GridFilterDropdown>
		</StyledWrapper>
	);
}

export default GridFilterText;