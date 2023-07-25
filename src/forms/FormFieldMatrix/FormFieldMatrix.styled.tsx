import styled from "styled-components";
import theme from "@root/theme";

export const MatrixWrapper = styled.div`
	width: 600px;
	max-width: 100%;

	${({hasValue}) => hasValue && `
		border: 2px solid ${theme.newColors.grey2["100"]};
		border-bottom-width: 1px;
	`}

	& > div > .viewContainer {
		margin: 0;
	}
`;

export const MatrixActions = styled.div`
	${({hasValue}) => hasValue && `
		padding: 0.5rem;
	`}
`
