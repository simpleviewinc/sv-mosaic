import React, { memo } from "react";
import styled from "styled-components";

const StyledTd = styled.td`
	height: 40px;

	${/* This ensures that the td collapses to it's content size if it doesn't have the .expandCell class */""}
	&:not(.expandCell) {
		width: 1%;
		white-space: nowrap;
	}

	${/* If it has the .paddingRight class, add padding to the right of the cell */""}
	&.paddingRight:not(:last-child) {
		padding-right: 15px;
	}
`

function GridTd(props) {
	const expandCell = props.expandCell !== undefined ? props.expandCell : true;
	const paddingRight = props.paddingRight !== undefined ? props.paddingRight : true;

	return (
		<StyledTd
			className={`
				${expandCell ? "expandCell" : ""}
				${paddingRight ? "paddingRight" : ""}
			`}
		>
			<div>
				{props.children}
			</div>
		</StyledTd>
	)
}

export default memo(GridTd);