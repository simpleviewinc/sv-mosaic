import theme from "@root/theme";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import type { TransientProps } from "@root/types";
import type { SectionPropTypes } from "./SectionTypes";

export const StyledAccordion = styled(Accordion)<TransientProps<SectionPropTypes, "title">>`
	box-shadow: none !important;
	border-radius: 0px;
	scroll-margin-top: 60px;
	margin: 0 !important;

	${({ $title }) => $title ? `
		border: 1px solid ${theme.newColors.grey2["100"]};
		margin: 0px 0px 40px 0px;
	` : `
		border: 0;
		margin: 0;
	`}

	&:before {
		content: none !important;
	}
`;

export const StyledSectionHeader = styled(AccordionSummary)`
	background-color: ${theme.newColors.grey2["100"]} !important;
	margin: 0px !important;
	padding: 12px 24px !important;
	min-height: 0px !important;
	color: ${theme.newColors.grey4["100"]} !important;

	& :first-child {
		margin: 0px !important;
	}
`;

export const StyledSectionContent = styled(AccordionDetails)`
	padding: 0px !important;
	margin: 0px !important;
`;

export const StyledDescription = styled.p`
	font-size: ${theme.fontSize.body.lg};
	line-height: ${theme.line["3xloose"]};
	color: ${theme.newColors.grey3["100"]};
	margin: 18px 0 0;
	padding: 0 24px;
`;

export const StyledRows = styled.div<Partial<TransientProps<SectionPropTypes, "title" | "spacing">>>`
	margin: 0px;
	display: grid;
	grid-template-columns: repeat(1,minmax(0,1fr));

	${({ $title }) => $title && `
		padding: 18px 24px;
	`}

	${({ $spacing }) => `
		gap: ${theme.spacing($spacing === "compact" ? 3 : 6)} 0;
	`}
`;

export const StyledTitle = styled.h2`
	font-size: ${theme.fontSize.text};
	line-height: ${theme.line.xtight};
	font-weight: ${theme.weight.medium};
	margin: 0px;
`;
