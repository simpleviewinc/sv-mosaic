import * as React from 'react';
import { memo } from 'react';
import styled from 'styled-components';
import Col from './Col';

const StyledRow = styled.div`
	display: flex;
	margin: 0px -20px;
`;

const Row = (props) => {
	const {
		row,
		state,
		fieldsDef,
		dispatch,
		formType,
	} = props;

	return (
		<StyledRow formType={formType}>
			{row.map((col, i) => (
				<Col
					key={i}
					col={col}
					state={state}
					fieldsDef={fieldsDef}
					dispatch={dispatch}
					formType={formType}
					colsInRow={row.length}
				/>
			))}
		</StyledRow>
	);
};

export default memo(Row);