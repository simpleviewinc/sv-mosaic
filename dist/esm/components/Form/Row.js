import * as React from "react";
import { memo } from "react";
import styled from "styled-components";
// Components
import Col from "./Col";
const StyledRow = styled.div `
	display: flex;
	margin: 0px -20px;
`;
const Row = (props) => {
    const { row, rowIdx, state, fieldsDef, dispatch, sectionIdx } = props;
    return (React.createElement(StyledRow, null, row.map((col, i) => {
        return (React.createElement(Col, { key: `col-${i}`, colIdx: i, rowIdx: rowIdx, sectionIdx: sectionIdx, col: col, state: state, fieldsDef: fieldsDef, dispatch: dispatch, colsInRow: row.length }));
    })));
};
export default memo(Row);
