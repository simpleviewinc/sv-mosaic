import styled from "styled-components";
import theme, { CONTAINERS } from "@root/theme/theme";
import SideNav from "../SideNav/SideNav";
import { containerQuery } from "@root/utils/css";
import type { FormSpacing } from "./FormTypes";
import Button from "../Button";

export const StyledContainerForm = styled.div<{ $fullHeight?: boolean }>`
	position: relative;
	display: flex;
	flex-direction: column;

	container-type: inline-size;
	container-name: ${CONTAINERS.FORM};

	${({ $fullHeight = true }) => $fullHeight && `
		height: 100%;
	`}
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	flex: 1 1 0%;
	min-height: 0;
`;

export const StyledFormContent = styled.div<{ $spacing?: FormSpacing }>`
	overflow-y: auto;
	flex-grow: 1;
	min-width: 0;
	padding: ${({ $spacing }) => $spacing === "compact" ? "16px" : "24px"};
	position: relative;
	background-color: ${theme.color.gray[25]};
`;

export const StyledFormPrimary = styled.div`
	flex-grow: 1;
	min-height: 0;
	display: flex;
	flex-direction: column;

	${containerQuery("xl", "FORM")} {
		flex-direction: row;
	}
`;

export const StyledSideNav = styled(SideNav)`
	display: none;
	margin-top: 10px;

	${containerQuery("sm", "FORM")} {
		display: block;
	}

	${containerQuery("xl", "FORM")} {
		margin-top: 0;
	}
`;

export const StyledFormFooter = styled.div<{ $spacing?: FormSpacing }>`
	border-top: 1px solid ${theme.color.gray[300]};
	padding: ${({ $spacing }) => $spacing === "compact" ? "16px" : "24px"};
	display: flex;
`;

export const StyledFormFooterButton = styled(Button)<{ $push?: "left" | "right"}>`
	${({ $push }) => $push && `
		margin-${$push}: auto;
	`}
`;
