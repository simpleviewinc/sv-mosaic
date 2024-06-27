import theme from "@root/theme";
import styled from "styled-components";

export const StyledPageHeader = styled.div`
	display: flex;
	border-bottom: 2px solid ${theme.newColors.grey2["100"]};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 24px;
	min-height: 80px;
	max-height: 80px;
`;

export const StyledTitleRow = styled.div`
	display: flex;
	align-items: center;
	max-width: 60%;

	& > div {
		width: 100%;
	}
`;
