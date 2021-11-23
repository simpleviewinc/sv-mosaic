import theme from '@root/theme';
import * as React from 'react';
import { memo } from 'react';
import styled from 'styled-components';

import Row from './Row';

const StyledSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border: ${pr => !pr.hasTitle ? '2px solid transparent' : `2px solid ${theme.colors.grayHover}`};
	margin-bottom: ${pr => !pr.hasTitle ? '0px' : '40px'};

	& h1 {
		background-color: ${theme.colors.grayHover}
		margin: 0px;
		padding: 16px 40px;
	}
`;

const StyledDescription = styled.p`
	height: 46px;
	margin: 0px;
	padding: 50px 40px 20px 40px;
`

const StyledRows = styled.div`
	display: grid;
	row-gap: 20px;
	margin: 0px;
	padding: ${pr => !pr.hasTitle ? '0px' : '0px 40px 50px 40px'} ;
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
		<StyledSection hasTitle={title} className='section' id={title}>
			{title && <h1>{title}</h1>}
			{description && <StyledDescription>{description}</StyledDescription>}
			{fieldsLayoutPos &&
				<StyledRows hasTitle={title}>
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