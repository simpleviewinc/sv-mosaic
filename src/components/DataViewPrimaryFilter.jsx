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
	padding: 6px 12px;
	cursor: pointer;
	border-radius: 4px;
	transition: background-color ${theme.animations.backgroundMs};
	
	&.primary {
		color: ${theme.colors.gray600};
	}
	
	&.primary:hover {
		background: ${theme.colors.gray200};
		transition: color 0.2s ease-out;
	}

	&.primary:active {
		background: ${theme.colors.lightGrayActive};
	}
	
	&.optional {
		color: ${theme.colors.blue};
		background: ${theme.colors.lightBlue};
	}
	
	&.optional:hover {
		background: ${theme.colors.lightBlueAccentHover};
	}

	&.optional:active {
		background: ${theme.colors.lightBlueActive};
	}

	&.optional > .valueBlock > .dropdownIcon {
		color: ${theme.colors.blue};
	}
		
	& > .label {
		margin-right: 8px;
		font-weight: 400;
	}
	
	& > .valueBlock {
		display: inline-flex;
	}
	
	& > .valueBlock > .value {
		font-weight: 600;
	}
	
	& > .valueBlock > .dropdownIcon {
		font-size: 20px;
		color: ${theme.colors.gray600};
	}
	
	&.primary > .valueBlock > .value {
		color: ${theme.colors.gray800};
	}
	
	& > .remove {
		margin-left: 8px;
		font-size: 13px;
		color: black;
		padding: 3px;
		border-radius: 20px;
		background-color: ${theme.colors.lightBlueHover};
		transition: background-color ${theme.animations.backgroundMs};
	}
	
	& > .remove:hover {
		background-color: ${theme.colors.lightBlueAccentHover};
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
			<span className="label">{props.label} </span>
			<span className="valueBlock">
				<span className="value">{props.value || "Any"}</span>
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