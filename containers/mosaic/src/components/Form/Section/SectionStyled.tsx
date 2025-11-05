import theme from "@root/theme";
import styled from "styled-components";

import type { TransientProps } from "@root/types";
import type { SectionPropTypes } from "./SectionTypes";

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
