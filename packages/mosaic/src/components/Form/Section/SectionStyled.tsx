import theme from "@root/theme";
import styled from "styled-components";

import type { TransientProps } from "@root/types";
import type { SectionPropTypes } from "./SectionTypes";
import { Heading } from "@root/components/Card/Card.styled";

export const SectionHeading = styled(Heading).attrs({ as: "h3" })`
	margin: 0;
	padding: 0;
	height: auto;
`;

export const SectionHeadingButton = styled.button`
	align-items: center;
	background: none;
	border: 0;
	border-radius: inherit;
	color: inherit;
	cursor: pointer;
	display: flex;
	font: inherit;
	gap: ${theme.spacing(2)};
	min-height: 48px;
	padding: ${theme.spacing(0, 5)};
	text-align: left;
	width: 100%;

	&:focus-visible {
		outline: 2px solid ${theme.color.gray[700]};
		outline-offset: 3px;
	}

	& .MuiSvgIcon-root {
		color: ${theme.color.gray[600]};
		font-size: ${theme.fontSize.icon.sm};
		margin-left: auto;
	}
`;

export const StyledDescription = styled.p`
	font-size: ${theme.fontSize.body.lg};
	line-height: ${theme.line["3xloose"]};
	color: ${theme.color.gray[700]};
	margin: 0 0 ${theme.spacing(6)};
`;

export const StyledRows = styled.div<Partial<TransientProps<SectionPropTypes, "spacing">>>`
	margin-bottom: ${theme.spacing(5)};
	display: grid;
	grid-template-columns: repeat(1,minmax(0,1fr));

	${({ $spacing }) => `
		gap: ${theme.spacing($spacing === "compact" ? 3 : 6)} 0;
	`}
`;
