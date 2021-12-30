import * as React from 'react';
import { memo } from 'react';
import styled from 'styled-components';
import Col from './Col';

const StyledRow = styled.div`
	${pr => pr.formType === 'modal' ?
		`
			display: flex;
			flex-wrap: wrap;
		`
		:
		`
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
			column-gap: 10px;
		`
	}
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
				/>
			))}
		</StyledRow>
	);
};

export default memo(Row);