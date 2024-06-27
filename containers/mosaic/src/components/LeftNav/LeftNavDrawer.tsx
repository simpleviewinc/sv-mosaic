import * as React from "react";
import { useContext, useMemo, ReactElement } from "react";
import Drawer from "@mui/material/Drawer";
import { DrawerProps } from "@mui/material/Drawer";

import { LeftNavContext } from "./LeftNavTypes";

// set aside the drawerProps so they are static and do not change between renders to prevent glitches with material-ui
const drawerProps: Pick<DrawerProps, "anchor" | "variant" | "ModalProps" | "PaperProps"> = {
	anchor : "left",
	variant : "temporary",
	ModalProps : { disableEnforceFocus : true },
	PaperProps : { style : { borderRight : "0px", zIndex : "auto" } },
};

interface Props {
	open: boolean;
	onClose(): void;
	children?: React.ReactNode;
}

/** Renders the drawer used in all variants of the LeftNav. */
function LeftNavDrawer(props: Props): ReactElement {
	const leftNavContext = useContext(LeftNavContext);

	const drawerStyle = useMemo(() => ({
		zIndex : leftNavContext.zIndex,
	}), [leftNavContext.zIndex]);

	return (
		<Drawer
			{...drawerProps}
			open={props.open}
			onClose={props.onClose}
			style={drawerStyle}
		>
			{props.children}
		</Drawer>
	);
}

export default LeftNavDrawer;
