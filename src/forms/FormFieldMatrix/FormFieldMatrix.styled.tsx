import styled from "styled-components";
import theme from "@root/theme";

export const MatrixWrapper = styled.div`
	border: ${props => props.hasValue && `2px solid ${theme.newColors.grey2["100"]}`};

	div:nth-child(2) {
		margin: 0;
	}

`;

export const ButtonsWrapper = styled.div`
  display: flex;
	margin: 10px 0 0px 8px;

  .button {
    margin-right: 16px;
  }

  .button:last-child {
    margin-right: 0px;
  }
`;
