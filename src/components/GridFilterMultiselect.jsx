import React, { useState, useEffect } from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import GridPrimaryFilter from "./GridPrimaryFilter.jsx";
import GridFilterMultiselectDropdown from "./internal/GridFilterMultiselectDropdown.jsx";

const StyledWrapper = styled.span`
	
`;

const validComparisons = [
	{ label : "In", value : "in" },
	{ label : "Not In", value : "not_in" },
	{ label : "All", value : "all" },
	{ label : "Exists", value : "exists" },
	{ label : "Not Exists", value : "not_exists" }
];

const validComparisonNames = validComparisons.map(val => val.value);

const comparisonMap = {
	in : "",
	not_in : "Not In - ",
	all : "All - "
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
				name : "getOptions",
				type : "function",
				required : true
			},
			{
				name : "getSelected",
				type : "function",
				required : true
			},
			{
				name : "state",
				type : "object",
				schema : [
					{
						name : "value",
						type : "array",
						schema : {
							type : "string"
						},
						required : true
					},
					{
						name : "comparison",
						type : "string",
						enum : validComparisonNames
					}
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
	const [key, setKey] = useState(0);
	const [selected, setSelected] = useState([]);
	const comparison = props.state.comparison || "in";
	
	useEffect(() => {
		async function fetchData() {
			const selected = await props.getSelected(props.state.value);
			setSelected(selected);
		}
		
		fetchData();
	}, [props.state]);
	
	const onClick = function(event) {
		setAnchorEl(event.currentTarget);
		setKey(key + 1);
	}
	
	const onClose = function() {
		setAnchorEl(null);
	}
	
	let valueString;
	if (comparison === "exists") {
		valueString = "EXISTS";
	} else if (comparison === "not_exists") {
		valueString = "NOT EXISTS";
	} else if (selected.length > 0) {
		let tempString = selected.slice(0, 2).map(val => val.label).join(", ");
		if (selected.length > 2) {
			tempString += ` (${selected.length - 2} more)`;
		}
		
		valueString = `${comparisonMap[comparison]}${tempString}`;
	} else {
		valueString = "";
	}
	
	// filter the valid comparisons based on what the developer is allowing
	const activeComparisons = props.comparisons ? validComparisons.filter(val => props.comparisons.includes(val.value)) : undefined;
	
	return (
		<StyledWrapper>
			<GridPrimaryFilter label={props.label} value={valueString} onClick={onClick}/>
			<GridFilterMultiselectDropdown
				key={key}
				anchorEl={anchorEl}
				state={props.state}
				setState={props.setState}
				getOptions={props.getOptions}
				getSelected={props.getSelected}
				comparisons={activeComparisons}
				onClose={onClose}
			/>
		</StyledWrapper>
	);
}

export default GridFilterText;