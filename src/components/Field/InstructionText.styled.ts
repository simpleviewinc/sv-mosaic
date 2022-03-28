import styled from "styled-components"
import theme from "@root/theme";

export const InstructionTextWrapper = styled.div`
  border-left: ${theme.borders.simplyGray};
  height: 51px;
  margin-left: auto;
  margin-top: ${pr => pr.labelMargin === "16px" ? "52px" : "44px"}
  padding-left: 20px;
  width: 400px;

  &.instruction-text-right {
	display: block;
	width: 400px;
	min-height: 51px;
	padding-left: 10px;
	border-left: 1px solid black;
	margin-left: auto;
  }

  &.instruction-text-tooltip {
	opacity: 0;
	width: 0px;
	border: none;
	margin-left: auto;
  }
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
