import styled from "styled-components";
import Menu from "@mui/material/Menu";
import theme from "@root/theme";

export const StyledMenu = styled(Menu)`
	& > .MuiMenu-paper {
		border-radius: ${theme.rounded.md};
		box-shadow:
			var(--mos-border-light),
			0 34px 60px 0 rgba(0, 0, 0, 0.15),
			var(--mos-shadow-xl);
		margin-top: ${theme.spacing(2)};

		.MuiList-root {
			padding: ${theme.spacing(1)};
		}
	}
`;
