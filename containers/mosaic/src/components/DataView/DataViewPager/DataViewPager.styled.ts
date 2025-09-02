import styled from "styled-components";
import theme from "@root/theme";
import Button from "../../Button";

export const StyledSpan = styled.span`
	display: inline-flex;
	align-items: center;
	white-space: nowrap;

	span.button:first-child {
		padding-right: 4px;
	}
`;

export const StyledButton = styled(Button)`
	svg {
		color: ${(pr) =>
		pr.disabled
			? theme.newColors.simplyGrey["100"]
			: theme.newColors.grey3["100"]};
	}
`;

export const StyledLabel = styled.span`
	color: ${theme.color.gray[500]};
`;
