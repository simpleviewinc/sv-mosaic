import * as React from "react";
import { memo, forwardRef } from "react";
import theme from "@root/theme";
import styled from "styled-components";
import { FieldDef } from "@root/components/Field";

// Components
import Row from "./Row";

const StyledSection = styled.div`
	scroll-margin-top: 60px;
	display: flex;
	flex-direction: column;
	width: calc(100% - 4px); //LAYOUT: Could be reused.
	border: ${pr => !pr.hasTitle ? "2px solid transparent" : `2px solid ${theme.colors.grayHover}`};
	margin-bottom: ${pr => !pr.hasTitle ? "0px" : "40px"};

	& h1 {
		background-color: ${theme.colors.grayHover};
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
	padding: ${pr => !pr.hasTitle ? "0px" : "0px 40px 50px 40px"} ;
`;

const StyledTitle = styled.h1`
	font-size: 20px;
	font-family: ${theme.fontFamily};
	font-weight: 500;
`;

interface SectionPropTypes {
	title: string;
	sectionIdx: number;
	description: string | JSX.Element;
	fieldsDef: FieldDef[];
	rows: string[][][];
	dispatch: any;
	state: any;
}

const Section = forwardRef((props: SectionPropTypes, ref) => {
	const {
		title,
		description,
		fieldsDef,
		rows,
		dispatch,
		sectionIdx,
		state
	} = props;

	return (
		<StyledSection ref={ref} hasTitle={title} id={sectionIdx}>
			{title && <StyledTitle>{title}</StyledTitle>}
			{description && <StyledDescription>{description}</StyledDescription>}
			{rows && (
				<StyledRows hasTitle={title}>
					{rows.map((row, i) => (
						<Row
							key={`row-${i}`}
							row={row}
							rowIdx={i}
							sectionIdx={sectionIdx}
							state={state}
							fieldsDef={fieldsDef}
							dispatch={dispatch}
						/>
					))}
				</StyledRows>
			)}
		</StyledSection>
	);
});

Section.displayName = "Section";

export default memo(Section);
