import styled from "styled-components";
import theme from "../../utils/theme.js";

const sidePaddings = {
	lg: 40,
	md: 16,
}

export const CardWrapper = styled.div`
	border: 2px solid ${theme.colors.gray200};
	font-family: ${theme.fontFamily};
	width: 100%;
`;

export const TitleBar = styled.div`
	align-items: center;
  background: ${theme.colors.gray200};
	display: flex;
	height: 56px;
	justify-content: space-between;
	padding: 0 ${(pr) => sidePaddings[pr.size]}px;
`;

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const BottomActionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 16px;
`;

export const ContentWrapper = styled.div`
	padding: 0 ${(pr) => sidePaddings[pr.size]}px;
`;
