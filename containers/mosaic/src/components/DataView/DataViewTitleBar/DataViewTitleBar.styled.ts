import styled from "styled-components";
import theme from "@root/theme";

export const TitleBarWrapper = styled.div`
	border-bottom: 1px solid ${theme.color.gray[300]};
	padding: ${theme.spacing(5, 6)};
	width: 100%;
`;

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

	& > .left h1 {
		line-height: 33px;
		margin-right: 16px;
		max-width: 916px;
	}
`;
