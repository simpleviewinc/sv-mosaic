import type { Key } from "react";
import type { DrawerProps as MUIDrawerProps } from "@mui/material/Drawer";
import type { SxProps } from "@mui/system";

export type AnchorStyle = "left" | "right";

export interface DrawerProps extends MUIDrawerProps {
	open: boolean;
	onClose?: () => unknown;
	children: JSX.Element;
	anchor?: AnchorStyle;
	sx?: SxProps;
	idx?: Key;
	exitCB?: () => void;
	anchorstyle?: AnchorStyle;
	display?: boolean;
	backdropCloseHandler?: boolean;
}
