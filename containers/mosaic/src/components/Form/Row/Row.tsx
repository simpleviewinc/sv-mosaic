import React, { memo, useContext, useMemo } from "react";

import type { RowPropTypes } from "./RowTypes";
import { StyledRow } from "./RowStyled";

// Components
import Col from "../Col/Col";
import { useWrappedToggle } from "@root/utils";
import { FormContext } from "../FormContext";

const Row = (props: RowPropTypes) => {
	const {
		row,
		rowIdx,
		fieldsDef,
		sectionIdx,
		gridMinWidth,
		spacing,
		methods,
		skeleton,
		path,
	} = props;

	const { state } = useContext(FormContext);

	/**
	 * TODO We're already performing this field search within ColField, so it's
	 * a waste to do it here as well. It's worth only doing it here and
	 * passing the field defs down
	 */
	const fieldDefsFlattened = useMemo(
		() => row
			.flat()
			.map(column => typeof column === "string" ? column : column.names)
			.flat()
			.map(fieldName => fieldsDef.find((fieldDef) => fieldName === fieldDef.name)),
		[fieldsDef, row],
	);
	const shownFields = useWrappedToggle(fieldDefsFlattened, state, "show", true);

	if (!shownFields.length) {
		return null;
	}

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
						fieldsDef={fieldsDef}
						colsInRow={row.length}
						gridMinWidth={gridMinWidth}
						spacing={spacing}
						methods={methods}
						skeleton={skeleton}
						path={path}
					/>
				);
			})}
		</StyledRow>
	);
};

export default memo(Row);
