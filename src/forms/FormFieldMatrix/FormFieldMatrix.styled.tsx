import styled from "styled-components";
import theme from "@root/theme";

export const MatrixWrapper = styled.div`
	${({ hasValue }) => hasValue && `
		border: 2px solid ${theme.newColors.grey2["100"]};
	`}

	& > div > .viewContainer {
		margin: 0;
	}
`;

export const MatrixButtons = styled.div`
	${({ hasValue }) => hasValue && `
		padding: 0.5rem;
	`}
`
