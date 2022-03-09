import * as React from 'react';
import { memo } from 'react';
import theme from '@root/theme';
import styled from 'styled-components';
import { FieldDef } from '@root/components/Field';

// Components
import Row from './Row';

const StyledSection = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 4px); //LAYOUT: Could be reused.
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
	font-size: 16px;
	font-family: ${theme.fontFamily};
`

const StyledRows = styled.div`
	display: grid;
	row-gap: 20px;
	margin: 0px;
	padding: ${pr => !pr.hasTitle ? '0px' : '0px 40px 50px 40px'} ;
`;

const StyledTitle = styled.h1`
	font-size: 20px;
	font-family: ${theme.fontFamily};
	font-weight: 500;
`;

interface SectionPropTypes {
	title: string;
	description: string | JSX.Element;
	fieldsDef: FieldDef[];
	fieldsLayoutPos: (string | FieldDef)[][][]
	dispatch: any;
	state: any;
}

const Section = (props: SectionPropTypes) => {
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
			{title && <StyledTitle>{title}</StyledTitle>}
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
