import * as React from "react";
import { memo } from "react";
// Styled components
import styled from "styled-components";
// Utils
import theme, { BREAKPOINTS } from "../../../theme/theme";
const BIG_SCREEN_BREAKPOINT = BREAKPOINTS.topComponent.bigScreenView + "px";
export const FormTitle = styled.span `
	font-family: ${pr => !pr.type && theme.museoFont};
	color: ${theme.colors.almostBlack};
	font-size: ${pr => pr.type && pr.type === "DRAWER" ? "20px" : "28px"};
	${(pr) => pr.type === "DRAWER" &&
    `
				font-weight: normal;
				margin: auto;
			`};

	@media (max-width: ${theme.breakpoints.mobile}) {
		margin: 0;
	}
`;
const Description = styled.span `
	color: ${theme.colors.gray600};
	font-size: 14px;
	margin-top: 8px;

	@media (max-width: ${theme.breakpoints.mobile}) {
		align-self: center;
	}
`;
export const TitleRow = styled.div `
	display: flex;
	font-family: ${theme.fontFamily};
	${pr => pr.view === "MOBILE" ?
    `flex-direction: row;
		justify-content: space-between;

		@media (min-width: ${BIG_SCREEN_BREAKPOINT}) {
			justify-content: flex-start;
		}
		padding: 20px;
		`
    :
        `
		flex-direction: column;
		margin-right: auto;
		`}
`;
const TitleWrapper = (props) => {
    const { title, description, view, } = props;
    return (React.createElement(TitleRow, { view: view },
        React.createElement(FormTitle, null, title),
        description && React.createElement(Description, null, description)));
};
export default memo(TitleWrapper);
