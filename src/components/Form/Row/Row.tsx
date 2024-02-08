import * as React from "react";
import { memo } from "react";

import { RowPropTypes } from "./RowTypes";
import { StyledRow } from "./RowStyled";

// Components
import Col from "../Col";

const Row = (props: RowPropTypes) => {
	const {
		row,
		rowIdx,
		state,
		fieldsDef,
		dispatch,
		sectionIdx,
		gridMinWidth,
		spacing,
		methods,
	} = props;

	return (
		<StyledRow data-layout="row" $columns={row.length} $gridMinWidth={gridMinWidth} $spacing={spacing}>
			{row.map((col, i) => {
				return (
					<Col
						key={`col-${i}`}
						colIdx={i}
						rowIdx={rowIdx}
						sectionIdx={sectionIdx}
						col={col}
						state={state}
						fieldsDef={fieldsDef}
						dispatch={dispatch}
						colsInRow={row.length}
						spacing={spacing}
						methods={methods}
					/>
				);
			})}
		</StyledRow>
	);
};

export default memo(Row);
