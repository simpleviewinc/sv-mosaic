import styled from "styled-components";
import theme from "@root/theme";

export const StyledSpan = styled.span`
	& .normalButton > button {
		color: ${theme.newColors.grey3["100"]};
	}

	& .labelIcon {
		font-size: ${theme.iconFontSize};
	}
`;
