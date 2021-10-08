import * as React from 'react';
import { memo } from 'react';
import styled from 'styled-components';
import Col from './Col';

const StyledRow = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
	column-gap: 10px;
`;

const Row = (props) => {
	const {
		row,
		state,
		fieldsDef,
		dispatch
	} = props;

	return (
		<StyledRow>
			{row.map((col, i) => (
				<Col 
					key={i}
					col={col}
					state={state}
					fieldsDef={fieldsDef}
					dispatch={dispatch}
				/>
			))}
		</StyledRow>
	);
};

export default memo(Row);