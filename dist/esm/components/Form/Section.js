import * as React from "react";
import { memo, forwardRef } from "react";
import theme from "../../theme";
import styled from "styled-components";
// Components
import Row from "./Row";
const StyledSection = styled.div `
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
const StyledDescription = styled.p `
	height: 46px;
	margin: 0px;
	padding: 50px 40px 20px 40px;
	font-size: 16px;
	font-family: ${theme.fontFamily};
`;
const StyledRows = styled.div `
	display: grid;
	row-gap: 20px;
	margin: 0px;
	padding: ${pr => !pr.hasTitle ? "0px" : "0px 40px 50px 40px"} ;
`;
const StyledTitle = styled.h1 `
	font-size: 20px;
	font-family: ${theme.fontFamily};
	font-weight: 500;
`;
const Section = forwardRef((props, ref) => {
    const { title, description, fieldsDef, rows, dispatch, sectionIdx, state } = props;
    return (React.createElement(StyledSection, { ref: ref, hasTitle: title, id: sectionIdx },
        title && React.createElement(StyledTitle, null, title),
        description && React.createElement(StyledDescription, null, description),
        rows && (React.createElement(StyledRows, { hasTitle: title }, rows.map((row, i) => (React.createElement(Row, { key: `row-${i}`, row: row, rowIdx: i, sectionIdx: sectionIdx, state: state, fieldsDef: fieldsDef, dispatch: dispatch })))))));
});
Section.displayName = "Section";
export default memo(Section);
