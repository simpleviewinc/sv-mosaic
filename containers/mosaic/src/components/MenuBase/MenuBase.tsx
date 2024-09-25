import type { ReactElement } from "react";

import React from "react";

import type { MenuBaseProps } from "./MenuBaseTypes";

import { StyledMenu } from "./MenuBase.styled";

export default function MenuBase(props: MenuBaseProps): ReactElement {
	return (
		<StyledMenu
			anchorEl={props.anchorEl}
			open={props.open}
			onClose={props.onClose}
		>
			{props.children}
		</StyledMenu>
	);
}
