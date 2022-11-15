import styled from "styled-components";
import theme from "@root/theme";

export const StyledFieldWrapper = styled.div`
  font-family: ${theme.fontFamily};
  padding: 20px;
  background-color: ${(pr) =>
		pr.error ? theme.newColors.darkRed["20"] : "transparent"};
  width: fit-content;
`;
