import theme from "@root/theme";
import type { CSSProperties } from "react";

import styled from "styled-components";

export const Row = styled.div<{
	$align?: CSSProperties["alignItems"];
	$justify?: CSSProperties["justifyContent"];
	$wrap?: CSSProperties["flexWrap"];
	$gap?: Parameters<typeof theme.spacing>;
}>`
	display: flex;

	${({ $align }) => $align && `
		align-items: ${$align};
	`}

	${({ $justify }) => $justify && `
		justify-content: ${$justify};
	`}

	${({ $wrap }) => $wrap && `
		flex-wrap: ${$wrap};
	`}

	${({ $gap }) => $gap && `
		gap: ${theme.spacing(...$gap)};
	`}
`;

export const Column = styled(Row)`
	flex-direction: column;
`;
