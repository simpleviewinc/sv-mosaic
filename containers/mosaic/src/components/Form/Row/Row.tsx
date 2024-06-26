import * as React from "react";
import { memo, useMemo } from "react";

import { RowPropTypes } from "./RowTypes";
import { StyledRow } from "./RowStyled";

// Components
import Col from "../Col";
import { useWrappedToggle } from "@root/utils";

const Row = (props: RowPropTypes) => {
	const {
		row,
		rowIdx,
		state,
		fieldsDef,
		sectionIdx,
		gridMinWidth,
		spacing,
		methods,
		skeleton,
	} = props;

	/**
	 * TODO We're already performing this field search within ColField, so it's
	 * a waste to do it here as well. It's worth only doing it here and
	 * passing the field defs down
	 */
	const fieldDefsFlattened = useMemo(
		() => row.flat().flat().map(fieldName => fieldsDef.find((fieldDef) => fieldName === fieldDef.name)),
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
						state={state}
						fieldsDef={fieldsDef}
						colsInRow={row.length}
						spacing={spacing}
						methods={methods}
						skeleton={skeleton}
					/>
				);
			})}
		</StyledRow>
	);
};

export default memo(Row);
