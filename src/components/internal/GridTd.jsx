import React, { memo } from "react";
import styled from "styled-components";

import { BodyText } from "../Typography";

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

	&.bold {
		font-weight: bold;
	}

	&.italic {
		font-style: italic;
	}

	&.strikeThrough {
		text-decoration-line: line-through;
	}

	& > div.noWrap {
		white-space: nowrap;
	}

	& > div.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`

function GridTd(props) {
	const expandCell = props.expandCell !== undefined ? props.expandCell : false;
	const paddingRight = props.paddingRight !== undefined ? props.paddingRight : false;
	const paddingLeft = props.paddingLeft !== undefined ? props.paddingLeft : false;
	const bold = props.bold !== undefined ? props.bold : false;
	const italic = props.italic !== undefined ? props.italic : false;
	const strikeThrough = props.strikeThrough !== undefined ? props.strikeThrough : false;
	const noWrap = props.noWrap !== undefined ? props.noWrap : false;
	const ellipsis = props.ellipsis !== undefined ? props.ellipsis : false;
	const maxWidth = props.maxWidth !== undefined ? props.maxWidth : undefined;
	const textTransform = props.textTransform !== undefined ? props.textTransform : undefined;

	return (
		<StyledTd
			className={`
				${expandCell ? "expandCell" : ""}
				${paddingRight ? "paddingRight" : ""}
				${paddingLeft ? "paddingLeft" : ""}
				${bold ? "bold" : ""}
				${italic ? "italic" : ""}
				${strikeThrough ? "strikeThrough" : ""}
			`}
		>
			<BodyText
				as="div"
				className={`
					${noWrap ? "noWrap" : ""}
					${ellipsis ? "ellipsis" : ""}
				`}
				style={{ maxWidth, textTransform }}
				title={ellipsis ? props.children : undefined}
			>
				{props.children}
			</BodyText>
		</StyledTd>
	)
}

export default memo(GridTd);