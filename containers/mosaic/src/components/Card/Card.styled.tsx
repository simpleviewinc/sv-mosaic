import styled from "styled-components";
import theme from "@root/theme";
import { Row } from "../common";

export const Heading = styled(Row).attrs({ $align: "center" })<{
	$compact?: boolean;
	$blunt?: boolean;
}>`
  	background: ${theme.color.gray[50]};
	border-radius: ${theme.rounded.md};
	gap: ${theme.spacing(2)};
	width: 100%;

	${({ $compact }) => `
		padding: ${theme.spacing(0, $compact ? 4 : 5)};
		height: ${$compact ? "42" : "48"}px;
	`}

	${({ $blunt = true }) => !$blunt ? "" : `
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom: 1px solid ${theme.color.gray[300]};
	`}

	${({ as }) => as !== "button" ? "" : `
		cursor: pointer;

		&:focus-visible {
			outline: 2px solid ${theme.color.gray[700]};
			outline-offset: 3px;
		}
	`}
`;

export const Title = styled(Row).attrs({ $align: "center" })`
	gap: ${theme.spacing(2)};

	& .MuiSvgIcon-root {
		color: ${theme.color.gray[600]};
		font-size: ${theme.fontSize.icon.sm};
	}
`;

export const CardEndSlot = styled(Row).attrs({ $align: "center" })`
	margin-left: auto;
`;

export const CardContent = styled.div<{
	$compact?: boolean;
	$paddingBottom?: boolean;
}>(({ $compact, $paddingBottom }) => `
	background: ${theme.color.white};

	${$compact ? `
		padding: ${theme.spacing(3, 4, $paddingBottom ? 3 : 0)};
	` : `
		padding: ${theme.spacing(4, 5, $paddingBottom ? 4 : 0)};
	`}

`);

export const CardWrapper = styled.div<{ $collapsed?: boolean }>`
	--card-shadow: ${({ $collapsed }) => $collapsed ? "var(--mos-shadow-sm)" : "var(--mos-shadow-lg)"};

	border-radius: ${theme.rounded.md};
	box-shadow: var(--mos-border-light), var(--card-shadow);
	transition: box-shadow cubic-bezier(0.4, 0, 0.2, 1) 300ms;

	& ${CardContent}:first-child {
		border-top-left-radius: ${theme.rounded.md};
		border-top-right-radius: ${theme.rounded.md};
	}
`;

export const ContentItem = styled.div`
	padding: ${theme.spacing(0, 2, 4)};

	&:not(:first-child) {
		padding-top: ${theme.spacing(4)};
	}

	&:not(:last-child) {
		border-bottom: 1px solid ${theme.color.gray[200]};
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

	${Heading} + & {
		border-top: 0;
	}
`;
