import type { ReactElement } from "react";

import React, { createContext } from "react";

import type { MenuBaseProps, MenuBaseContextProps } from "./MenuBaseTypes";

import { StyledMenu } from "./MenuBase.styled";

export const MenuBaseContext = createContext<MenuBaseContextProps>(null);

export default function MenuBase(props: MenuBaseProps): ReactElement {
	return (
		<MenuBaseContext.Provider value={{ onClose : props.onClose }}>
			<StyledMenu
				anchorEl={props.anchorEl}
				open={props.open}
				onClose={props.onClose}
			>
				{props.children}
			</StyledMenu>
		</MenuBaseContext.Provider>
	);
}
