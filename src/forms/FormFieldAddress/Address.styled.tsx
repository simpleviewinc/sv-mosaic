import styled from "styled-components";

// Utils
import theme from "@root/theme";

export const AddAddressWrapper = styled.div`
  align-items: center;
  background-color: ${theme.newColors.grey2["100"]};
  display: flex;
  justify-content: center;
  min-height: 204px;
  width: 300px;
`;

export const FlexContainer = styled.div`
  border-style: solid;
  border-color: ${theme.newColors.grey2["100"]};
  border-width: 2px;
	padding: 0.5rem;

  flex-grow: 1;
  width: 600px;
  max-width: 100%;
`;
