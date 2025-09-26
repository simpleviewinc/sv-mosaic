import styled from "styled-components";
import theme from "@root/theme";
import { CONTAINERS } from "@root/theme/theme";
import { containerQuery } from "@root/utils/css";
import { Column } from "../common";
import type { BreakpointColumns } from "./ContentTypes";

export const ContentFields = styled.div`
	container-type: inline-size;
	container-name: ${CONTAINERS.CONTENT};
`;

export const StyledContentRow = styled.dl<{ $breakpoints?: BreakpointColumns }>(({ $breakpoints }) => {
	const columnQueries = Object.entries($breakpoints).map(([breakpoint, columns]) => {
		return `${containerQuery(breakpoint, "CONTENT")} {
			grid-template-columns: repeat(${columns},minmax(0,1fr));
		}
		`;
	}).join("\n");

	return `
		display: grid;
		gap: 0 12px;
		width: 100%;
		margin: 0;
		grid-template-columns: repeat(1 ,minmax(0,1fr));

		${columnQueries}
	`;
});

export const FieldContainer = styled(Column).attrs({ $gap: [2] })<{ $margin?: boolean }>`
	${({ $margin }) => $margin && `
		margin-bottom: 24px;
	`}
`;

export const FieldTerm = styled.dt`
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: ${theme.weight.medium};
`;

export const FieldDefinition = styled.dd`
	margin: 0;
	width: 100%;
`;

export const FieldDefinitionInner = styled.span`
	vertical-align: middle;
	overflow: hidden;
	word-wrap: break-word;
`;

export const FieldDefinitionText = styled.span`
	color: ${theme.color.gray[800]};
`;
