import React, { memo } from "react";
import styled from "styled-components";
import theme from "@root/theme";

import type { DataViewTdProps } from "./DataViewTdTypes";
import testIds from "@root/utils/testIds";

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

function DataViewTd({
	ariaLabel,
	expandCell = false,
	bold = false,
	italic = false,
	strikeThrough = false,
	noWrap = false,
	ellipsis = false,
	maxWidth,
	textTransform,
	...props
}: DataViewTdProps) {
	return (
		<StyledTd
			className={`
				${expandCell ? "expandCell" : ""}
				${bold ? "bold" : ""}
				${italic ? "italic" : ""}
				${strikeThrough ? "strikeThrough" : ""}
			`}
			aria-label={ariaLabel}
			{...props}
		>
			<div
				className={`
					${noWrap ? "noWrap" : ""}
					${ellipsis ? "ellipsis" : ""}
				`}
				style={{ maxWidth, textTransform }}
				title={ellipsis && typeof props.children === "string" ? props.children : undefined}
				data-testid={testIds.DATA_VIEW_TD_INNER}
			>
				{props.children}
			</div>
		</StyledTd>
	);
}

export default memo(DataViewTd);
