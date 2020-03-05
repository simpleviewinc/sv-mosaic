import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';

import theme from "../utils/theme.js";
import Button from "../components/Button";
import { BodyText } from "../components/Typography";

const LabelWrapper = styled.div`
	display: flex;
	align-items: center;

	& > .icon {
		font-size: 20px;
	}

	& > .dropdownIcon {
		color: ${theme.colors.gray600};
		margin-left: 4px;
		margin-right: -4px;
	}

	& > .removeIcon {
		margin-left: 4px;
		margin-right: -4px;
		font-size: 13px;
		color: black;
		background-color: ${theme.colors.blue}12;
		border-radius: 20px;
		padding: 3px;
	}

	& > .removeIcon:hover {
		background-color: ${theme.colors.blue}45;
	}

	& > .filterLabel {
		font-weight: ${theme.fontWeight.normal};
		margin-right: 8px;
	}

	&.type_optional > * {
		color: ${theme.colors.blue};
	}
`

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
	
	const variant = props.type === "primary" ? "text" : "contained";
	const color = props.type === "primary" ? "black" : "lightBlue";

	const label = (
		<LabelWrapper
			className={`
				type_${props.type}
			`}
		>
			<BodyText className="filterLabel">{props.label}:</BodyText>
			<BodyText className="filterValue">{props.value || "Any"}</BodyText>
			<ExpandMoreIcon className="icon dropdownIcon"/>
			{
				props.type === "optional" &&
				<CloseIcon
					className="icon removeIcon"
					onClick={remove}
				/>
			}
		</LabelWrapper>
	)

	return (
		<Button
			color={color}
			variant={variant}
			size="small"
			onClick={props.onClick}
			label={label}
		/>
	)
}

export default DataViewPrimaryFilter;