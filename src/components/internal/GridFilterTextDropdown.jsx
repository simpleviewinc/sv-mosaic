import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import jsvalidator from "jsvalidator";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from "../Button.jsx";
import GridFilterDropdown from "../GridFilterDropdown.jsx";
import theme from "../../utils/theme.js";

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

function GridFilterTextDropdown(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "state",
				type : "object",
				required : true
			},
			{
				name : "setState",
				type : "function",
				required : true
			},
			{
				name : "comparisons",
				type : "array"
			},
			{
				name : "onClose",
				type : "function",
				required : true
			},
			{
				name : "anchorEl",
				type : "object"
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [value, setValue] = useState(props.state.value);
	const [comparison, setComparison] = useState(props.state.comparison || "equals");
	const activeComparison = props.comparisons ? props.comparisons.find(val => val.value === comparison) : undefined;
	
	const onApply = function() {
		props.setState({
			value : value,
			comparison : comparison
		});
		props.onClose();
	}
	
	const onClear = function() {
		setValue("");
		setComparison("equals");
	}
	
	const onInputChange = function(event) {
		setValue(event.target.value);
	}
	
	const onKeyPress = function(event) {
		if (event.key === "Enter") {
			onApply();
		}
	}
	
	const disabled = ["exists", "not_exists"].includes(comparison);
	
	let InputProps;
	if (props.comparisons) {
		const menuItems = props.comparisons.map(comparison => {
			return {
				label : comparison.label,
				onClick : function() {
					// for exists and not_exists we want to clear the value
					if (["exists", "not_exists"].includes(comparison.value) === true) {
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
	
	return (
		<GridFilterDropdown
			anchorEl={props.anchorEl}
			onClose={props.onClose}
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
					onChange={onInputChange}
					onKeyPress={onKeyPress}
					InputProps={InputProps}
				/>
			</StyledContents>
		</GridFilterDropdown>
	)
}

export default GridFilterTextDropdown;