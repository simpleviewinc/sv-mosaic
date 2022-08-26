import React, { useState } from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import DataViewPrimaryFilter from "../DataViewPrimaryFilter";
import DataViewFilterTextDropdownContent from "./DataViewFilterTextDropdownContent";
import DataViewFilterDropdown from "../DataViewFilterDropdown";

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

function DataViewFilterText(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "label",
				type : "string",
				required : true
			},
			{
				name : "data",
				type : "object",
				schema : [
					{ name : "value", type : "string" },
					{ name : "comparison", type : "string", enum : validComparisonNames }
				],
				allowExtraKeys : false,
				required : true
			},
			{
				name: "comparisonDefault",
				type: "string",
				required: false
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
					},
					{
						name : "placeholder",
						type : "string",
						required : false
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
	const comparison = props.data.comparison || (props.comparisonDefault || "equals");
	const value = props.data.value || "";
	
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
			<DataViewPrimaryFilter
				label={props.label}
				value={valueString}
				type={props.type}
				onRemove={props.onRemove}
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