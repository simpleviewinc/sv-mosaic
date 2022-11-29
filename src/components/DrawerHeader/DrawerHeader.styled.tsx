import theme from "@root/theme";
import styled from "styled-components";

export const StyledDrawerHeader = styled.div`
	background-color: ${theme.newColors.grey2["100"]};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	min-height: 80px;
	max-height: 80px;
`;
