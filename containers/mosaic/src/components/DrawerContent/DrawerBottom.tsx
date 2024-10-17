import React from "react";

import type { DrawerBottomProps } from "./DrawerTypes";

import { StyledDrawerBottom } from "./DrawerContent.styled";

function DrawerBottom(props: DrawerBottomProps) {
	return (
		<StyledDrawerBottom className={`
			${props.background ? `background-${props.background}` : ""}
		`}
		>
			{props.children}
		</StyledDrawerBottom>
	);
}

export default DrawerBottom;
