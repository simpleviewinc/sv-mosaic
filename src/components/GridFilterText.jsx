import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import GridPrimaryFilter from "./GridPrimaryFilter.jsx";
import GridFilterDropdown from "./GridFilterDropdown.jsx";
import Button from "./Button.jsx";
import theme from "../utils/theme.js";

const StyledWrapper = styled.span`
	
`;

const StyledContents = styled.span`
	display: inline-flex;
	
	& .MuiOutlinedInput-root.Mui-focused fieldset {
		border-color: ${theme.colors.blue};
	}
	
	& .comparisonContainer {
		border-left: 1px solid #ccc;
		margin: 5px;
		padding-left: 5px;
		flex-shrink: 0;
	}
	
	& .MuiOutlinedInput-adornedEnd {
		padding-right: 0px;
	}
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
	not_equals : "!= ",
	contains : "~ ",
	not_contains : "!~ ",
	exists : "EXISTS",
	not_exists : "NOT EXISTS"
}

const valueMap = {
	equals : true,
	not_equals : true,
	contains : true,
	not_contains : true,
	exists : false,
	not_exists : false
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
	const [value, setValue] = useState(props.state.value);
	const [comparison, setComparison] = useState(props.state.comparison || "equals");
	const activeComparison = validComparisons.find(val => val.value === comparison);
	
	const onClick = function(event) {
		setAnchorEl(event.currentTarget);
	}
	
	const onClose = function() {
		setAnchorEl(null);
		setValue(props.state.value);
		setComparison(props.state.comparison);
	}
	
	const onChange = function(event) {
		setValue(event.target.value);
	}
	
	const onApply = function() {
		props.setState({
			value : value,
			comparison : comparison
		});
		setAnchorEl(null);
	}
	
	const onClear = function() {
		setValue("");
		setComparison("equals");
	}
	
	const onKeyPress = function(event) {
		if (event.key === "Enter") {
			onApply();
		}
	}
	
	let InputProps;
	if (props.comparisons) {
		const myComparisons = validComparisons.filter(comparison => props.comparisons.includes(comparison.value));
		const menuItems = myComparisons.map(comparison => {
			return {
				label : comparison.label,
				onClick : function() {
					// for exists and not_exists we want to clear the value
					if (valueMap[comparison.value] === false) {
						setValue("");
					}
					
					setComparison(comparison.value);
				}
			}
		});
		
		InputProps = {
			endAdornment : (
				<span className="comparisonContainer">
					<Button
						label={activeComparison.label}
						variant="text"
						color="gray"
						iconPosition="right"
						mIcon={ExpandMoreIcon}
						menuItems={menuItems}
					/>
				</span>
			)
		}
	}
	
	let valueString;
	if (valueMap[comparison] === false) {
		valueString = comparisonMap[comparison];
	} else if (props.state.value === "") {
		valueString = "";
	} else {
		valueString = `${comparisonMap[comparison]}${valueMap[comparison] === true ? props.state.value : "" }`;
	}
	
	const disabled = valueMap[comparison] === false;
	
	return (
		<StyledWrapper>
			<GridPrimaryFilter label={props.label} value={valueString} onClick={onClick}/>
			<GridFilterDropdown
				anchorEl={anchorEl}
				onClose={onClose}
				onApply={onApply}
				onClear={onClear}
			>
				<StyledContents>
					<TextField
						autoFocus
						disabled={disabled}
						placeholder="Filter..."
						margin="dense"
						value={value}
						variant="outlined"
						onChange={onChange}
						onKeyPress={onKeyPress}
						InputProps={InputProps}
					/>
				</StyledContents>
			</GridFilterDropdown>
		</StyledWrapper>
	);
}

export default GridFilterText;