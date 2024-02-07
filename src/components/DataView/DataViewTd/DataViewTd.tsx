import React, { memo } from "react";
import styled from "styled-components";
import theme from "@root/theme";
import { Property } from "csstype";

import { DataViewTdProps } from "./DataViewTdTypes";

const StyledTd = styled.td`
	height: 40px;
	vertical-align: middle;

	${/* This ensures that the td collapses to it's content size if it doesn't have the .expandCell class */""}
	&:not(.expandCell) {
		width: 1%;
		white-space: nowrap;
	}

	& > div {
		color: ${theme.newColors.almostBlack["100"]};
		font-weight: 400;
	}

	&.bold > div {
		font-weight: 600;
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
`;

function DataViewTd(props: DataViewTdProps) {
	const expandCell = props.expandCell !== undefined ? props.expandCell : false;
	const bold = props.bold !== undefined ? props.bold : false;
	const italic = props.italic !== undefined ? props.italic : false;
	const strikeThrough = props.strikeThrough !== undefined ? props.strikeThrough : false;
	const noWrap = props.noWrap !== undefined ? props.noWrap : false;
	const ellipsis = props.ellipsis !== undefined ? props.ellipsis : false;
	const maxWidth = props.maxWidth !== undefined ? props.maxWidth : undefined;
	const textTransform = (props.textTransform !== undefined ? props.textTransform : undefined) as Property.TextTransform;

	return (
		<StyledTd
			className={`
				${expandCell ? "expandCell" : ""}
				${bold ? "bold" : ""}
				${italic ? "italic" : ""}
				${strikeThrough ? "strikeThrough" : ""}
			`}
			aria-label={props.ariaLabel}
		>
			<div
				className={`
					${noWrap ? "noWrap" : ""}
					${ellipsis ? "ellipsis" : ""}
				`}
				style={{ maxWidth, textTransform }}
				title={ellipsis && typeof props.children === "string" ? props.children : undefined}
			>
				{props.children}
			</div>
		</StyledTd>
	);
}

export default memo(DataViewTd);
