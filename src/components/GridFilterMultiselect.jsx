import React, { useState, useEffect } from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import GridPrimaryFilter from "./GridPrimaryFilter.jsx";
import GridFilterMultiselectDropdownContent from "./internal/GridFilterMultiselectDropdownContent.jsx";
import GridFilterDropdown from "./GridFilterDropdown.jsx";

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

function GridFilterMultiselect(props) {
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
					{
						name : "value",
						type : "array",
						schema : {
							type : "string"
						}
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
				name : "type",
				type : "string",
				required : true
			},
			{
				name : "args",
				type : "object",
				schema : [
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
						name : "comparisons",
						type : "array",
						schema : {
							type : "string",
							enum : validComparisonNames
						}
					}
				],
				allowExtraKeys : false,
				required : true
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
	const [selected, setSelected] = useState([]);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const value = props.data.value || [];
	const comparison = props.data.comparison || "in";
	
	useEffect(() => {
		async function fetchData() {
			const selected = await props.args.getSelected(value);
			setSelected(selected);
		}
		
		fetchData();
	}, [props.data]);
	
	const onClick = function(event) {
		setAnchorEl(event.currentTarget);
	}
	
	const onClose = function() {
		setAnchorEl(null);
	}
	
	const onEntered = function() {
		setDropdownOpen(true);
	}
	
	const onExited = function() {
		setDropdownOpen(false);
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
				onEntered={onEntered}
				onExited={onExited}
			>
				<GridFilterMultiselectDropdownContent
					value={value}
					comparison={comparison}
					comparisons={activeComparisons}
					selected={selected}
					getOptions={props.args.getOptions}
					isOpen={dropdownOpen}
					onChange={props.onChange}
					onClose={onClose}
				/>
			</GridFilterDropdown>
		</StyledWrapper>
	);
}

export default GridFilterMultiselect;