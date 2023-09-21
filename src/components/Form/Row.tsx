import { FieldDef } from "@root/components/Field";
import * as React from "react";
import { memo } from "react";
import styled from "styled-components";

// Components
import Col from "./Col";
import { containerQuery } from "@root/utils/css";

const StyledRow = styled.div<{$columns?: number}>`
	${({$columns}) => $columns && `
		display: grid;
		grid-template-columns: repeat(1,minmax(0,1fr));
		gap: 24px 40px;

		${containerQuery("md")} {
			grid-template-columns: repeat(${$columns > 1 ? 2 : 1},minmax(0,1fr));
		}
		${containerQuery("lg")} {
			grid-template-columns: repeat(${$columns},minmax(0,1fr));
		}
	`}
`;

interface RowPropTypes {
	row: string[][];
	state: any;
	fieldsDef: FieldDef[];
	dispatch: any;
	rowIdx?: number;
	sectionIdx?: number;
}

const Row = (props: RowPropTypes) => {
	const { row, rowIdx, state, fieldsDef, dispatch, sectionIdx } = props;

	return (
		<StyledRow data-layout="row" $columns={row.length}>
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
					/>
				)
			})}
		</StyledRow>
	);
};

export default memo(Row);
