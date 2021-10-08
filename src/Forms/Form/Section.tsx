import * as React from 'react';
import { memo } from 'react';
import styled from 'styled-components';

import Row from './Row';

const StyledSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const StyledRows = styled.div`
	display: grid;
	row-gap: 20px;
`;

const Section = (props) => {
	const {
		title,
		description,
		fieldsDef,
		fieldsLayoutPos,
		dispatch,
		state,
	} = props;

	return (
		<StyledSection>
			{title && <h1>{title}</h1>}
			{description && <p>{description}</p>}
			{fieldsLayoutPos &&
				<StyledRows>
					{fieldsLayoutPos.map((row, i) => (
						<Row
							key={i}
							row={row}
							state={state}
							fieldsDef={fieldsDef}
							dispatch={dispatch}
						/>
					))}
				</StyledRows>
			}
		</StyledSection>
	);
};

export default memo(Section);