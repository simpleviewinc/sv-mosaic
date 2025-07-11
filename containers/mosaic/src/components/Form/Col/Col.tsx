import * as React from "react";
import { memo } from "react";

import type { ColLayout, ColPropsTypes } from "./ColTypes";
import { StyledCol } from "./ColStyled";
import Field from "../Field/Field";
import { FORM_GRID_SEGMENTS } from "@root/constants/form";

const Col = (props: ColPropsTypes) => {
	const {
		col,
		fieldsDef,
		colsInRow,
		colIdx,
		rowIdx,
		sectionIdx,
		gridMinWidth,
		spacing,
		methods,
		skeleton,
		path,
	} = props;

	const { span = "auto", names }: ColLayout = Array.isArray(col) ? {
		span: "auto",
		names: col,
	} : col;

	const gridStart = ((FORM_GRID_SEGMENTS / colsInRow) * colIdx) + 1;
	const gridEnd = gridStart + (span === "auto" ? FORM_GRID_SEGMENTS / colsInRow : span);

	return (
		<StyledCol
			className="Mos-FormColumn"
			data-layout="column"
			$gridColumn={`${gridStart} / ${gridEnd}`}
			$gridMinWidth={gridMinWidth}
		>
			{names.map((field) => (
				<Field
					key={field}
					fieldName={field}
					fieldsDef={fieldsDef}
					colIdx={colIdx}
					colsInRow={colsInRow}
					rowIdx={rowIdx}
					sectionIdx={sectionIdx}
					spacing={spacing}
					methods={methods}
					skeleton={skeleton}
					path={path}
				/>
			))}
		</StyledCol>
	);
};

export default memo(Col);
