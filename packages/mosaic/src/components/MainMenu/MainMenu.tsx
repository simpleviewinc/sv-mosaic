import React, { useMemo } from "react";
import Drawer from "@mui/material/Drawer";
import type { DrawerProps } from "@mui/material/Drawer";
import { type MainMenuProps } from "./MainMenuTypes";
import { MainMenuPrimary } from "./MainMenuPrimary";

const drawerProps: Pick<DrawerProps, "anchor" | "variant" | "ModalProps" | "PaperProps"> = {
	anchor : "left",
	variant : "temporary",
	ModalProps : { disableEnforceFocus : true },
	PaperProps : { style : { backgroundColor: "transparent", borderRight: "0px", boxShadow: "none", zIndex : "auto" } },
};

export function MainMenu(props: MainMenuProps) {
	const { variant, zIndex } = props;

	const drawerStyle = useMemo(() => ({ zIndex }), [zIndex]);

	if (variant === "hidden" || variant === "mobile") {
		return (
			<Drawer
				{...drawerProps}
				open={props.open}
				onClose={props.onClose}
				style={drawerStyle}
			>
				<MainMenuPrimary {...props} />
			</Drawer>
		);
	}

	return (
		<MainMenuPrimary {...props} />
	);
}
