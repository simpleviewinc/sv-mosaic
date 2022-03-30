import { FieldDef } from "@root/components/Field";
import * as React from "react";
import { memo } from "react";
import styled from "styled-components";

// Components
import Col from "./Col";

const StyledRow = styled.div`
	display: flex;
	margin: 0px -20px;
`;

interface RowPropTypes {
	row: (string | FieldDef)[][];
	state: any;
	fieldsDef: FieldDef[];
	dispatch: any;
}

const Row = (props: RowPropTypes) => {
	const { row, state, fieldsDef, dispatch } = props;

	return (
		<StyledRow>
			{row.map((col, i) => (
				<Col
					key={i}
					col={col}
					state={state}
					fieldsDef={fieldsDef}
					dispatch={dispatch}
					colsInRow={row.length}
				/>
			))}
		</StyledRow>
	);
};

export default memo(Row);
