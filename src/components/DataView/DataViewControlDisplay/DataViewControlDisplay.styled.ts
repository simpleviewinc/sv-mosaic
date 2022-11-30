import styled from "styled-components";
import theme from "@root/theme";

export const StyledSpan = styled.span`
	& .button {
		border-right: 2px solid ${theme.newColors.grey2["100"]};
		padding-right: 4px;
	}

	& .normalButton > button {
		color: ${theme.newColors.grey3["100"]};
	}

	& .labelIcon {
		font-size: ${theme.iconFontSize};
	}
`;
