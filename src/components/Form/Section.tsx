import * as React from "react";
import { memo, forwardRef, useCallback } from "react";
import theme from "@root/theme";
import styled from "styled-components";
import { FieldDef } from "@root/components/Field";

// Components
import Row from "./Row";

// Types
import { ViewType } from "@root/forms/TopComponent";
import { Views } from "@root/theme/theme";

const StyledSection = styled.div`
	scroll-margin-top: 60px;
	display: flex;
	flex-direction: column;
	width: calc(100% - 4px); //LAYOUT: Could be reused.
	border: ${pr => !pr.hasTitle ? "none" : `2px solid ${theme.newColors.grey2["100"]}`};
	margin-bottom: ${pr => !pr.hasTitle ? "0px" : "40px"};

	& h1 {
		background-color: ${theme.newColors.grey2["100"]};
		margin: 0px;
		padding: 16px 24px;
	}
`;

const StyledDescription = styled.p`
	margin: 24px 24px 0px 24px;
	font-size: 16px;
	font-family: ${theme.fontFamily};
`

const StyledRows = styled.div`
	display: grid;
	margin: 0px;
	padding: ${pr => pr.view === Views.mobile ? "0px 30px" : `${!pr.hasTitle ? "" : "16px 24px"}`};
`;

const StyledTitle = styled.h2`
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

const Section = forwardRef((props: SectionPropTypes, ref: any) => {
	const {
		title,
		description,
		fieldsDef,
		rows,
		dispatch,
		sectionIdx,
		state,
		view,
	} = props;


	const getRef = useCallback((el) => ref.current[sectionIdx] = el, [])

	return (
		<StyledSection
			hasTitle={title}
			id={sectionIdx}
			data-testid="section-test-id"
		>
			{title && <StyledTitle ref={getRef} id={sectionIdx}>{title}</StyledTitle>}
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
