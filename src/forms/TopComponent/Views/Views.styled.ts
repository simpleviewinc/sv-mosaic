import styled from "styled-components";
import theme, { BREAKPOINTS, Views } from "@root/theme/theme";

const BIG_SCREEN_BREAKPOINT = BREAKPOINTS.topComponent.bigScreenView + "px";

export const TitleRow = styled.div`
	display: flex;
	font-family: ${theme.fontFamily};
	${pr => pr.view === Views.mobile ?
		`flex-direction: row;
		justify-content: space-between;

		@media (min-width: ${BIG_SCREEN_BREAKPOINT}) {
			justify-content: flex-start;
		}
		padding: 20px;
		width: 100%;
		& > div {
			max-width: 50%;
		}
		`
		:
		`
		flex-direction: column;
		margin-right: auto;
		max-width: 60%;
		`
}
`;
