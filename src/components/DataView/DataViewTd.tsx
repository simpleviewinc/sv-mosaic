import React, { memo } from "react";
import { DraggableProvided } from "react-beautiful-dnd";
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
		padding-right: 12px;
	}

	&.paddingLeft {
		padding-left: 12px;
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
interface DataViewTdProps {
	expandCell?: any;
	paddingRight?: any;
	paddingLeft?: any;
	bold?: any;
	italic?: any;
	strikeThrough?: any;
	noWrap?: any;
	ellipsis?: any;
	maxWidth?: any;
	textTransform?: any;
	children?: any;
	className?: any;
	draggableProvider?: DraggableProvided;
}

//TODO PROPS
function DataViewTd(props: DataViewTdProps) {
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
			{...props?.draggableProvider?.dragHandleProps}
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

export default memo(DataViewTd);
