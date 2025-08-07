import styled from "styled-components";
import MUIDrawer from "@mui/material/Drawer";

import type { AnchorStyle } from "./DrawerTypes";

export const StyledDrawerContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const MUIDrawerStyled = styled(MUIDrawer)<{ $anchorStyle: { currentStyle: AnchorStyle; previousStyle: AnchorStyle }; $display?: boolean }>`
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
