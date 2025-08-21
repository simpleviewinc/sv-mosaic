import styled from "styled-components";
import theme from "@root/theme";
import ButtonRow from "../ButtonRow";
import { Row } from "../common";

export const CardWrapper = styled.div<{ $collapsed?: boolean }>`
	--card-shadow: ${({ $collapsed }) => $collapsed ? "var(--mos-shadow-sm)" : "var(--mos-shadow-lg)"};

	border-radius: ${theme.rounded.md};
	width: 100%;
	box-shadow: var(--mos-border-light), var(--card-shadow);
`;

export const Heading = styled(Row).attrs({ $align: "center" })<{ $collapsed?: boolean }>`
  	background: ${theme.color.gray[50]};
	border-radius: ${theme.rounded.md};
	padding: ${theme.spacing(0, 5)};
	gap: ${theme.spacing(2)};
	height: 48px;

	${({ $collapsed }) => $collapsed ? "" : `
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	`}
`;

export const Title = styled(Row).attrs({ $align: "center" })`
	gap: ${theme.spacing(2)};

	& .MuiSvgIcon-root {
		color: ${theme.color.gray[600]};
		font-size: ${theme.fontSize.icon.sm};
	}
`;

export const CardButtonRow = styled(ButtonRow)`
	margin-left: auto;
`;

export const ContentWrapper = styled.div`
	padding: ${theme.spacing(0, 5)};
	border-top: 1px solid ${theme.color.gray[300]};
`;

export const ContentItem = styled.div`
	padding: ${theme.spacing(4, 2)};

	&:not(:first-child) {
		border-top: 1px solid ${theme.color.gray[200]};
	}
`;

export const CardBottom = styled(Row).attrs({ $align: "center", $justify: "center" })`
	border-top: 1px solid ${theme.color.gray[200]};
	padding: ${theme.spacing(3, 0)};
	margin: ${theme.spacing(0, 5)};
`;
