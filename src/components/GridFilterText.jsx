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
				name : "value",
				type : "object",
				schema : [
					{ name : "value", type : "string" },
					{ name : "comparison", type : "string", enum : validComparisonNames }
				],
				allowExtraKeys : false,
				required : true
			},
			{
				name : "type",
				type : "string",
				required : true
			},
			{
				name : "args",
				type : "object",
				schema : [
					{
						name : "comparisons",
						type : "array",
						schema : {
							type : "string",
							enum : validComparisonNames
						}
					}
				],
				allowExtraKeys : false
			},
			{
				name : "onRemove",
				type : "function",
				required : true
			},
			{
				name : "onChange",
				type : "function",
				required : true
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [anchorEl, setAnchorEl] = useState(null);
	const comparison = props.value.comparison || "equals";
	const value = props.value.value || "";
	
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
	} else if (value === "") {
		valueString = "";
	} else {
		valueString = `${comparisonMap[comparison]} "${value}"`
	}
	
	// filter the valid comparisons based on what the developer is allowing
	const activeComparisons = props.args && props.args.comparisons ? validComparisons.filter(val => props.args.comparisons.includes(val.value)) : undefined;
	
	return (
		<StyledWrapper>
			<GridPrimaryFilter
				label={props.label}
				value={valueString}
				type={props.type}
				onRemove={props.onRemove}
				onClick={onClick}
			/>
			<GridFilterDropdown
				anchorEl={anchorEl}
				onClose={onClose}
			>
				<GridFilterTextDropdownContent
					value={value}
					onChange={props.onChange}
					comparison={comparison}
					comparisons={activeComparisons}
					onClose={onClose}
				/>
			</GridFilterDropdown>
		</StyledWrapper>
	);
}

export default GridFilterText;