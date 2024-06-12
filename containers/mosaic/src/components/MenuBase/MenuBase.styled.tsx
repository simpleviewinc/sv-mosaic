import styled from "styled-components";
import Menu from "@mui/material/Menu";
import theme from "@root/theme";

export const StyledMenu = styled(Menu)`
	& > .MuiMenu-paper {
		box-shadow: 0px 2px 6px ${theme.newColors.almostBlack["20"]};
		margin-top: 4px;
	}
`;
