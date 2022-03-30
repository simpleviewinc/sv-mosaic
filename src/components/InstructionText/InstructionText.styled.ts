import styled from "styled-components"
import theme from "@root/theme";

export const InstructionTextWrapper = styled.div`
  border-left: ${theme.borders.simplyGray};
  height: 51px;
  margin-left: auto;
  margin-top: 44px;
  padding-left: 20px;
  width: 400px;
`;

export const StyledInstructionText = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: ${theme.colors.assistiveText};
  display: -webkit-box;
  font-family: ${theme.fontFamily};
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
