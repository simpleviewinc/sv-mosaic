import styled from "styled-components";

// Material UI
import Dialog from "@mui/material/Dialog";

// Utils
import theme from "@root/theme";
import { Text } from "../Typography";

export const StyledDialog = styled(Dialog)`
	z-index: 99999 !important;

	.MuiDialogContent-root {
		border-bottom: 1px solid ${theme.color.gray[300]};
	}

	.MuiDialogActions-root {
		padding: ${theme.spacing(4, 5)};
	}
`;

export const StyledDialogTitle = styled(Text).attrs({ tag: "h3", size: "xl", weight: "medium" })`
	padding: ${theme.spacing(5, 6, 0)};
`;
