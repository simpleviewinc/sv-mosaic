import styled from "styled-components";
import theme from "@root/theme";
import ButtonRow from "../ButtonRow";
import { Row } from "../common";

export const CardWrapper = styled.div<{ $collapsed?: boolean }>`
	--card-shadow: ${({ $collapsed }) => $collapsed ? "var(--mos-shadow-sm)" : "var(--mos-shadow-lg)"};

	border-radius: ${theme.rounded.md};
	box-shadow: var(--mos-border-light), var(--card-shadow);
`;

export const Heading = styled(Row).attrs({ $align: "center" })<{
	$collapsed?: boolean;
	$compact?: boolean;
}>`
  	background: ${theme.color.gray[50]};
	border-radius: ${theme.rounded.md};
	border-bottom: 1px solid ${theme.color.gray[300]};
	gap: ${theme.spacing(2)};

	${({ $compact }) => `
		padding: ${theme.spacing(0, $compact ? 4 : 5)};
		height: ${$compact ? "42" : "48"}px;
	`}

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

export const CardContent = styled.div<{
	$compact?: boolean;
	$paddingBottom?: boolean;
}>(({ $compact, $paddingBottom }) => `
	${$compact ? `
		padding: ${theme.spacing(3, 4, $paddingBottom ? 3 : 0)};
	` : `
		padding: ${theme.spacing(4, 5, $paddingBottom ? 4 : 0)};
	`}

`);

export const ContentItem = styled.div`
	padding: ${theme.spacing(0, 2, 4)};

	&:not(:first-child) {
		padding-top: ${theme.spacing(4)};
		border-top: 1px solid ${theme.color.gray[200]};
	}
`;

export const CardBottom = styled(Row).attrs({ $align: "center", $justify: "center" })<{
	$compact?: boolean;
}>`
	border-top: 1px solid ${theme.color.gray[200]};

	${({ $compact }) => $compact ? `
		padding: ${theme.spacing(2, 0)};
		margin: ${theme.spacing(0, 4)};
	` : `
		padding: ${theme.spacing(3, 0)};
		margin: ${theme.spacing(0, 5)};
	`}
`;
