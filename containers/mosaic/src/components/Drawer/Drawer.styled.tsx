import styled from "styled-components";
import MUIDrawer from "@mui/material/Drawer";

import theme from "@root/theme";
import type { AnchorStyle } from "./DrawerTypes";

export const StyledDrawerContent = styled.div`
	font-family: ${theme.fontFamily};
	display: flex;
	flex-direction: column;
	height: 100%;
	font-size: 14px;
`;

export const MUIDrawerStyled = styled(MUIDrawer)<{ $anchorStyle: { currentStyle: AnchorStyle; previousStyle: AnchorStyle }; $display?: boolean }>`
	z-index: 1100;

	${({ $anchorStyle, $display }) => $anchorStyle && `
		.MuiDrawer-paper {
			background: white;
			transition: transform 255ms ease-in-out !important;

			${($anchorStyle.currentStyle === "left" && $anchorStyle.previousStyle === "right") && `
				transform: translateX(-25vw) !important;
			`}
			${($anchorStyle.currentStyle === "left" && $anchorStyle.previousStyle === "left" && $display) && `
				transform: translateX(-25vw) !important;
			`}
			${($anchorStyle.currentStyle === "left" && $anchorStyle.previousStyle === "left" && !$display) && `
				transform: translateX(-100vw) !important;
			`}
		}
	`}
`;
