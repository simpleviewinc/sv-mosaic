import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import jsvalidator from "jsvalidator";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from "../Button.jsx";
import GridFilterDropdownButtons from "../GridFilterDropdownButtons.jsx";
import theme from "../../utils/theme.js";

const StyledContents = styled.div`
	& > .inputRow {
		display: flex;
		align-items: center;
	}
	
	& > .inputRow > .disabled {
		background: #eee;
	}
	
	& > .inputRow > .comparisonButton {
		margin-top: 8px;
		margin-bottom: 4px;
		margin-left: 10px;
	}
	
	& .MuiOutlinedInput-root.Mui-focused fieldset {
		border-color: ${theme.colors.blue};
	}
	
	& .comparisonContainer {
		border-left: 1px solid #ccc;
		margin: 5px;
		padding-left: 5px;
		flex-shrink: 0;
	}
`;

function GridFilterTextDropdownContent(props) {
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
				name : "comparison",
				type : "string",
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
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const [state, setState] = useState({
		value : props.state.value,
		comparison : props.comparison
	});
	
	const {
		value,
		comparison
	} = state;
	
	const activeComparison = props.comparisons ? props.comparisons.find(val => val.value === comparison) : undefined;
	
	const onApply = function() {
		props.setState({
			value : value,
			comparison : comparison
		});
		props.onClose();
	}
	
	const onClear = function() {
		setState({
			...state,
			value : "",
			comparison : "equals"
		});
	}
	
	const onInputChange = function(event) {
		setState({
			...state,
			value : event.target.value
		});
	}
	
	const onKeyPress = function(event) {
		if (event.key === "Enter") {
			onApply();
		}
	}
	
	const disabled = ["exists", "not_exists"].includes(comparison);
	
	let comparisonButton;
	if (props.comparisons) {
		const menuItems = props.comparisons.map(comparison => {
			return {
				label : comparison.label,
				onClick : function() {
					const stateChange = {
						...state
					};
					
					// for exists and not_exists we want to clear the value
					if (["exists", "not_exists"].includes(comparison.value) === true) {
						stateChange.value = "";
					}
					
					stateChange.comparison = comparison.value;
					
					setState(stateChange);
				}
			}
		});
		
		comparisonButton = (
			<Button
				className="comparisonButton"
				label={activeComparison.label}
				variant="text"
				color="gray"
				iconPosition="right"
				mIcon={ExpandMoreIcon}
				menuItems={menuItems}
			/>
		);
	}
	
	return (
		<StyledContents>
			<div className="inputRow">
				<TextField
					autoFocus
					className={ disabled ? "disabled" : "" }
					disabled={disabled}
					placeholder="Filter..."
					margin="dense"
					value={value}
					variant="outlined"
					onChange={onInputChange}
					onKeyPress={onKeyPress}
				/>
				{comparisonButton}
			</div>
			<GridFilterDropdownButtons onApply={onApply} onClear={onClear} onCancel={props.onClose}/>
		</StyledContents>
	)
}

export default GridFilterTextDropdownContent;