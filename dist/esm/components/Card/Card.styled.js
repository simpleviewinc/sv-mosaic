import styled from "styled-components";
import theme from "../../theme";
export const CardWrapper = styled.div `
	border: 2px solid ${theme.colors.gray200};
	font-family: ${theme.fontFamily};
	width: 100%;
`;
export const TitleBar = styled.div `
	align-items: center;
  background: ${theme.colors.gray200};
	display: flex;
	height: 56px;
	justify-content: space-between;
	padding: 0 16px;
`;
export const TitleWrapper = styled.div `
	display: flex;
	align-items: center;
`;
export const BottomActionWrapper = styled.div `
	align-items: center;
	display: flex;
	justify-content: center;
	margin-bottom: 16px;
`;
export const ContentWrapper = styled.div `
	padding: 0 16px;
`;
export const StyledHr = styled.hr `
	border-top: 1px solid ${theme.colors.gray200};
`;
