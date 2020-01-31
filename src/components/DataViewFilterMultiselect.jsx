import React, { useState, useEffect } from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import DataViewPrimaryFilter from "./DataViewPrimaryFilter.jsx";
import GridFilterMultiselectDropdownContent from "./internal/GridFilterMultiselectDropdownContent.jsx";
import DataViewFilterDropdown from "./DataViewFilterDropdown.jsx";

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

function DataViewFilterMultiselect(props) {
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
	
	const [state, setState] = useState({
		anchorEl : null,
		selected : [],
		dropdownOpen : false
	});
	
	const value = props.data.value || [];
	const comparison = props.data.comparison || "in";
	
	useEffect(() => {
		async function fetchData() {
			const selected = await props.args.getSelected(value);
			
			setState({
				...state,
				selected
			});
		}
		
		fetchData();
	}, [props.data]);
	
	const onClick = function(event) {
		setState({
			...state,
			anchorEl : event.currentTarget
		});
	}
	
	const onClose = function() {
		setState({
			...state,
			anchorEl : null
		});
	}
	
	const onEntered = function() {
		setState({
			...state,
			dropdownOpen : true
		});
	}
	
	const onExited = function() {
		setState({
			...state,
			dropdownOpen : false
		});
	}
	
	const onApply = function(data) {
		props.onChange(data);
		onClose();
	}
	
	let valueString;
	if (comparison === "exists") {
		valueString = "EXISTS";
	} else if (comparison === "not_exists") {
		valueString = "NOT EXISTS";
	} else if (state.selected.length > 0) {
		let tempString = state.selected.slice(0, 2).map(val => val.label).join(", ");
		if (state.selected.length > 2) {
			tempString += ` (${state.selected.length - 2} more)`;
		}
		
		valueString = `${comparisonMap[comparison]}${tempString}`;
	} else {
		valueString = "";
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
				anchorEl={state.anchorEl}
				onClose={onClose}
				onEntered={onEntered}
				onExited={onExited}
			>
				<GridFilterMultiselectDropdownContent
					value={value}
					comparison={comparison}
					comparisons={activeComparisons}
					selected={state.selected}
					getOptions={props.args.getOptions}
					isOpen={state.dropdownOpen}
					onApply={onApply}
					onClose={onClose}
				/>
			</DataViewFilterDropdown>
		</StyledWrapper>
	);
}

export default DataViewFilterMultiselect;