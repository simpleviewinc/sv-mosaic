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
	&.paddingRight {
		padding-right: 15px;
	}

	&.paddingLeft {
		padding-left: 15px;
	}
`

function GridTd(props) {
	const expandCell = props.expandCell !== undefined ? props.expandCell : false;
	const paddingRight = props.paddingRight !== undefined ? props.paddingRight : false;
	const paddingLeft = props.paddingLeft !== undefined ? props.paddingLeft : false;

	return (
		<StyledTd
			className={`
				${expandCell ? "expandCell" : ""}
				${paddingRight ? "paddingRight" : ""}
				${paddingLeft ? "paddingLeft" : ""}
			`}
		>
			<div>
				{props.children}
			</div>
		</StyledTd>
	)
}

export default memo(GridTd);