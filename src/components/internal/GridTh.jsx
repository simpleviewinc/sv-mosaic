import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import theme from "../../utils/theme.js";

const Th = styled.th`
	padding: 8px 0px 8px 0px;
	
	&.sortable {
		cursor: pointer;
	}
`

const StyledIcon = styled(FontAwesomeIcon)`
	font-size: 12px;
	margin-left: 5px;
	visibility: hidden;
	${Th}:hover & {
		visibility: visible;
		color: ${theme.colors.lightGray};
	}
	
	${Th}:hover &.active, ${Th} &.active {
		visibility: visible;
		color: black;
	}
`

function GridTh(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{ name : "sortable", type : "boolean" },
			{ name : "active", type : "boolean" }
		],
		allowExtraKeys : false
	});
	
	const sortControl = props.sortable && <StyledIcon icon={faArrowDown} className={props.active ? "active" : ""}></StyledIcon>;
	
	return (
		<Th className={props.sortable ? "sortable" : "" }>
			{props.children}
			{sortControl}
		</Th>
	)
}

export default GridTh;