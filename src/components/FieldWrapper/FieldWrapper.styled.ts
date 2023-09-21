import styled from "styled-components";
import theme from "@root/theme";
import { StyledProps } from "@root/types";
import { FieldWrapperProps } from "./FieldWrapperTypes";

export const StyledFieldWrapper = styled.div<StyledProps<FieldWrapperProps, "error">>`
	font-family: ${theme.fontFamily};
	padding: 20px;
	background-color: ${({$error}) => $error ? theme.newColors.darkRed["20"] : "transparent"};
	width: fit-content;
`;
