import styled from "styled-components";
import theme from "@root/theme";

export const TitleBarWrapper = styled.div`
	border-bottom: 2px solid ${theme.newColors.grey2["100"]};
	padding: 24px 24px 16px 24px;
	width: 100%;
`

export const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 16px;

	& > .left {
		display: flex;
		align-items: center;
	}

	& > .left > *:last-child {
		display: flex;
		margin-right: 0px;
	}

	& > .left > h1 {
		color: ${theme.newColors.almostBlack["100"]};
		font-family: ${theme.museoFont};
		font-size: 28px;
		font-weight: 250;
		line-height: 33px;
		margin-bottom: 0px;
		margin-right: 16px;
		max-width: 916px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;
