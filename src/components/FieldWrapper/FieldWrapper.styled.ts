import styled from "styled-components";
import theme from "@root/theme";

export const StyledFieldWrapper = styled.div`
  font-family: ${theme.fontFamily};
  padding: 20px;
  background-color: ${(pr) =>
		pr.error ? theme.colors.lightRed : "transparent"};
  width: fit-content;
`;
