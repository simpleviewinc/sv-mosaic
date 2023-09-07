import styled from "styled-components";
import theme from "@root/theme";

export const StyledFieldWrapper = styled.div<{$error?: boolean}>`
	font-family: ${theme.fontFamily};
	padding: ${theme.fieldSpecs.inputSpacing.fieldPadding};
	background-color: ${({ $error }) => $error ? theme.newColors.darkRed["5"] : "transparent"};
	width: 100%;
	max-width: fit-content;
	position: relative;
`;

export const StyledFieldContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
