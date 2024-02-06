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

export const AddressItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Footer = styled.div`
  margin-bottom: 16px;
`;
