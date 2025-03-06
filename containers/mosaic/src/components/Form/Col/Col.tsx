import * as React from "react";
import { memo } from "react";

import type { ColPropsTypes } from "./ColTypes";
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
		spacing,
		methods,
		skeleton,
		path,
	} = props;

	const gridStart = ((FORM_GRID_SEGMENTS / colsInRow) * colIdx) + 1;
	const gridEnd = gridStart + (FORM_GRID_SEGMENTS / colsInRow);

	return (
		<StyledCol data-layout="column" $gridColumn={`${gridStart} / ${gridEnd}`}>
			{col.map((field) => (
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
