import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import IconButton from "@material-ui/core/IconButton";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import theme from "../utils/theme.js";

const StyledWrapper = styled.div`
	font-family: ${theme.fontFamily};
	font-size: 14px;
	display: inline-flex;
	padding: 8px;
	cursor: pointer;
	border-radius: 4px;
	
	&:hover {
		background: ${theme.colors.blue}13;
	}
	
	& > .label {
		color: ${theme.colors.lightGray};
		margin-right: 8px;
	}
	
	& > .valueBlock {
		display: inline-flex;
		align-items: center;
	}
	
	& > .valueBlock > .dropdownIcon {
		font-size: 18px;
	}
	
	& > .valueBlock > .value {
		font-weight: bold;
	}
`;

function GridPrimaryFilter(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{ name : "label", type : "string", required : true },
			{ name : "value", type : "string" },
			{ name : "onClick", type : "function", required : true }
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	return (
		<StyledWrapper onClick={props.onClick}>
			<span className="label">{props.label}: </span>
			<span className="valueBlock">
				<span className="value">{props.value || "any"}</span>
				<ExpandMoreIcon className="dropdownIcon"/>
			</span>
		</StyledWrapper>
	)
}

export default GridPrimaryFilter;