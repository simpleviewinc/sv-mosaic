import theme from "@root/theme";
import styled from "styled-components";

export const StyledPageHeader = styled.div`
	display: flex;
	border-bottom: 1px solid ${theme.color.gray[300]};
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	row-gap: ${theme.spacing(2)};
	padding: ${theme.spacing(5, 6)};
`;

export const StyledTitleRow = styled.div`
	display: flex;
	align-items: center;
	max-width: 60%;

	& > div {
		width: 100%;
	}
`;
