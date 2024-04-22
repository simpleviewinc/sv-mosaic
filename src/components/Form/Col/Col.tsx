import * as React from "react";
import { memo } from "react";

import { ColPropsTypes } from "./ColTypes";
import { StyledCol } from "./ColStyled";
import Field from "../Field";

const Col = (props: ColPropsTypes) => {
	const {
		col,
		state,
		fieldsDef,
		colsInRow,
		colIdx,
		rowIdx,
		sectionIdx,
		spacing,
		methods,
		skeleton,
	} = props;

	return (
		<StyledCol data-layout="column" $colsInRow={colsInRow}>
			{col.map((field) => (
				<Field
					key={field}
					fieldName={field}
					fieldsDef={fieldsDef}
					state={state}
					colIdx={colIdx}
					colsInRow={colsInRow}
					rowIdx={rowIdx}
					sectionIdx={sectionIdx}
					spacing={spacing}
					methods={methods}
					skeleton={skeleton}
				/>
			))}
		</StyledCol>
	);
};

export default memo(Col);
