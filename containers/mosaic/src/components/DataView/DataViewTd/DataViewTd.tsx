import React, { memo } from "react";

import type { DataViewTdProps } from "./DataViewTdTypes";
import testIds from "@root/utils/testIds";
import { StyledTd } from "./DataViewTd.styled";

function DataViewTd({
	ariaLabel,
	expandCell = false,
	style: providedStyle,
	...props
}: DataViewTdProps) {
	const {
		bold = false,
		italic = false,
		strikeThrough = false,
		noWrap = false,
		ellipsis = false,
		...style
	} = providedStyle || {};

	return (
		<StyledTd
			className={`
				${expandCell ? "expandCell" : ""}
				${bold ? "bold" : ""}
				${italic ? "italic" : ""}
				${strikeThrough ? "strikeThrough" : ""}
			`}
			aria-label={ariaLabel}
			style={style}
			{...props}
		>
			<div
				className={`
					${noWrap ? "noWrap" : ""}
					${ellipsis ? "ellipsis" : ""}
				`}
				title={ellipsis && typeof props.children === "string" ? props.children : undefined}
				data-testid={testIds.DATA_VIEW_TD_INNER}
			>
				{props.children}
			</div>
		</StyledTd>
	);
}

export default memo(DataViewTd);
