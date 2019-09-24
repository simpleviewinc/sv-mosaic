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
	}
	
	& .MuiOutlinedInput-adornedEnd {
		padding-right: 0px;
	}
`;

const validComparisons = ["equals", "contains"];

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
					{ name : "comparison", type : "string" }
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
					enum : validComparisons
				}
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [anchorEl, setAnchorEl] = useState(null);
	const [value, setValue] = useState(props.state.value);
	const [comparison, setComparison] = useState(props.state.comparison || "equals");
	
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
	
	const onKeyPress = function(event) {
		if (event.key === "Enter") {
			onApply();
		}
	}
	
	let InputProps;
	if (props.comparisons) {
		const myComparisons = validComparisons.filter(val => props.comparisons.includes(val));
		const menuItems = myComparisons.map(comparison => {
			return {
				label : comparison,
				onClick : function() {
					setComparison(comparison);
				}
			}
		});
		
		InputProps = {
			endAdornment : (
				<span className="comparisonContainer">
					<Button
						label={comparison}
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
	if (props.state.value === "") {
		valueString = "";
	} else if (props.state.comparison === "contains") {
		valueString = `~${props.state.value}`;
	} else {
		valueString = props.state.value;
	}
	
	return (
		<StyledWrapper>
			<GridPrimaryFilter label={props.label} value={valueString} onClick={onClick}/>
			<GridFilterDropdown
				anchorEl={anchorEl}
				onClose={onClose}
				onApply={onApply}
			>
				<StyledContents>
					<TextField
						autoFocus
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