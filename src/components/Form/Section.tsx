import * as React from "react";
import { memo, forwardRef } from "react";
import theme from "@root/theme";
import styled from "styled-components";
import { FieldDef } from "@root/components/Field";

// Components
import Row from "./Row";

// Types
import { ViewType } from "@root/forms/TopComponent";

const StyledSection = styled.div`
	scroll-margin-top: 60px;
	display: flex;
	flex-direction: column;
	width: calc(100% - 4px); //LAYOUT: Could be reused.
	border: ${pr => !pr.hasTitle ? "none" : `2px solid ${theme.colors.grayHover}`};
	margin-bottom: ${pr => !pr.hasTitle ? "0px" : "40px"};

	& h1 {
		background-color: ${theme.colors.grayHover};
		margin: 0px;
		padding: 16px 40px;
	}
`;

const StyledDescription = styled.p`
	margin: 30px 40px 0px 40px;
	font-size: 16px;
	font-family: ${theme.fontFamily};
`

const StyledRows = styled.div`
	display: grid;
	margin: 0px;
	padding: ${pr => pr.view === "MOBILE" ? "0px 30px" : `${!pr.hasTitle ? "" : "15px 40px"}`};
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
	view: ViewType;
}

const Section = forwardRef((props: SectionPropTypes, ref) => {
	const {
		title,
		description,
		fieldsDef,
		rows,
		dispatch,
		sectionIdx,
		state,
		view
	} = props;

	return (
		<StyledSection
			hasTitle={title}
			id={sectionIdx}
			data-testid="section-test-id"
		>
			{title && <StyledTitle id={sectionIdx} ref={ref}>{title}</StyledTitle>}
			{description && <StyledDescription>{description}</StyledDescription>}
			{rows && (
				<StyledRows view={view} hasTitle={title}>
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
