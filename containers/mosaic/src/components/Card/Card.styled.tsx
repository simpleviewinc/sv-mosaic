import styled from "styled-components";
import theme from "@root/theme";

export const CardWrapper = styled.div`
	border: 2px solid ${theme.newColors.grey2["100"]};
	font-family: ${theme.fontFamily};
	width: 100%;
`;

export const TitleBar = styled.div`
	align-items: center;
  	background: ${theme.newColors.grey2["100"]};
	display: flex;
	justify-content: space-between;
	padding: 8px 16px;
`;

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

	& .MuiSvgIcon-root {
		color: ${theme.newColors.almostBlack["100"]};
		width: 16px;
	}
`;

export const BottomActionWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	margin-bottom: 16px;
`;

export const ContentWrapper = styled.div`
	padding: 0 16px;
`;

export const StyledHr = styled.hr`
	border-top: 1px solid ${theme.newColors.grey2["100"]};
`;
