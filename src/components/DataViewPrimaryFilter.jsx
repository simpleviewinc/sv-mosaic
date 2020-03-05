import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import IconButton from "@material-ui/core/IconButton";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';

import theme from "../utils/theme.js";

const StyledWrapper = styled.div`
	font-family: ${theme.fontFamily};
	display: inline-flex;
	align-items: center;
	padding: 6px;
	cursor: pointer;
	border-radius: 4px;
	transition: background-color ${theme.animations.backgroundMs};
	
	&.primary {
		color: ${theme.colors.black};
	}
	
	&.primary:hover {
		background: ${theme.colors.gray200};
	}
	
	&.optional {
		color: ${theme.colors.blue};
		background: ${theme.colors.blue}13;
	}
	
	&.optional:hover {
		background: ${theme.colors.blue}23;
	}
	
	& > .label {
		margin-right: 8px;
		font-weight: 500;
	}
	
	& > .valueBlock {
		display: inline-flex;
		align-items: center;
	}
	
	& > .valueBlock > .value {
		font-weight: bold;
	}
	
	& > .valueBlock > .dropdownIcon {
		font-size: 20px;
	}
	
	&.primary > .valueBlock > .value {
		color: black;
	}
	
	& > .remove {
		margin-left: 8px;
		font-size: 13px;
		color: black;
		padding: 3px;
		border-radius: 20px;
		transition: background-color ${theme.animations.backgroundMs};
	}
	
	& > .remove:hover {
		background-color: ${theme.colors.blue}45;
	}
`;

function DataViewPrimaryFilter(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{ name : "label", type : "string", required : true },
			{ name : "value", type : "string" },
			{ name : "type", type : "string", enum : ["primary", "optional"], required : true },
			{ name : "onRemove", type : "function", required : true },
			{ name : "onClick", type : "function", required : true }
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const remove = function(e) {
		// stops the outer wrapping click handler from firing
		e.stopPropagation();
		
		// call the passed in onRemove function
		props.onRemove();
	}
	
	return (
		<StyledWrapper
			onClick={props.onClick}
			className={`
				${props.type}
			`}
		>
			<span className="label">{props.label}: </span>
			<span className="valueBlock">
				<span className="value">{props.value || "any"}</span>
				<ExpandMoreIcon className="dropdownIcon"/>
			</span>
			{
				props.type === "optional" &&
				<CloseIcon
					className="remove"
					onClick={remove}
				/>
			}
		</StyledWrapper>
	)
}

export default DataViewPrimaryFilter;