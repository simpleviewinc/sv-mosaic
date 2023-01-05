import styled from "styled-components";
import theme from "@root/theme";

export const MatrixWrapper = styled.div`
	border: ${(props) =>
		props.hasValue
			? `2px solid ${theme.newColors.grey2["100"]}`
			: "transparent"};

	& > div > .viewContainer {
		margin: 0;
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	margin: 10px 0 0px 8px;
	gap: 16px;
`;
