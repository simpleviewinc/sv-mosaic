import styled from "styled-components";
import theme from "@root/theme";

export const StyledSpan = styled.span`
	display: inline-flex;
	align-items: center;
	white-space: nowrap;

	span.button:first-child {
		padding-right: 4px;
	}
`;

export const StyledLabel = styled.span`
	color: ${theme.color.gray[500]};
`;
