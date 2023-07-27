import styled from "styled-components";
import theme from "@root/theme";

export const MatrixWrapper = styled.div`
	width: 600px;
	max-width: 100%;

	border-style: solid;
	border-color: ${theme.newColors.grey2["100"]};
	border-width: 2px;

	${({hasValue}) => `
		border-bottom-width: ${hasValue ? 1 : 2}px;
	`}

	& > div > .viewContainer {
		margin: 0;
	}
`;

export const MatrixActions = styled.div`
	padding: 0.5rem;
`
