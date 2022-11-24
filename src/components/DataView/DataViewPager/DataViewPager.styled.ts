import styled from "styled-components";
import theme from "@root/theme";
import Button from "../../Button";

export const StyledSpan = styled.span`
	display: inline-flex;
	align-items: center;
	white-space: nowrap;

	& > .pagerText {
		line-height: 100%;
	}

	span.button:first-child {
		padding: 0 4px 0 4px;
	}
`;

export const StyledButton = styled(Button)`
	svg {
		color: ${(pr) =>
		pr.disabled
			? theme.newColors.simplyGrey["100"]
			: theme.newColors.grey3["100"]};
	}

	button {
		padding: 4px !important;
	}
`;

export const StyledLabel = styled.span`
	font-weight: 400;
`;
