import * as React from "react";
import { memo } from "react";

import { ColPropsTypes } from "./ColTypes";
import { StyledCol } from "./ColStyled";
import ColField from "./ColField";

const Col = (props: ColPropsTypes) => {
	const {
		col,
		state,
		fieldsDef,
		dispatch,
		colsInRow,
		colIdx,
		rowIdx,
		sectionIdx,
		spacing,
		methods,
	} = props;

	return (
		<StyledCol data-layout="column" $colsInRow={colsInRow}>
			{col.map((field) => (
				<ColField
					key={field}
					dispatch={dispatch}
					fieldName={field}
					fieldsDef={fieldsDef}
					state={state}
					colIdx={colIdx}
					colsInRow={colsInRow}
					rowIdx={rowIdx}
					sectionIdx={sectionIdx}
					spacing={spacing}
					methods={methods}
				/>
			))}
		</StyledCol>
	);
};

export default memo(Col);
